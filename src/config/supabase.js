import { createClient } from "@supabase/supabase-js";

const supabaseConexion = createClient(
  "https://tgfpuutwszjhzyqgpzbb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZnB1dXR3c3pqaHp5cWdwemJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4OTc1MzAsImV4cCI6MjAyMDQ3MzUzMH0.EJ1AAhaB70dD7UKtmWJ-krpIUgU0jMwTa4LkDOtSQUw"
);

export { supabaseConexion };
