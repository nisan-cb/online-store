import { GetServerSideProps, GetServerSidePropsContext } from "next";

export interface PageProps {
    data: any;
}

const getCategories = () => {
    return Array.from({ length: 6 }, (_, i) => `category-${i + 1}`);
}

const fetchData = async (catName: string) => {
    console.log(catName)
    const cat = getCategories();
    return cat.find(el => el === catName);
}


const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) => {
    const params = context.params as { id: string };
    // Fetch data for the current dynamic path
    const { id } = params;
    const data = await fetchData(id);

    if (!data) {
        return { notFound: true };
    }

    // Return the data as props for the page component
    return { props: { data } };
}

export default getServerSideProps;
