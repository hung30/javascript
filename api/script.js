const url = "https://6613835153b0d5d80f678afe.mockapi.io/food";
let food;

function start() {
  getFoods((foods) => {
    renderFoods(foods);
  });
  handleCreateForm();
}
start();

//function

function getFoods(callback) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(callback)
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function renderFoods(foods) {
  var html = "";
  var d = 0;
  if (foods.length == 0) {
    html += "<td colspan='6'>Không có món ăn nào được tìm thấy</td>";
  } else {
    for (var i = 0; i < foods.length; i++) {
      d++;
      html + "<tr>";
      html += "<td>" + d + "</td>";
      html += "<input type='hidden' value='" + i + "' id='editIndex'>";
      html += "<td>" + foods[i].name + "</td>";
      html +=
        "<td ><img onclick=showDescription(" +
        foods[i].id +
        ") src=" +
        foods[i].image +
        " style=height:100px;width:100px></td>";
      html += "<td>" + foods[i].madeIn + "</td>";
      html += "<td>" + foods[i].price + "</td>";
      html +=
        "<td><input type='button' value='Sửa' onclick='editFood(" +
        foods[i].id +
        ")' /> <input type='button' value='Xoá' onclick='deleteFood(" +
        foods[i].id +
        ")' /></td>";
      html += "</tr>";
    }
  }
  document.getElementById("tbl").innerHTML = html;
}

function createFood(data, callback) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(callback)
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function handleCreateForm() {
  var createBtn = document.getElementById("createFood");

  createBtn.onclick = () => {
    var foodName = document.getElementById("foodName").value;
    var foodImage = document.getElementById("foodImage").value;
    var foodPrice = document.getElementById("foodPrice").value;
    var foodMadeIn = document.getElementById("foodMadeIn").value;
    var foodDescription = document.getElementById("foodDescription").value;
    var newFood = {
      name: foodName,
      image: foodImage,
      price: foodPrice,
      madeIn: foodMadeIn,
      description: foodDescription,
    };
    createFood(newFood, () => {
      getFoods((foods) => {
        renderFoods(foods);
      });
      document.getElementById("foodName").value = "";
      document.getElementById("foodPrice").value = "";
      document.getElementById("foodMadeIn").value = "";
      document.getElementById("foodImage").value = "";
      document.getElementById("foodDescription").value = "";
    });
  };
}

function deleteContent() {
  document.getElementById("foodName").value = "";
  document.getElementById("foodPrice").value = "";
  document.getElementById("foodMadeIn").value = "";
  document.getElementById("foodImage").value = "";
}

function editFood(index) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("editForm").style.display = "block";
  getFoods((foods) => {
    document.getElementById("editIndex").value = index;
    document.getElementById("editFoodName").value = foods[index - 1].name;
    document.getElementById("editFoodImage").value = foods[index - 1].image;
    document.getElementById("editFoodMadeIn").value = foods[index - 1].madeIn;
    document.getElementById("editFoodPrice").value = foods[index - 1].price;
    document.getElementById("editFoodDescription").value =
      foods[index - 1].description;
  });

  document.getElementById("editForm").style.display = "block";
}

function closeEditForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
  document.getElementById("showdescription").style.display = "none";
}

function updateFood() {
  var indexToUpdate = parseInt(document.getElementById("editIndex").value);
  console.log("index to:", indexToUpdate);
  var newName = document.getElementById("editFoodName").value;
  var newImage = document.getElementById("editFoodImage").value;
  var madeIn = document.getElementById("editFoodMadeIn").value;
  var newPrice = document.getElementById("editFoodPrice").value;
  var newDes = document.getElementById("editFoodDescription").value;

  var newFood = {
    name: newName,
    image: newImage,
    price: newPrice,
    madeIn: madeIn,
    description: newDes,
  };

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFood),
  };
  fetch(url + "/" + indexToUpdate, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(
      getFoods((foods) => {
        renderFoods(foods);
      })
    )
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
  document.getElementById("editForm").style.display = "none";
  start();
}

function deleteFood(index) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url + "/" + index, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(() => {
      getFoods((foods) => {
        renderFoods(foods);
      });
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

function searchFood() {
  var searchKeyword = document
    .getElementById("searchInput")
    .value.toLowerCase();
  var rows = document.querySelectorAll("#tbl tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var foodName = row.cells[1].innerText.toLowerCase();

    if (foodName.includes(searchKeyword)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

function showDescription(index) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("showdescription").style.display = "block";
  console.log(index);
  var name = document.getElementById("nameFood");
  var description = document.getElementById("description");
  getFoods((foods) => {
    name.innerText = foods[index - 1].name;
    description.innerText = foods[index - 1].description;
  });
  document.getElementById("showdescription").style.display = "block";
}
