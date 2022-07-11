import {mergeSort} from '../components/sortingAlgorithms/mergeSort'
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

function checkIfArraysAreEqual(arrayOne: any, arrayTwo: any) {
    if (arrayOne.length !== arrayTwo.length) return false
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false
        }
    }
    return true
}

function randomIntFromInterval(min: any, max: any) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

describe("Merge Sort", () => {
    it('Check if Merge Sort sorts correctly', () => {
        for (let i = 0; i < 100; i++) {
            const logSpy = jest.spyOn(console, 'log');
            const array: any = []
            // random length
            const length: number = randomIntFromInterval(1, 1000)
            for (let j = 0; j < length; j++) {
                // push random value
                array.push(randomIntFromInterval(-1 * 1000, 1000))
            }
            // after populating array
            const jsAutoSortArray = array
                .slice()
                .sort((a: number, b: number) => a - b)
            const mergeSortArray = mergeSort(array.slice())
            console.log(checkIfArraysAreEqual(jsAutoSortArray, mergeSortArray)) // pls dont laugh
            expect(logSpy).toHaveBeenCalledWith(true);
        }
    });
})