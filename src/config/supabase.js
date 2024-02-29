import { createClient } from "@supabase/supabase-js";

/* const supabaseConexion = createClient(
  import.meta.env.VITE_SUPEBASE_URL,
  import.meta.env.VITE_SUPEBASE_KEY
); */

//Lo dejo por si acaso no va el .env.local.

const supabaseConexion = createClient(
  "https://hpagogvjlwigezymiejy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYWdvZ3ZqbHdpZ2V6eW1pZWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwOTc1OTUsImV4cCI6MjAyMzY3MzU5NX0.rw5eW_7nFqBIr4Wk-hHkdOZ3cv_yXpV7pGFsD4WwC_M"
);

export { supabaseConexion };
