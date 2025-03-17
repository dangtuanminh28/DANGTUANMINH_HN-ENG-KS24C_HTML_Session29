let menu = `
-----------Menu-----------
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo ID.
4. Cập nhật thông tin sản phẩm theo ID.
5. Xóa sản phẩm theo ID.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
`;
let products = [];
let id = 1;
let choice;

while (choice !== 7) {
    choice = +prompt(menu);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            showAllProducts();
            break;
        case 3:
            showProductById();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            filterProductsByPrice();
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
}

function addProduct() {
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = +prompt("Nhập số lượng sản phẩm:");

    let product = {
        id: id++,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };

    products.push(product);
    console.log("Thêm sản phẩm thành công!");
}

function showAllProducts() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống.");
        return;
    }

    products.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`);
    });
}

function showProductById() {
    let productId = +prompt("Nhập ID sản phẩm:");
    let product = products.find(p => p.id === productId);

    if (product) {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}

function updateProduct() {
    let productId = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let product = products.find(p => p.id === productId);

    if (product) {
        product.name = prompt("Nhập tên mới:") || product.name;
        product.price = +prompt("Nhập giá mới:") || product.price;
        product.category = prompt("Nhập danh mục mới:") || product.category;
        product.quantity = +prompt("Nhập số lượng mới:") || product.quantity;
        console.log("Cập nhật thông tin sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}

function deleteProduct() {
    let productId = +prompt("Nhập ID sản phẩm cần xóa:");
    let index = products.findIndex(p => p.id === productId);

    if (index !== -1) {
        products.splice(index, 1);
        console.log("Xóa sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}

function filterProductsByPrice() {
    let minPrice = +prompt("Nhập giá thấp nhất:");
    let maxPrice = +prompt("Nhập giá cao nhất:");

    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (filteredProducts.length === 0) {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    } else {
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`);
        });
    }
}