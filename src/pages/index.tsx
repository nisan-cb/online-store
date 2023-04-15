import Head from 'next/head';
import Header from '@/components/header/header';


const Home = () => {
    return (
        <>
            <Head>
                <title>Tip-Top</title>
            </Head>
            <Header />
            <main>
                home page
            </main>
        </>
    )
}

export default Home;
