import React from "react";
import { Button } from "@mui/material";
import { getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from "next";

export default function HomePage() {
    return (
        <div>
            <h1>hello world!</h1>
            <Button variant="outlined" onClick={() => signOut()}>Logout</Button>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    console.log('Home page', session);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}