import { GetServerSideProps, GetServerSidePropsContext } from "next";
import db from "@/db/db";


const getCategories = () => {
    return Array.from({ length: 6 }, (_, i) => `category-${i + 1}`);
}

const getItems = async (catName: string, limit: number) => {
    console.log(catName)
    const cat = getCategories();
    const isCategoryExist = cat.find(el => el === catName);
    // if (isCategoryExist)
    // return db.getItems(limit);
    return false;
}


const getServerSideProps: GetServerSideProps<CollectionPageProps> = async (context: GetServerSidePropsContext) => {
    const params = context.params as { id: string };
    // Fetch data for the current dynamic path
    const { id } = params;
    const categoryName = id;
    const itemsList = await getItems(id, 20);

    if (!itemsList) {
        return { notFound: true };
    }

    // Return the data as props for the page component
    return { props: { categoryName, itemsList } };
}

export default getServerSideProps;
