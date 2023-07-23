import "@/styles/globals.css";
import Head from "next/head";
import  { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Similar Trade App</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
