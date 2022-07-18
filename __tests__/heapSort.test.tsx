import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { doesNotMatch } from 'assert';
// file imports
import mergeSort from '../components/sortingAlgorithms/mergeSort'
import randomIntFromInterval from '../components/tools/randIntInterval'
import arrayEquality from '../components/tools/arrayEquality'


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
            console.log(arrayEquality(jsAutoSortArray, mergeSortArray)) // pls dont laugh
            expect(logSpy).toHaveBeenCalledWith(true);
        }
    });
})