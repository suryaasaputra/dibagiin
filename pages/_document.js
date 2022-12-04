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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                {/* <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"
                /> */}
            </body>
        </Html>
    )
}