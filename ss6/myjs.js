function layGiaTriTrongOInput() {
    // let ten = prompt("nhập tên của bạn");
    let ten = document.getElementById("name").value
    alert("xin chào bạn: " + ten)
}
let conf = confirm("bạn có muốn thoát không");
alert("giá trị biến conf: "+ conf)