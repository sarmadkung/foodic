import "react-native-url-polyfill/auto";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from 'react-native';
import { createClient } from "@supabase/supabase-js";

// const ExpoSecureStoreAdapter = {
//   getItem: (key: string) => {
//     return AsyncStorage.getItemAsync(key);
//   },
//   setItem: (key: string, value: string) => {
//     AsyncStorage.setItemAsync(key, value);
//   },
//   removeItem: (key: string) => {
//     AsyncStorage.deleteItemAsync(key);
//   },
// };

// Create a single supabase client for interacting with your database
const supabase = createClient(
  // 'https://wiwjotsqjntfqefgrolg.supabase.co',
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpd2pvdHNxam50ZnFlZmdyb2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzODkwNjAsImV4cCI6MjAwMDk2NTA2MH0.Nfzdg-4_ImmoAdGW3ef8HYWQ2u2nZN37R_I_CHvAV-o",
  "https://lcorxowbnhjkttgzemfn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjb3J4b3dibmhqa3R0Z3plbWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1NjMzNTgsImV4cCI6MjAwMTEzOTM1OH0.JV3zshVa0G7Ry2_fbAgLFPc3EqXn7tqpeTqCSso-zvw",
  {
    auth: {
      // storage: ExpoSecureStoreAdapter as any,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

export default supabase;
