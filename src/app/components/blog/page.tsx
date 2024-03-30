'use client'
import Link from 'next/link'
import Navbar from '@/app/Navbar/page';
import { useRouter } from 'next/navigation';
export default function Blog() {
    const router = useRouter()
    const addNewPost = () => {

        router.push('/components/posts')
    }
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                    <b>This is the Blog Posts Page</b>
                </h1>
                <button onClick={addNewPost} style={{ fontSize: '20px', fontWeight: 'bold', padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Add New Post
                </button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Link href="/" style={{ display: 'inline-block', fontSize: '20px', padding: '10px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', width: '200px', marginTop: '30px', borderRadius: '5px' }}>Back to Home</Link>
                <h1>What is useRouter</h1>
                <p>Here, I have used useRouter, so what is useRouter. I'll explain in the following paragraph.</p>

                <h2>
                    Navigate Programmatically:</h2>
                <p>
                    Instead of using Link components, you might encounter situations where you need to implement logic or validations before navigating to the next page. For example, let's say you're on a blog page with a button labeled Add Post. You want to execute some logic, such as validating user input, before navigating to the next page after clicking this button. While the simple Link component can handle basic page-to-page navigation, it lacks the flexibility to execute custom logic or validations. This is where the useRouter hook comes into play. By using the useRouter hook, you can incorporate your custom logic and validations before initiating the navigation to the next page when a button is clicked. This allows for a more dynamic and interactive user experience in your Next.js application.
                </p>
            </div >




        </>
    );
}


