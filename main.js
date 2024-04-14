
function them(){
    var tensp = document.querySelector('.tensp').innerText;
    var giasp = document.querySelector('.gia h3').innerText;
    
    // Tạo một mục sản phẩm mới
    var newItem = document.createElement('li');
    newItem.innerText = tensp + ' - ' + giasp;

    // Thêm mục sản phẩm vào danh sách giỏ hàng
    document.getElementById('danhsachgiohang').appendChild(newItem);
}
