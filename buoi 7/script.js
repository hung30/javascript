const man = [
  {
    id: 1,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://th.bing.com/th/id/R.156d63bdd3c4b16f1e69e4c46fe9e3ae?rik=uvf3u09wqgAvLw&pid=ImgRaw&r=0",
    discount: "100.000 vnđ",
  },

  {
    id: 2,
    name: "Quần baggy đen sang trọng QQ",
    code: "TC1025011BA",
    price: "398.000",
    image: "https://cf.shopee.vn/file/6464d23c90ea5ca5a782888abbff08a9",
    discount: "100.000 vnđ",
  },

  {
    id: 3,
    name: "The Cosmo (Hồng) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://th.bing.com/th/id/R.156d63bdd3c4b16f1e69e4c46fe9e3ae?rik=uvf3u09wqgAvLw&pid=ImgRaw&r=0",
    discount: "200.000 vnđ",
  },

  {
    id: 4,
    name: "The Cosmo (Trắng) Quần short khaki",
    code: "TC1025011BA",
    price: "400.000",
    image: "https://cf.shopee.vn/file/6464d23c90ea5ca5a782888abbff08a9",
    discount: "269.000 vnđ",
  },
];
const women = [
  {
    id: 1,
    name: "Váy fashion",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://i.pinimg.com/originals/37/ba/a2/37baa25a7b95cd788f4b0ec67320e286.jpg",
    discount: "50.000 vnđ",
  },

  {
    id: 2,
    name: "Áo thun phối váy ngắn",
    code: "TC1025011BA",
    price: "398.000",
    image:
      "https://th.bing.com/th/id/OIP.M3qYb3NEWc1CILGmYCEuCwHaHa?rs=1&pid=ImgDetMain",
    discount: "200.000 vnđ",
  },

  {
    id: 3,
    name: "Áo khoác",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://th.bing.com/th/id/OIP.M3qYb3NEWc1CILGmYCEuCwHaHa?rs=1&pid=ImgDetMain",
    discount: "20.000 vnđ",
  },

  {
    id: 4,
    name: "Áo thun",
    code: "TC1025011BA",
    price: "400.000",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22100-pbrp1w40vviv42",
    discount: "29.000 vnđ",
  },
];

function show(data) {
  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += "<div class='card'>";
    html += "<img src='" + data[i].image + "' alt='product image'>";
    html += "<div class='card-body'>";
    html += "<h5 class='card-title'>" + data[i].name + "</h5>";
    html += "<p class='card-text'>Price: " + data[i].price + "</p>";
    html += "<p class='card-text'>Discount: " + data[i].discount + "</p>";
    html += "<button onclick='editProduct(" + i + ")'>Edit</button>";
    html += "<button onclick='deleteProduct(" + i + ")'>Delete</button>";
    html += "</div></div>";
  }

  document.getElementById("tbl").innerHTML = html;
}

function createProduct() {
  var productName = document.getElementById("productName").value;
  var productImage = document.getElementById("productImage").value;
  var productPrice = document.getElementById("productPrice").value;
  var productDiscount = document.getElementById("productDiscount").value;
  var productGender = document.getElementById("productGender").value;

  var newProduct = {
    name: productName,
    image: productImage,
    price: productPrice,
    discount: productDiscount,
  };

  if (productGender === "men") {
    man.push(newProduct);
  } else if (productGender === "women") {
    women.push(newProduct);
  }

  document.getElementById("productName").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDiscount").value = "";

  show(productGender === "men" ? man : women);
}

function editProduct(index) {
  document.getElementById("editProductName").value = man[index].name;
  document.getElementById("editProductImage").value = man[index].image;
  document.getElementById("editProductPrice").value = man[index].price;
  document.getElementById("editProductDiscount").value = man[index].discount;

  document.getElementById("editForm").style.display = "block";
}

function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newDiscount = document.getElementById("editProductDiscount").value;

  var indexToUpdate = parseInt(document.getElementById("editIndex").value);
  man[indexToUpdate].name = newName;
  man[indexToUpdate].image = newImage;
  man[indexToUpdate].price = newPrice;
  man[indexToUpdate].discount = newDiscount;

  document.getElementById("editForm").style.display = "none";

  show(man);
}

function deleteProduct(index) {
  man.splice(index, 1);
  show(man);
}
