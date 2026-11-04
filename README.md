# ⚔️ IdleFantasy - Ironman Companion & Interactive Roadmap

> Ứng dụng web tương tác hỗ trợ người chơi chế độ **Ironman (Cày chay tự lực)** trong game Idle Fantasy RPG. Cung cấp lộ trình 9 giai đoạn tối ưu, thời khắc biểu AFK, công cụ tính toán vật liệu xây dựng và kiểm tra điều kiện săn boss.

![License](https://img.shields.io/badge/License-MIT-amber.svg)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen.svg)
![Security](https://img.shields.io/badge/Security-DOM--based%20XSS%20Hardened-blue.svg)

---

## 🌟 Tính Năng Nổi Bật

- **Lộ trình 9 Giai Đoạn (Phases 1 - 9):** Từ lúc tạo nhân vật chọn tộc (Orc/Gnome) tới chế tạo Abyssal Whip, đóng The Dock và hạ gục Sea Serpent.
- **Hỗ trợ Song Ngữ Linh Hoạt:** Chuyển đổi mượt mà giữa Tiếng Anh (EN), Tiếng Việt (VI) hoặc chế độ Song ngữ đồng thời (Bilingual).
- **Bộ Lọc Đa Chiều:** Lọc nhiệm vụ theo khung giờ vàng trong ngày (`07:00`, `12:00`, `17:00`, `21:00`), phân loại (`Combat`, `Agility`) hoặc trạng thái (`Chưa xong`).
- **Thời Khắc Biểu AFK & 4 Nguyên Tắc Cốt Lõi:** Hướng dẫn tối ưu hóa hàng đợi không lãng phí 1 giây khi offline.
- **Công Cụ Tính Toán Vật Liệu:** Bảng theo dõi The Town Project (Construction 40, mở ô queue thứ 5) và Gatekeeper Sea Serpent (Armour Defence $\ge$ 370).
- **Phản Hồi Âm Thanh (Audio Feedback):** Sử dụng Tone.js tạo âm thanh chúc mừng mỗi khi hoàn thành nhiệm vụ (có thể bật/tắt).
- **Bảo Mật & Lưu Trữ Cục Bộ An Toàn:** Tự động đồng bộ tiến độ qua `localStorage` với cơ chế kiểm tra tính hợp lệ dữ liệu (Sanitization & Prototype Pollution defense). Hỗ trợ xuất/nhập mã JSON sao lưu tiện lợi.
- **Kiến Trúc Thuần Client (Zero Build Step):** Chạy ngay trực tiếp trên trình duyệt mà không cần cài đặt Node.js hay qua các bước build phức tạp.

---

## 📁 Sơ Đồ Cấu Trúc Thư Mục

```text
idle_fanstasy_checklist/
├── .gitignore              # Bộ lọc loại trừ file rác hệ thống & cấu hình agent
├── README.md               # Tài liệu giới thiệu & hướng dẫn triển khai
├── index.html              # Điểm khởi chạy chính cho GitHub Pages (Root)
├── assets/                 # Thư mục tài nguyên đa phương tiện
│   └── favicon.svg         # Icon nhận diện thương hiệu SVG Dark Fantasy
├── css/                    # Thư mục mã định kiểu giao diện
│   └── style.css           # Tùy biến scrollbar, hiệu ứng blur, animation
└── js/                     # Thư mục mã logic ứng dụng
    └── app.js              # Roadmap data, I18N, state management & DOM renderer
```

---

## 🚀 Hướng Dẫn Bật GitHub Pages

Dự án được cấu trúc hoàn toàn tương thích với nền tảng tĩnh GitHub Pages, toàn bộ liên kết tài nguyên sử dụng đường dẫn tương đối (`./css/style.css`, `./js/app.js`, `./assets/favicon.svg`), đảm bảo hoạt động trơn tru cả ở root domain hoặc subpath repository:

1. **Đẩy mã nguồn lên kho lưu trữ GitHub của bạn:**
   ```bash
   git remote add origin https://github.com/Akkayz/idle_fanstasy_checklist.git
   git branch -M main
   git push -u origin main
   ```

2. **Cấu hình GitHub Pages trong giao diện GitHub:**
   - Truy cập vào Repository của bạn trên GitHub.
   - Nhấp chọn tab **Settings** (Cài đặt) ở thanh điều hướng trên cùng.
   - Ở thanh menu bên trái, tìm mục **Code and automation** -> chọn **Pages**.
   - Tại mục **Build and deployment**:
     - **Source:** Chọn `Deploy from a branch`.
     - **Branch:** Chọn nhánh `main`.
     - **Folder:** Chọn `/ (root)`.
     - Nhấp nút **Save** (Lưu).

3. **Truy cập ứng dụng:**
   - Sau khoảng 1-2 phút, GitHub Actions sẽ kích hoạt deployment tự động.
   - Ứng dụng sẽ khả dụng tại địa chỉ:  
     `https://akkayz.github.io/idle_fanstasy_checklist/`

---

## 🛡️ Tiêu Chuẩn Bảo Mật & Tối Ưu Hóa (ECC Standard)

- **DOM-based XSS Hardened:** Toàn bộ quá trình tạo và hiển thị task, nhãn, thanh tiến độ và thông báo toast được thao tác thông qua native DOM APIs (`createElement`, `textContent`, `replaceChildren`), loại bỏ triệt để nguy cơ tiêm mã độc từ dữ liệu đầu vào.
- **Sanitized State & Schema Validation:** Dữ liệu nạp từ `localStorage` hoặc từ chức năng nhập mã JSON sao lưu đều được kiểm tra nghiêm ngặt qua danh sách trắng (whitelisting), chặn đứng tấn công prototype pollution (`__proto__`, `constructor`).
- **No Hardcoded Secrets:** Mã nguồn không chứa bất kỳ API Key, Bearer Token hay thông tin đăng nhập nhạy cảm nào.
- **Dynamic Module Loading:** Hỗ trợ nạp Firebase SDK linh hoạt theo điều kiện, không phát sinh request thừa khi chạy môi trường tĩnh.
- **Mobile Responsive:** Khai báo chuẩn thẻ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` và hỗ trợ cảm ứng `touch-action: manipulation`.

---

## 📜 Giấy Phép (License)

Dự án phát hành theo giấy phép mã nguồn mở [MIT License](LICENSE).
