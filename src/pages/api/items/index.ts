import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/db/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { categoryName } = req.query;
    await sleep(300)
    console.log(categoryName)
    if (categoryName !== "category-22") {
        res.status(200).json([]);
        return;
    }

    const items = await db.getItems(categoryName as string);

    res.status(200).json(items);
}


const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
