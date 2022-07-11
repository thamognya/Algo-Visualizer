const checkIfArraysAreEqual = (arrayOne: any, arrayTwo: any) => {
    if (arrayOne.length !== arrayTwo.length) return false
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false
        }
    }
    return true
}

export default checkIfArraysAreEqual