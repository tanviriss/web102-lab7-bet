import { createClient } from "@supabase/supabase-js";

const URL = "https://zzyncjymuatkjegmwzmy.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eW5janltdWF0a2plZ213em15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3Mzc1ODIsImV4cCI6MjA0NjMxMzU4Mn0.CBbjQjocFWdq4fCmngjpDxQUZSueHdxpeb0nGfw5n1I";

export const supabase = createClient(URL, API_KEY);
