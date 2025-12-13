-- Tạo bảng lưu thông tin xác nhận tham dự
CREATE TABLE IF NOT EXISTS confirmations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT,
  attendance TEXT NOT NULL CHECK (attendance IN ('yes', 'no')),
  guest_count INTEGER NOT NULL DEFAULT 1,
  side TEXT NOT NULL CHECK (side IN ('bride', 'groom')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tạo bảng lưu lời chúc
CREATE TABLE IF NOT EXISTS wishes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tạo index để tối ưu truy vấn
CREATE INDEX IF NOT EXISTS idx_confirmations_created_at ON confirmations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wishes_created_at ON wishes(created_at DESC);

-- Bật Row Level Security (RLS) - cho phép mọi người đọc và ghi
ALTER TABLE confirmations ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

-- Chính sách cho phép mọi người đọc
CREATE POLICY "Allow public read access on confirmations" ON confirmations
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access on wishes" ON wishes
  FOR SELECT USING (true);

-- Chính sách cho phép mọi người thêm dữ liệu
CREATE POLICY "Allow public insert on confirmations" ON confirmations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on wishes" ON wishes
  FOR INSERT WITH CHECK (true);

