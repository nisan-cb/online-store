import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/main'
// import styles from './page.module.css'
// import { getServerSideProps, PageProps } from './utils/getServerSideProps'
import { FC } from 'react'
import Head from '@/components/head/head'
import Header from '@/components/header/header'
import SingleItem from '@/components/main/components/singleItem/singleItem'



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

// export { getServerSideProps }
export default Item;

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

