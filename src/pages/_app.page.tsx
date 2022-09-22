import AppStore from "AppStore";
import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

const publicUrls = ["/login", "/admin-login"];

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  // if (window.netlifyIdentity) {
  //   //@ts-ignore
  //   window.netlifyIdentity.on("init", (user) => {
  //     if (!user) {
  //       //@ts-ignore
  //       window.netlifyIdentity.on("login", () => {
  //         document.location.href = "/admin/";
  //       });
  //     } else {
  //       return <Component {...pageProps} />;
  //     }
  //   });
  // }
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itc-masterchef.netlify.app" />
        <meta property="og:title" content="ITC MasterChef India" />
        <meta
          name="description"
          property="og:description"
          content="ITC MasterChef India"
        />
        <meta
          property="og:image"
          content="https://itc-masterchef.netlify.app/icons/itcLogo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://itc-masterchef.netlify.app/icons/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://itc-masterchef.netlify.app"
        />
        <meta property="twitter:title" content="ITC MasterChef India" />
        <meta property="twitter:description" content="ITC MasterChef India" />
        <meta
          property="twitter:image"
          content="https://itc-masterchef.netlify.app/icons/itcLogo.png"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
