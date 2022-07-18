import React from 'react'
import { useState } from 'react'
// file imports
import mergeSort from '../sortingAlgorithms/mergeSort'
import randomIntFromInterval from '../tools/randIntInterval'

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
            arraySize: 200,
            min: 5,
            max: 1000
        }
    }

    componentDidMount = () => {
        this.resetArray()
    }

    resetArray = () => {
        const array = []
        const n: number = this.state.arraySize
        const min: number = this.state.min
        const max: number = this.state.max

        for (let i = 0; i < n; i++) {
            array.push(randomIntFromInterval(min, max))
        }

        this.setState({ array })
    }

    changeArraySize = (e: any) => {
        this.setState({ arraySize: this.state.arraySize + e }, () => {
            this.resetArray()
        })
    }

    returnOriginalArraySize = () => {
        this.setState({ arraySize: 200 }, () => {
            this.resetArray()
        })
    }

    // algos

    algoMergeSort = () => {
        const sortedArray: any = mergeSort(this.state.array)
        this.setState({ array: sortedArray })
    }

    // buttons

    render() {
        const array = this.state.array
        const arraySize = this.state.arraySize
        const num = 350 // const value

        return (
            <>
                <div className="">
                    <div className="flex justify-center w-screen mt-2 min-h-half-screen">
                        {array &&
                            array.map((value: any, idx: any) => {
                                return (
                                    <div
                                        key={idx}
                                        className="inline-block bg-slate-200"
                                        style={{
                                            height: `${value * 0.075}vh`,
                                            width: `${40 / arraySize}vw`,
                                            margin: `${0} ${num / arraySize}px`
                                        }}
                                    ></div>
                                )
                            })}
                    </div>
                    <div className="absolute bottom-0 flex gap-2 p-2 w-screen items-center justify-center bg-slate-800">
                        <button
                            onClick={() => this.resetArray()}
                            className="bg-slate-500 p-2 rounded-full hover:ring-2 ring-slate-300 text-slate-100"
                        >
                            New Array
                        </button>
                        <button
                            onClick={() => this.changeArraySize(-50)}
                            className="bg-slate-500 p-2 rounded-full hover:ring-2 ring-slate-300 text-slate-100"
                        >
                            Dec
                        </button>
                        <h1 className="bg-slate-500 p-2 rounded-full hover:ring-2 ring-slate-300 text-slate-100">
                            ArraySize: {this.state.arraySize}
                        </h1>
                        <button
                            onClick={() => this.changeArraySize(+50)}
                            className="bg-slate-500 p- rounded-full hover:ring-2 ring-slate-300 text-slate-100"
                        >
                            Inc
                        </button>
                        <button
                            onClick={() => this.returnOriginalArraySize()}
                            className="bg-slate-500 p-5 rounded-full hover:ring-2 ring-slate-300 text-slate-100"
                        >
                            Reset
                        </button>
                        <button
                            onClick={() => this.algoMergeSort()}
                            className="bg-slate-500 p-5 rounded-full hover:ring-2 ring-slate-300 text-slate-100"
                        >
                            Merge Sort
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
// code explanation
// use arrow func in this.resetArray because of this context
//<input type="range" min="10" max="1000" name='arraySize' value={this.state.arraySize} onChange={(e) => this.changeArraySize(e)}/>
