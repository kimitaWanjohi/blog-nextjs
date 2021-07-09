import Link from 'next/link';

export default function FirstPost() {

    return (
        <div>
            <Link href="/">
                <a>home</a>
            </Link>
            <h2> This is the first post</h2>
            <div>
                <img src="images/profile.jpg" alt="kimita" />
            </div>
        </div>
    )
}