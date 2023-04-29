import { GetServerSideProps, GetServerSidePropsContext } from "next";
import db from "@/db/db";
import Main from '@/components/main/main'
import { FC } from 'react'
import Head from '@/components/head/head'
import Header from '@/components/header/header'
import SingleItem from '@/components/main/components/singleItem/singleItem'
import { getServerSideProps, PageProps } from "./getServerSideProps"



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


export { getServerSideProps }
export default Item;