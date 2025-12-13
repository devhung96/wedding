# Hướng dẫn thiết lập Supabase

## Bước 1: Tạo dự án Supabase

1. Truy cập [https://supabase.com](https://supabase.com)
2. Đăng ký/Đăng nhập tài khoản
3. Tạo dự án mới
4. Lưu lại **Project URL** và **anon/public key**

## Bước 2: Tạo bảng trong Supabase

1. Vào **SQL Editor** trong Supabase Dashboard
2. Chạy script SQL từ file `supabase-schema.sql` để tạo các bảng:
   - `confirmations` - Lưu thông tin xác nhận tham dự
   - `wishes` - Lưu lời chúc

## Bước 3: Cấu hình Environment Variables

**QUAN TRỌNG**: Tạo file `.env` trong thư mục gốc của dự án (cùng cấp với `package.json`) với nội dung:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Thay thế:
- `your_supabase_project_url` bằng Project URL từ Supabase (ví dụ: `https://xxxxx.supabase.co`)
- `your_supabase_anon_key` bằng anon/public key từ Supabase

**Lưu ý**:
- File `.env` đã được thêm vào `.gitignore` để không commit lên git
- Các biến môi trường phải có prefix `VITE_` để Rsbuild tự động expose cho client-side
- Không có khoảng trắng xung quanh dấu `=`

## Bước 4: Khởi động lại ứng dụng

**QUAN TRỌNG**: Sau khi tạo file `.env`, bạn **PHẢI** khởi động lại dev server để các biến môi trường được load:

1. Dừng server hiện tại (nếu đang chạy): Nhấn `Ctrl+C`
2. Khởi động lại:

```bash
yarn dev
```

Nếu vẫn không nhận được biến môi trường, kiểm tra:
- File `.env` có đúng tên và nằm ở thư mục gốc không
- Các biến có prefix `VITE_` không
- Đã khởi động lại server chưa

## Tính năng đã được tích hợp

✅ **Xác nhận tham dự**: Lưu thông tin xác nhận tham dự vào bảng `confirmations`
✅ **Gửi lời chúc**: Lưu lời chúc vào bảng `wishes`
✅ **Hiển thị lời chúc**: Component `WeddingWishes` tự động tải và hiển thị lời chúc từ Supabase
✅ **Real-time updates**: Lời chúc mới sẽ tự động hiển thị mà không cần refresh trang

## Cấu trúc Database

### Bảng `confirmations`
- `id`: UUID (tự động)
- `name`: Tên người xác nhận
- `message`: Lời chúc (tùy chọn)
- `attendance`: 'yes' hoặc 'no'
- `guest_count`: Số lượng khách
- `side`: 'bride' hoặc 'groom'
- `created_at`: Thời gian tạo

### Bảng `wishes`
- `id`: UUID (tự động)
- `name`: Tên người gửi
- `message`: Nội dung lời chúc
- `created_at`: Thời gian tạo

