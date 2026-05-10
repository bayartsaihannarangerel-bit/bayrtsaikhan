import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://byxgjbbsnumkqwxkmfvx.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eGdqYmJzbnVta3F3eGttZnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzOTM2ODksImV4cCI6MjA5Mzk2OTY4OX0.9vb3bhwzAzFtB-HAmtxCQVk-5VWVtURGc-7Fu-1AuN8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)