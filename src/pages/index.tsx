import Head from 'next/head';
import styles from './page.module.css'
import Header from '@/components/header/header';


export default function Home() {
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
