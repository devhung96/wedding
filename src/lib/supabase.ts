import { createClient } from '@supabase/supabase-js';

// Theo tài liệu Rsbuild: https://rsbuild.rs/guide/advanced/env-vars
// Sử dụng import.meta.env để truy cập biến môi trường có prefix VITE_
// Các biến này được inject qua source.define trong rsbuild.config.ts
const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.REACT_APP_SUPABASE_ANON_KEY || '';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

