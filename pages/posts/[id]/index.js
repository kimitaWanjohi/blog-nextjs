import { useRouter } from 'next/dist/client/router';
import Layout from '../../../components/Layout';
import Head from 'next/head'
import axios from 'axios'

export default function Post({post}){
    
    const router  = useRouter()
    const {id} = router.query

    return (
        <Layout >
            <Head>
                <tilte>{post.title}</tilte>
            </Head>
            <div>
                <p>
                   {
                       post.title
                   }
                </p>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ( context ) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.data
    console.log(post)
    return {
        props: {
            post
        }
    }
}