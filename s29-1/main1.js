let menu = `
-----------Menu-----------
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6.Thoát.
`;
let choice;
let contact = [];
let id = 1;
while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            showContact();
            break;
        case 3:
            findContact();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}

function addContact() {
    let
}