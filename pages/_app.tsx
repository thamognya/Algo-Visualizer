import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'
import { useRouter } from 'next/router'
import React from 'react'

function MyApp ({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const [pageLoading, setPageLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handleStart = () => {
            setPageLoading(true)
        }
        const handleComplete = () => {
            setPageLoading(false)
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
    }, [router])

    return (
        <div>
            {!pageLoading ? (
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
