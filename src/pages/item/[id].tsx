import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/main'
// import styles from './page.module.css'
import getServerSideProps, { PageProps } from './getServerSideProps'
import { FC } from 'react'



const Item: FC<PageProps> = ({ item }) => {
    const { id } = item;
    return (
        <Main >
            item page {id}
        </Main>
    )
}

export { getServerSideProps }
export default Item;
