import { FC } from "react";
import Header from "@/components/header/header";
import Head from "@/components/head/head";
import Main from "@/components/main/main";
import Gallery from "@/components/main/components/gallery/gallery";
// import { getStaticPaths } from "./utils/getStaticPaths";
// import { getStaticProps } from "./utils/getStaticProps";


const CategoryPage: FC<CollectionPageProps> = ({ categoryName }) => {

    return (
        <>
            <Head title={categoryName} />
            <Header />
            <Main>
                <Gallery categoryName={categoryName} />
            </Main>
        </>
    )
}

// export { getStaticPaths }
// export { getStaticProps }
export default CategoryPage;

import { GetStaticPaths } from 'next'
import config from "../../config.json";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = config.categories;

    const mappedPaths = paths.map((path) => ({ params: { id: path } }));

    // Return the paths object
    return {
        paths: mappedPaths,
        fallback: false,
    };
}

import { GetStaticProps } from "next";


export const getStaticProps: GetStaticProps<CollectionPageProps> = async ({ params }) => {
    const categoryName = params?.id as string;

    return { props: { categoryName } };
};



