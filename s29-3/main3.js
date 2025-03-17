let menu = `
-----------Menu-----------
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin tên món ăn (tên, giá, mô tả).
4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
6. Thoát.
`;
let menuData = [];
let choice;
while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            removeDish();
            break;
        case 3:
            updateDish();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchDish();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
}
function addDish() {
    let category = prompt("Nhập danh mục món ăn:");
    let name = prompt("Nhập tên món ăn:");
    let price = +prompt("Nhập giá món ăn:");
    let description = prompt("Nhập mô tả món ăn:");

    if (!menuData[category]) {
        menuData[category] = [];
    }

    menuData[category].push({ name, price, description });
    console.log(`Thêm món ăn "${name}" vào danh mục "${category}" thành công!`);
}
function removeDish() {
    let category = prompt("Nhập danh mục món ăn:");
    let name = prompt("Nhập tên món ăn cần xóa:");

    if (menuData[category]) {
        let index = menuData[category].findIndex(dish => dish.name === name);
        if (index !== -1) {
            menuData[category].splice(index, 1);
            console.log(`Đã xóa món "${name}" khỏi danh mục "${category}".`);
        } else {
            console.log("Không tìm thấy món ăn.");
        }
    } else {
        console.log("Danh mục không tồn tại.");
    }
}
function updateDish() {
    let category = prompt("Nhập danh mục món ăn:");
    let name = prompt("Nhập tên món ăn cần cập nhật:");

    if (menuData[category]) {
        let dish = menuData[category].find(d => d.name === name);
        if (dish) {
            dish.name = prompt("Nhập tên mới:") || dish.name;
            dish.price = +prompt("Nhập giá mới:") || dish.price;
            dish.description = prompt("Nhập mô tả mới:") || dish.description;
            console.log(`Cập nhật món "${name}" thành công!`);
        } else {
            console.log("Không tìm thấy món ăn.");
        }
    } else {
        console.log("Danh mục không tồn tại.");
    }
}
function displayMenu() {
    if (Object.keys(menuData).length === 0) {
        console.log("Menu trống.");
        return;
    }

    console.log("------- Menu Nhà Hàng -------");
    for (let category in menuData) {
        console.log(`Danh mục: ${category}`);
        menuData[category].forEach(dish => {
            console.log(` - ${dish.name} | Giá: ${dish.price} | Mô tả: ${dish.description}`);
        });
    }
}
function searchDish() {
    let searchName = prompt("Nhập tên món ăn cần tìm:");
    let foundDishes = [];

    for (let category in menuData) {
        let dishes = menuData[category].filter(d => d.name.includes(searchName));
        foundDishes.push(...dishes.map(d => ({ category, ...d })));
    }

    if (foundDishes.length > 0) {
        console.log("Kết quả tìm kiếm:");
        foundDishes.forEach(dish => {
            console.log(`Danh mục: ${dish.category} | Tên: ${dish.name} | Giá: ${dish.price} | Mô tả: ${dish.description}`);
        });
    } else {
        console.log("Không tìm thấy món ăn.");
    }
}