import { createClient } from "@supabase/supabase-js";

const supabaseConexion = createClient(
  import.meta.env.VITE_SUPEBASE_URL,
  import.meta.env.VITE_SUPEBASE_KEY
);

export { supabaseConexion };
