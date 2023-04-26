import { FC } from "react";
import getStaticPaths from "./getStaticPaths";
import Header from "@/components/header/header";
import Head from "@/components/head/head";
import Main from "@/components/main/main";
import Gallery from "@/components/main/components/gallery/gallery";
import getStaticProps from "./getStaticProps";


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

export { getStaticPaths }
export { getStaticProps }
export default CategoryPage;
