import React from 'react';
import { signIn } from '@/actions/sign-in';
import { auth } from '../auth';
import { signOut } from '@/actions/sign-out';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User } from 'lucide-react';
const LoginPage = async() => {
  const session=await auth()
  return (
    <div>
{
      !session?.user ?(
    <form action={signIn}>
    
        
        <button className='bg-red-400 py-2 px-3 rounded-lg'  type='submit'>Login</button>
        </form>
      
      ):(
        <div className='flex items-center gap-x-4'>
            <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <img className='w-8 h-8 rounded-full' src={session.user.image || ""} alt="" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        

        <form action={signOut}>

        <button className='bg-red-400 py-2 px-3 rounded-lg'  type='submit'>Logout</button>
    </form>
        </div>
      )
    }
    </div>

  );
}

export default LoginPage;
