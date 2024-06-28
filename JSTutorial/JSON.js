L = [
    { id: 6511234, name: 'Jack', salary: 10000 },
    { id: 6511235, name: 'Mike', salary: 15000 },
    { id: 6511236, name: 'Nancy', salary: 20000 },
    { id: 6511237, name: 'Alice', salary: 30000 },
]

// console.log(L[0].name)
console.log("Original: ")
console.table(L)



// Increase Sales by 10%
// for (let i = 0; i < L.length; i++) {
//     L[i].salary = L[i].salary * 1.10
// }


// // Increase Sales by 10% (2 Decimal Places)
// L.map((employeesTable) => { employeesTable.salary = Math.round(employeesTable.salary * 1.10 * 100) / 100 })
// console.log("Increased Sales by 10%: ")
// console.table(L)


// // Add Bonus Column (2 Decimal Places)
// L.map((employeesTable) => { employeesTable.bonus = Math.round(employeesTable.salary * 0.2 * 100) / 100})
// console.log("Added Bonus Column: ")
// console.table(L)


L.map((employeesTable) => {
    employeesTable.salary = Math.round(employeesTable.salary * 1.10 * 100) / 100
    employeesTable.bonus = Math.round(employeesTable.salary * 0.2 * 100) / 100
})
console.log("Increased Sales by 10% and Added Bonus Column: ")
console.table(L)


// Sort by Name
L.sort((a, b) => a.name.localeCompare(b.name))
console.log("Sorted by Name: ")
console.table(L)

