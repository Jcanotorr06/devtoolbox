import { DefaultSeo } from "next-seo";
import { type AppType } from "next/dist/shared/lib/utils";
import { Fragment, useEffect } from "react";
import BaseLayout from "../components/Layouts/BaseLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";
import { themeChange } from "theme-change";

const queryClient = new QueryClient({
/*   defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  } */
});

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        title="Dev Toolbox"
        description="A collection of tools for developers"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            rel: "apple-touch-icon",
            sizes: "57x57",
            href: "/icons/apple-icon-57x57.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "60x60",
            href: "/icons/apple-icon-60x60.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "72x72",
            href: "/icons/apple-icon-72x72.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "76x76",
            href: "/icons/apple-icon-76x76.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "114x114",
            href: "/icons/apple-icon-114x114.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "120x120",
            href: "/icons/apple-icon-120x120.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "144x144",
            href: "/icons/apple-icon-144x144.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "152x152",
            href: "/icons/apple-icon-152x152.png"
          },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/icons/apple-icon-180x180.png"
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            href: "/icons/android-icon-192x192.png"
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/icons/favicon-32x32.png"
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            href: "/icons/favicon-96x96.png"
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/icons/favicon-16x16.png"
          }
        ]}
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#ffffff"
          },
          {
            name: "msapplication-TileImage",
            content: "/icons/ms-icon-144x144.png"
          },
          {
            name: "theme-color",
            content: "#ffffff"
          }
        ]}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://toolbox.josephcano.com/",
          site_name: "Dev Toolbox",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </QueryClientProvider>
  );
};

export default MyApp;
