import { GetServerSideProps, GetServerSidePropsContext } from "next";
import db from "@/db/db";
import Main from '@/components/main/main'
import { FC } from 'react'
import Head from '@/components/head/head'
import Header from '@/components/header/header'
import SingleItem from '@/components/main/components/singleItem/singleItem';
// import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

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
    const req = context.req
    console.log(req.cookies)
    // const session = await getServerSession(context.req, context.res, authOptions)
    // console.log("session: ", session)

    const { id } = params;
    console.log("id: ", id)
    const data = await db.getItemById(id);
    console.log(data);

    if (!data)
        return { notFound: true };

    return { props: { item: data } };
}

export { getServerSideProps }
export default Item;