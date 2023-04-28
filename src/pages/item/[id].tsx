import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/main'
// import styles from './page.module.css'
import { getServerSideProps, PageProps } from './getServerSideProps'
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

export { getServerSideProps }
export default Item;
