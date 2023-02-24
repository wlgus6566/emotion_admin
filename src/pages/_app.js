import '@/styles/globals.css'
import DefaultsLayout from "@/layouts/defaults";
import Head from "next/head";
export default function App({ Component, pageProps }) {
    const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
      <>
          <Head>
              <meta charSet="utf-8" />
              <meta name="description" content="이모션글로벌 관리자 사이트입니다." />
              <title>emotion global admin</title>
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>

  )
}
