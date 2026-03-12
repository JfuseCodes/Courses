const randomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const numberCheck = (arr) => {
    //function to check that all numbers in an object of arrays match each other (used for a game of tenzie)
    
    // handle empty arrays (vacuously true that all elements satisfy the condition)
    // arr.length === 0 ? true : null

    //get value of first element's key as the reference value
    const firstValue = arr[0].number
    
    // console.log(firstValue)

    // use every() method to compare all elements to first one
    

 
    

    return arr.every(item => item.number === firstValue & item.freeze === arr[0].freeze)
}

export {randomNumber, numberCheck}