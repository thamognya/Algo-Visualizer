import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Main>
                <Component {...pageProps} />
            </Main>
        </div>
    )
}

export default MyApp
