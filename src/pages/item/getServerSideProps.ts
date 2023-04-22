import { GetServerSideProps, GetServerSidePropsContext } from "next";

export interface PageProps {
    item: {
        id: string,
        tittle: string,
        price: string
    };
}



const fetchItemData = async (itemId: string) => {
    console.log(`request for single item: ${itemId}`)
    return {
        id: itemId,
        tittle: "tittle",
        price: "58$"
    }
}


const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) => {
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

export default getServerSideProps;
