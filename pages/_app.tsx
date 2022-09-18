import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true))
        Router.events.on('routeChangeComplete', () => setLoading(false))
        Router.events.on('routeChangeError', () => setLoading(false))
        return () => {
            Router.events.off('routeChangeStart', () => setLoading(true))
            Router.events.off('routeChangeComplete', () => setLoading(false))
            Router.events.off('routeChangeError', () => setLoading(false))
        }
    }, [])

    return (
        <div>
            {!loading ? (
                <React.Fragment>
                    <div>
                        <Main>
                            <Component {...pageProps} />
                        </Main>
                    </div>
                </React.Fragment>
            ) : (
                <div>hello loading ...</div>
            )}
        </div>
    )
}

export default MyApp
