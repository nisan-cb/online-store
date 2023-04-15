import { FC } from "react";
import getServerSideProps, { PageProps } from './getServerSideProps'
import Head from "next/head";
import Header from "@/components/header/header";


const CategoryPage: FC<PageProps> = ({ data }) => {


    return (
        <>
            <Head>
                <title>Tip-Top | {data}</title>
            </Head>
            <Header />
            <main>
                {data}
            </main>
        </>
    )
}

export { getServerSideProps }
export default CategoryPage;
