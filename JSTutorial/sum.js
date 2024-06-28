L = [1,2,3,4,5,6,7,8,9,10]

let sum = 0
for(let x = 0; x < L.length; x++){
    sum += L[x]
}

console.log("Normal Sum: ", sum)



sum = L.reduce((acc, cur) => acc + cur)

console.log("Reducer Sum: ", sum)

// Modify reduce to find the product of array elements
product = L.reduce((acc, cur) => acc * cur)
console.log("Product: ", product)
