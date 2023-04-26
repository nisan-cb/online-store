import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/db/db';
export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}


export const getItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const { categoryName } = req.query;

  const items = await db.getItems(categoryName as string);

  res.status(200).json(items);
}