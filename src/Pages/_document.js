// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
        <Head>
            {/* Import the Lovers Quarrel font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&family=Magra:wght@400;700&display=swap"
                  rel="stylesheet"/>

        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
