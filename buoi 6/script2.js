const man = [
  {
    id: 1,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "250.000",
    image:
      "https://th.bing.com/th/id/R.156d63bdd3c4b16f1e69e4c46fe9e3ae?rik=uvf3u09wqgAvLw&pid=ImgRaw&r=0",
    newPrice: "240.000",
  },

  {
    id: 2,
    name: "Quần baggy đen sang trọng QQ",
    code: "TC1025011BA",
    price: "398.000",
    image: "https://cf.shopee.vn/file/6464d23c90ea5ca5a782888abbff08a9",
    newPrice: "300.000",
  },

  {
    id: 3,
    name: "The Cosmo (Hồng) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://th.bing.com/th/id/R.156d63bdd3c4b16f1e69e4c46fe9e3ae?rik=uvf3u09wqgAvLw&pid=ImgRaw&r=0",
    newPrice: "240.000",
  },

  {
    id: 4,
    name: "The Cosmo (Trắng) Quần short khaki",
    code: "TC1025011BA",
    price: "400.000",
    image: "https://cf.shopee.vn/file/6464d23c90ea5ca5a782888abbff08a9",
    newPrice: "350.000",
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
    newPrice: "200.000",
  },

  {
    id: 2,
    name: "Áo thun phối váy ngắn",
    code: "TC1025011BA",
    price: "398.000",
    image:
      "https://th.bing.com/th/id/OIP.M3qYb3NEWc1CILGmYCEuCwHaHa?rs=1&pid=ImgDetMain",
    newPrice: "350.000",
  },

  {
    id: 3,
    name: "Áo khoác",
    code: "TC1025011BA",
    price: "300.000",
    image:
      "https://th.bing.com/th/id/OIP.M3qYb3NEWc1CILGmYCEuCwHaHa?rs=1&pid=ImgDetMain",
    newPrice: "250.000",
  },

  {
    id: 4,
    name: "Áo thun",
    code: "TC1025011BA",
    price: "400.000",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22100-pbrp1w40vviv42",
    newPrice: "350.000",
  },
];
function listTable() {
  var html = "";
  for (i in man) {
    html + "<tr>";
    html += "<td>" + man[i].id + "</td>";
    html += "<td>" + man[i].code + "</td>";
    html += "<td>" + man[i].name + "</td>";
    html +=
      "<td><img src=" + man[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + man[i].price + "</td>";
    html += "<td>" + man[i].newPrice + "</td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }
}
function women1() {
  var html = "";
  for (i in women) {
    html + "<tr>";
    html += "<td>" + women[i].id + "</td>";
    html += "<td>" + women[i].code + "</td>";
    html += "<td>" + women[i].name + "</td>";
    html +=
      "<td><img src=" + women[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + women[i].price + "</td>";
    html += "<td>" + women[i].newPrice + "</td>";
    html += "</tr>";
  }

  document.getElementById("tbl").innerHTML = html;
}
