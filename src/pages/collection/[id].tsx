import { FC } from "react";
import getServerSideProps, { PageProps } from './getServerSideProps'
import Header from "@/components/header/header";
import Head from "@/components/head/head";
import Main from "@/components/main/main";
import Gallery from "@/components/main/components/gallery/gallery";


const CategoryPage: FC<PageProps> = ({ data }) => {


    return (
        <>
            <Head title={data} />
            <Header />
            <Main>
                <Gallery />
            </Main>
        </>
    )
}

export { getServerSideProps }
export default CategoryPage;
