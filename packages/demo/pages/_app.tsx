import { ThemeProvider } from '@perimeter_81/theme-provider';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { BgButton } from '@tal-test/bg-button';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <>
        <Head>
          <title>Welcome to demo!</title>
        </Head>
        <div className="app">
          <header className="flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nx-logo-white.svg"
              alt="Nx logo"
              width="75"
              height="50"
            />
            <h1>Welcome to demo!</h1>
          </header>
          <main
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <BgButton color="blue" />
            <Component {...pageProps} />
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}

export default CustomApp;
