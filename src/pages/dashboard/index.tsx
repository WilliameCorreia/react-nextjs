import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from "next";
import Sidebar from '@/components/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Topbar from '@/components/Topbar';
import { tokens } from "@/theme";

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className="app">
            <ProSidebarProvider>
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Box m="20px">
                        <div>
                            <h1>hello world!</h1>
                            <Button variant="outlined" onClick={() => signOut()}
                                sx={{ mt: 3, mb: 2, background: `${colors.primary[400]} !important`, }}>Logout</Button>
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