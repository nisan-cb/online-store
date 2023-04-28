import { GetServerSideProps, GetServerSidePropsContext } from "next";
import db from "@/db/db";
import Main from '@/components/main/main'
import { FC } from 'react'
import Head from '@/components/head/head'
import Header from '@/components/header/header'
import SingleItem from '@/components/main/components/singleItem/singleItem'


interface PageProps {
    item: SingleItemData
}

const Item: FC<PageProps> = ({ item }) => {
    const { id, tittle } = item;
    return (
        <>
            <Head title={tittle} />
            <Header />
            <Main >
                <SingleItem itemData={item} scrollIntoView />
            </Main>
        </>
    )
}



const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) => {
    const params = context.params as { id: string };
    const { id } = params;
    console.log("id: ", id)
    const data = await db.getItemById(id);
    console.log(data);
    // const data = {
    //     id: "4dasdad45",
    //     tittle: "tittle",
    //     price: 111,
    //     mainImage: ""
    // };

    if (!data)
        return { notFound: true };

    return { props: { item: data } };
}

export { getServerSideProps }
export default Item;