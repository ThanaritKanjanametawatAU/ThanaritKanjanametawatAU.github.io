L = [6,24,1,2,8,2,100,2,5,7]




//sort L ascending
L.sort((a,b)=> a-b)

console.log("Ascending: " + "[" + L.join(", ") + "]")

//sort L decending
L.sort((a,b)=> b-a)


console.log("Descending: " + "[" + L.join(", ") + "]")


