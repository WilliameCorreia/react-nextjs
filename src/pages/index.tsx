import { GetServerSideProps } from 'next';
import Login from './login';
import { getSession } from 'next-auth/react';

export default function IndexPage() {
    return (
        <Login />
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
  
    console.log('page index', session);
  
    if(session){
      return{
        redirect:{
          destination: '/dashboard',
          permanent: false
        }
      }
    }
  
    return{
      props:{
        session
      }
    }
  }
