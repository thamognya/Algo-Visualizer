import React from 'react'
import { useState } from 'react'

import {Button} from '@chakra-ui/react'

interface ArrayState {
    array: any
    arraySize: number
    min: number
    max: number
}

export class SortingVisualizer extends React.Component<{}, ArrayState> {
    // arrays
    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {
            array: [],
            arraySize: 300,
            min: 5,
            max: 1000
        }
    }

    componentDidMount() {
        this.resetArray()
    }

    resetArray() {
        const array = []
        const n: number = this.state.arraySize
        const min: number = this.state.min
        const max: number = this.state.max

        for (let i = 0; i < n; i++) {
            array.push(randomIntFromInterval(min, max))
        }

        this.setState({ array })
    }
    // algos

    // buttons



    render() {
        const array = this.state.array
        const arraySize = this.state.arraySize
        const num = 350 // const value

        return (
            <>
                <div className="">
                    <div className="text-center w-screen min-h-half-screen">
                        {array && array.map((value: any, idx: any) => {
                            return (
                                <div
                                    key={idx}
                                    className="inline-block bg-slate-400 dark:bg"
                                    style={{
                                        height: `${value * 0.075}vh`,
                                        width: `${40 / arraySize}vw`,
                                        margin: `${0} ${num / arraySize}px`,
                                    }}
                                ></div>
                            )
                        })}
                    </div>
                    <div className="absolute bottom-0 flex gap-5 p-2 w-screen items-center bg-slate-900">
                        <button 
                            onClick={() => this.resetArray()}
                            className="bg-slate-400 p-5 rounded-full hover:ring-2 ring-slate-500 text-slate-100"
                        >
                            Gen a new Array
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

function randomIntFromInterval(min: any, max: any) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}