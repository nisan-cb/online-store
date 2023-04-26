import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/db/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { categoryName } = req.query;

    const items = await db.getItems(categoryName as string);

    res.status(200).json(items);
}