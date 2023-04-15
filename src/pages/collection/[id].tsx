import { FC } from "react";
import getServerSideProps, { PageProps } from './getServerSideProps'
import Header from "@/components/header/header";
import Head from "@/components/head/head";


const CategoryPage: FC<PageProps> = ({ data }) => {


    return (
        <>
            <Head title={data} />

            <Header />
            <main>
                {data}
            </main>
        </>
    )
}

export { getServerSideProps }
export default CategoryPage;
