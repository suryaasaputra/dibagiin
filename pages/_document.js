import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="apple-mobile-web-app-title" content="Dibagiin" />
                <meta name="application-name" content="Dibagiin" />
                <meta name="msapplication-TileColor" content="#eff0f4" />
                <meta name="description" content="Platform Berbagi Barang Layak Pakai" />
                <meta name="theme-color" content="#eff0f4" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}