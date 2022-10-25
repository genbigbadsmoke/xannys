import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }
  const config = {
    reference: (new Date()).getTime().toString(),
    email: session.user.name,
    amount: totalPrice*100,
    publicKey: process.env.PAYSTACK_CLIENT_ID,
  };
  res.send(config);
};
export default handler;
