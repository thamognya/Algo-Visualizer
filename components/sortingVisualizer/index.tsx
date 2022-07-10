import React from 'react'
import { useState } from 'react'

interface ArrayState {
    array: any
    arraySize: number
    min: number
    max: number
}

export class SortingVisualizer extends React.Component<{}, ArrayState> {
    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {
            array: [],
            arraySize: 100,
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

    render() {
        const array = this.state.array
        const arraySize = this.state.arraySize

        return (
            <>
                <div className="m-5">
                    <div className="text-center">
                        {array && array.map((value: any, idx: any) => {
                            return (
                                <div
                                    key={idx}
                                    className="inline-block bg-slate-400"
                                    style={{
                                        height: `${value * 0.075}vh`,
                                        padding: `${450 / arraySize}px`,
                                    }}
                                ></div>
                            )
                        })}
                    </div>
                    <div>
                        <h1>tmp: make a scroll bar to increase array size</h1>
                        <h1>tmp: make a scroll bar to increase array min max</h1>
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
