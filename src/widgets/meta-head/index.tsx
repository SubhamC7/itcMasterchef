import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const MetaHead = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="“canonical”" href="https://itc-masterchef.netlify.app" />
        <link
          rel="shortcut icon"
          href="/icons/itcLogo.png"
          type="image/x-icon"
        />

        <meta name="title" content="ITC MasterChef" />
        <meta name="description" content="ITC MasterChef India" />
      </Head>
    </>
  );
};

export default MetaHead;
