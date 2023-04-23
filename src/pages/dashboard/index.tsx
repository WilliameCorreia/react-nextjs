import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from "next";
import Sidebar from '@/components/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Topbar from '@/components/Topbar';

export default function Dashboard() {
    return (
        <div className="app">
            <ProSidebarProvider>
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Box m="20px">
                        <div>
                            <h1>hello world!</h1>
                            <Button variant="outlined" onClick={() => signOut()}>Logout</Button>
                        </div>
                    </Box>
                </main>
            </ProSidebarProvider>
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