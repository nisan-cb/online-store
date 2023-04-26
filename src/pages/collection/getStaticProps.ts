import { GetStaticProps } from "next";


const getStaticProps: GetStaticProps<CollectionPageProps> = async ({ params }) => {
    const categoryName = params?.id as string;

    return { props: { categoryName } };
};

export default getStaticProps;
