'use client'

import Link from 'next/link';
import { Frown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-black'>
                <Frown className='size-24 font-bold text-white ' />
                <h2 className='text-3xl font-bold text-center text-rose-700'>Not Found: {pathname}</h2>
                <p className='text-center text-white'>Could not find requested resource</p>
                <p className='text-center text-white'>Please check the URL and try again</p>
                <button className='bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full'>
                    <Link href="/">Return Home</Link>
                </button>
            </div>
        </>
    );
}
