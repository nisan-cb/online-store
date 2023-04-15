import NextHead from "next/head";
import { FC } from "react";
import config from '../../config.json'

interface HeadProps {
    title?: string;
}
const Head: FC<HeadProps> = ({ title }) => {
    const tabText = config.store_name + (title ? ` | ${title}` : '');

    return <NextHead>
        <title>{tabText}</title>
    </NextHead>
}

export default Head;
