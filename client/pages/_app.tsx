import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/undefined/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
