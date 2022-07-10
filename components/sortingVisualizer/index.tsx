import React from 'react'
import {useState} from 'react'

interface ArrayState {
    array: any;
    arraySize: number;
    min: number;
    max: number;
}

export class SortingVisualizer extends React.Component<{}, ArrayState> {

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            array: [],
            arraySize: 300,
            min: 5,
            max: 1000,
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {

        const array = [];
        const n: number = this.state.arraySize;
        const min: number = this.state.min;
        const max: number = this.state.max;

        for (let i = 0; i < n; i++) {
            array.push(randomIntFromInterval(min, max))
        }

        this.setState({array})
    }
    render () {

        const array = this.state.array;

        return (
        <>
            <div className="grid gap-10 grid-rows-2">
                <div className="flex gap-2">
                    <h1>hello</h1>
                    <h1>hello</h1>
                </div>
                <div className="absolute">
                    {array && array.map((value: any, idx: any) => {
                        return (
                            <div 
                                key={idx} 
                                className="inline-block bg-slate-400 px-0.5 rounded-lg"
                                style={{
                                    height: `${value * 0.095}vh`,
                                }}
                            >
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
        )
    }
}

function randomIntFromInterval(min: any, max: any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
