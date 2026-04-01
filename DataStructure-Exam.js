/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let n = names.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            
            if (heights[j] < heights[j + 1]) {
                
                let tempHeight = heights[j];
                heights[j] = heights[j + 1];
                heights[j + 1] = tempHeight;
                
                let tempName = names[j];
                names[j] = names[j + 1];
                names[j + 1] = tempName;
            }
        }
    }
    
    return names;
};

let names1 = ["Mary", "John", "Emma"];
let heights1 = [180, 165, 170];
console.log("Example 1 Output:");
console.log(sortPeople(names1, heights1)); 

console.log("-----------------------");

let names2 = ["Alice", "Bob", "Bob"];
let heights2 = [155, 185, 150];
console.log("Example 2 Output:");
console.log(sortPeople(names2, heights2)); 
