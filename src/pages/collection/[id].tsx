import { FC } from "react";
import getServerSideProps, { PageProps } from './getServerSideProps'
import Header from "@/components/header/header";
import Head from "@/components/head/head";
import Main from "@/components/main/main";


const CategoryPage: FC<PageProps> = ({ data }) => {


    return (
        <>
            <Head title={data} />
            <Header />
            <Main>
                {data}
            </Main>
        </>
    )
}

export { getServerSideProps }
export default CategoryPage;
