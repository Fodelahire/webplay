// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../../lib/prisma'; 

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     try {
//       const reviews = await prisma.review.findMany({
//         take: 6, 
//       });
//       res.status(200).json(reviews);
//     } catch (error) {
//       console.error('Failed to fetch reviews:', error);
//       res.status(500).json({ message: 'Failed to fetch reviews' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
