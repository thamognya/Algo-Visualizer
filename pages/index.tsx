import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// file imports
import {SortingVisualizer} from '../components/sortingVisualizer'

const Home: NextPage = () => {
    return (
        <div className="App">
            <SortingVisualizer />
        </div>
    )
}

export default Home
