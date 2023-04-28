import { GetStaticProps } from "next";


export const getStaticProps: GetStaticProps<CollectionPageProps> = async ({ params }) => {
    const categoryName = params?.id as string;

    return { props: { categoryName } };
};

