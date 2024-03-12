const food = [
  {
    id: 1,
    name: "Phở",
    image: "https://static.vinwonders.com/production/pho-bo-ha-noi-1.jpg",
    price: "30.000",
    madeIn: "Việt Nam",
  },
  {
    id: 2,
    name: "Bánh Mì",
    image:
      "https://static-images.vnncdn.net/files/publish/2023/4/24/clever-junior-830.jpg",
    price: "15.000",
    madeIn: "Việt Nam",
  },
  {
    id: 3,
    name: "Sushi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_HUs8F9vP6cqdPDXMWlgyWD3yZsT8QNyDQ&usqp=CAU",
    price: "25.000",
    madeIn: "Japan",
  },
  {
    id: 4,
    name: "Hamburger",
    image:
      "https://t4.ftcdn.net/jpg/06/05/19/97/360_F_605199701_0UzQJmfAi7Ob81OHWNMiYL4K8QbLKkEB.jpg",
    price: "45.000",
    madeIn: "Germany",
  },
  {
    id: 5,
    name: "Pizza",
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/cach_lam_banh_pizza_thom_ngon_chuan_nha_hang_2_43d4f180fd.png",
    price: "50.000",
    madeIn: "Ytaly",
  },
];

function showFood() {
  var html = "";
  var d = 0;
  for (var i = 0; i < food.length; i++) {
    d++;
    html + "<tr>";
    html += "<td>" + d + "</td>";
    html += "<input type='hidden' value='" + i + "' id='editIndex'>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td><img src=" + food[i].image + " style=height:100px;width:100px></td>";
    html += "<td>" + food[i].madeIn + "</td>";
    html += "<td>" + food[i].price + "</td>";
    html +=
      "<td><input type='button' value='Sửa' onclick='editFood(" +
      i +
      ")' /> <input type='button' value='Xoá' onclick='deleteFood(" +
      i +
      ")' /></td>";
    html += "</tr>";
  }
    document.getElementById("tbl").innerHTML = html;
}

function createFood() {
  var n = food.length;
  n++;
  var foodName = document.getElementById("foodName").value;
  var foodImage = document.getElementById("foodImage").value;
  var foodPrice = document.getElementById("foodPrice").value;
  var foodMadeIn = document.getElementById("foodMadeIn").value;

  var newFood = {
    id: n,
    name: foodName,
    image: foodImage,
    price: foodPrice,
    madeIn: foodMadeIn,
  };
  food.push(newFood);
  showFood();
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

  document.getElementById("editIndex").value = index;
  document.getElementById("editFoodName").value = food[index].name;
  document.getElementById("editFoodImage").value = food[index].image;
  document.getElementById("editFoodMadeIn").value = food[index].madeIn;
  document.getElementById("editFoodPrice").value = food[index].price;

  document.getElementById("editForm").style.display = "block";
}

function closeEditForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
}

function updateFood() {
  var indexToUpdate = parseInt(document.getElementById("editIndex").value);
  var newName = document.getElementById("editFoodName").value;
  var newImage = document.getElementById("editFoodImage").value;
  var madeIn = document.getElementById("editFoodMadeIn").value;
  var newPrice = document.getElementById("editFoodPrice").value;

  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].madeIn = madeIn;
  food[indexToUpdate].price = newPrice;
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
  showFood(food);
}

function deleteFood(index) {
  food.splice(index, 1);
  showFood();
}
