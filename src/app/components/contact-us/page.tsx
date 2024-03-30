import Link from 'next/link'
import Navbar from '@/app/Navbar/page';

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', margin: '20px 0', color: '#333' }}>This is the Contact Us page</h1>
            <Link href="/" style={{ display: 'block', textAlign: 'center', fontSize: '20px', padding: '10px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', width: '200px', margin: '0 auto', borderRadius: '5px' }}>Back to Home</Link>
        </>
    );
}


