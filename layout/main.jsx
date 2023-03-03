import React from 'react'
import Head from 'next/head'

const Main = ({ children }) => {
    return (
        <>
            <Head>
                <title>Scandiweb Test</title>
                <link rel="icon" href="/logo.jpg" />
            </Head>

            <body>
                {children}
            </body>

        </>
    )
}

export default Main