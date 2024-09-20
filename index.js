// Hàm toggle để hiển thị/ẩn chi tiết đơn hàng
function toggleDetails(button) {
    const details = button.nextElementSibling; // Lấy phần tử chi tiết sau nút

    // Kiểm tra trạng thái hiển thị
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Hiển thị chi tiết
        button.textContent = "Ẩn Chi Tiết"; // Thay đổi văn bản nút
    } else {
        details.style.display = "none"; // Ẩn chi tiết
        button.textContent = "Xem Chi Tiết"; // Thay đổi văn bản nút
    }
}

// Đảm bảo tất cả phần tử chi tiết đều ẩn khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    const detailElements = document.querySelectorAll('.details');
    detailElements.forEach(detail => {
        detail.style.display = "none"; // Ẩn tất cả phần tử chi tiết
    });
    
    // Cập nhật quảng cáo mỗi 5 giây
    setInterval(updateAd, 5000);
});

// Quảng cáo
const ads = [
    "Giảm giá 20% cho đơn hàng đầu tiên! Nhập mã: FIRST20",
    "Mua 2 tặng 1 cho tất cả các sản phẩm!",
    "Miễn phí giao hàng cho đơn hàng trên 500.000 VNĐ!"
];

let currentAdIndex = 0;

function updateAd() {
    const adBanner = document.querySelector('.ad-banner p');
    currentAdIndex = (currentAdIndex + 1) % ads.length;
    adBanner.textContent = ads[currentAdIndex];
}

// Hàm khởi tạo bản đồ
function initMap() {
    const center = { lat: 10.8231, lng: 106.6297 }; // Tọa độ TP. HCM
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
    });

    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Vị trí của bạn!",
    });
}
