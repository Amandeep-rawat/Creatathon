"use server"
import * as auth from "@/app/auth"
export const signOut=async()=>await auth.signOut()