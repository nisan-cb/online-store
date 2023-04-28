import { FC } from "react";
import Header from "@/components/header/header";
import Head from "@/components/head/head";
import Main from "@/components/main/main";
import Gallery from "@/components/main/components/gallery/gallery";
import { getStaticPaths } from "./utils/getStaticPaths";
import { getStaticProps } from "./utils/getStaticProps";


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
