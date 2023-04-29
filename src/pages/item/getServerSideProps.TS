import { GetServerSideProps, GetServerSidePropsContext } from "next";
import db from "@/db/db";

export interface PageProps {
    item: SingleItemData
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) => {
    const params = context.params as { id: string };
    const { id } = params;
    console.log("id: ", id)
    const data = await db.getItemById(id);
    console.log(data);


    if (!data)
        return { notFound: true };

    return { props: { item: data } };
}