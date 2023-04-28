import { GetServerSideProps, GetServerSidePropsContext } from "next";
import db from "@/db/db";
export interface PageProps {
    item: SingleItemData
}



const fetchItemData = async (itemId: string) => {
    console.log(`request for single item: ${itemId}`)
    const item = await db.getItemById(itemId)
    return {
        id: item?.id || "",
        tittle: item?.tittle || "",
        price: item?.price || 0,
        mainImage: item?.images[0] || ""
    }
}


export const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) => {
    const params = context.params as { id: string };
    // Fetch data for the current dynamic path
    const { id } = params;
    const data = await fetchItemData(id);

    if (!data) {
        return { notFound: true };
    }

    // Return the data as props for the page component
    return { props: { item: data } };
}

