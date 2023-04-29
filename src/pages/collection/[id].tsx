import { GetStaticPaths } from 'next'
import config from "../../config.json";
import { GetStaticProps } from "next";
import { FC, useEffect } from "react";
import Header from "@/components/header/header";
import Head from "@/components/head/head";
import Main from "@/components/main/main";
import Gallery from "@/components/main/components/gallery/gallery";
import { useSession } from 'next-auth/react';


const CategoryPage: FC<CollectionPageProps> = ({ categoryName }) => {
    // const session = useSession();

    // useEffect(() => {
    //     console.log('Session:', session);
    // }, [session]);
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



const getStaticPaths: GetStaticPaths = async () => {
    const paths = config.categories;

    const mappedPaths = paths.map((path) => ({ params: { id: path } }));

    return {
        paths: mappedPaths,
        fallback: false,
    };
}



const getStaticProps: GetStaticProps<CollectionPageProps> = async ({ params }) => {
    const categoryName = params?.id as string;

    return { props: { categoryName } };
};


export { getStaticPaths }
export { getStaticProps }
export default CategoryPage;

