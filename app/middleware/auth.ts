import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

const protectRoute = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return null;
};

export default protectRoute;
