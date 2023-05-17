import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
            httpEquiv="Content-Type"
            content="text/html; charset=utf-8"
        />
                   
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
          <meta
              key="googlebot"
              name="googlebot"
              content="index,follow"
          />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
              name="keywords"
              content="Milady | Ladys | NFT's collection | coin | meme"
          />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:site_name" content="Milady" />
          <meta property="og:title" content="Welcome to LADYS, the meme coin of Milady NFT collection." />
          <meta
              property="og:description"
              content="LADYS is the tokenisation of the fully memetically optimized white pill."
          />
          <meta property="og:url" content="https://milady.gg" />
          <meta
              property="og:image"
              content={`${process.env.REACT_APP_HOST}/images/logo.png`}
          />
       
        <meta name="theme-color" content="#000" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
            dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
            `,
            }}
            
        />

        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
