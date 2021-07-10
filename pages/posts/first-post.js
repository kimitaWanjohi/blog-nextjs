import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function FirstPost() {

    return (
        <Layout>
            <Head>
                <title>this is the first post</title>
            </Head>
            <Link href="/">
                <a>home</a>
            </Link>
            <h2> This is the first post</h2>
            <div>
                <Image src="/images/profile.jpg" width={144} height={144} alt="kimita" />
            </div>
        </Layout>
    )
}