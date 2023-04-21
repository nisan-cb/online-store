import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/main'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Item() {
    return (
        <Main >
            item page
        </Main>
    )
}
