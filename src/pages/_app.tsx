import { SessionProvider } from 'next-auth/react';
import { ColorModeContext, useMode } from "@/theme";

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
