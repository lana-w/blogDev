import Link from 'next/link';

export default function blogFeed (){

    return (
        <main>
            <Link href="/posts/sample_blog_post">
                <h2>Back to Post</h2>
            </Link>
            <Link href="/">
                <h2>Back to Home</h2>
            </Link>
        
        </main>
    );
}