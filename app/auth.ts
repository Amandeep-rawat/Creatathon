import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github"
import prisma from "@/lib/index";
console.log(process.env.GITHUB_CLIENT_ID);
console.log(process.env.GITHUB_CLIENT_SECRET);


// if(!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET){
//     throw new Error("Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET")
// }
export const {handlers:{GET,POST},auth,signIn,signOut}=NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        GithubProvider(
            {

                clientId:process.env.GITHUB_CLIENT_ID,
                clientSecret:process.env.GITHUB_CLIENT_SECRET
            }
        )
    ],
    callbacks:{
        async session({session,user}){
            if(session && user){
                session.user.id=user.id
            }
            return session
        }
    }
})
