'use client'
import Link from 'next/link'
import Navbar from '@/app/Navbar/page';
import { useRouter } from 'next/navigation';
export default function Post() {

    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', margin: '20px 0', color: '#333' }}>Please Create Your New Post!</h1>
            <Link href="/" style={{ display: 'block', textAlign: 'center', fontSize: '20px', padding: '10px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', width: '200px', margin: '10 auto', borderRadius: '5px' }}>Back to Home</Link>

        </>
    );
}


