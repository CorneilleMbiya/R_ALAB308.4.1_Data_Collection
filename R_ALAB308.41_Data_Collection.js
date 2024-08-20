
//   1. FIZZ BUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



//    2. PRIME NUMBER


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let MyN = prompt("Enter your number here: ");
MyNumber = Number(MyN);
while (true) {
    if (isPrime(MyNumber)) {
        console.log(MyNumber);
        break;
    }
    MyNumber++;
}




//    3.   FEELING LOOPY

/**
 * Function to parse a CSV string, transform it into a two-dimensional array,
 * and manipulate the data according to specified requirements.
 *
 * @param {string} csvString - The CSV string to be processed.
 * @returns {string} - The final CSV string after transformations.
 */
function processCSV(csvString) {
    // Split the CSV string into rows based on the newline character
    const rows = csvString.split('\r\n');
    
    // Initialize a two-dimensional array to store the data
    const dataArray = [];
    
    // Loop through each row and split it into cells
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].split(',');
        dataArray.push(cells);
        
        // Log each cell in the current row
        console.log(...cells);
    }
 
    // Calculate the number of columns dynamically based on the first row
    const numberOfColumns = dataArray[0].length;
 
    // Create an array to store objects with lowercase keys
    const objectArray = [];
 
    // Loop through the dataArray starting from the second row (index 1)
    for (let i = 1; i < dataArray.length; i++) {
        const obj = {};
        for (let j = 0; j < numberOfColumns; j++) {
            // Use the first row as keys and convert them to lowercase
            const key = dataArray[0][j].toLowerCase();
            obj[key] = dataArray[i][j];
        }
        objectArray.push(obj);
    }
 
    // Remove the last element from the objectArray
    objectArray.pop();
 
    // Insert a new object at index 1
    objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
 
    // Add a new object to the end of the array
    objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
 
    // Calculate the average age of the group
    let totalAge = 0;
    for (const obj of objectArray) {
        totalAge += parseInt(obj.age, 10);
    }
    const averageAge = totalAge / objectArray.length;
 
    // Log the average age
    console.log(`Average Age: ${averageAge}`);
 
    // Transform the final set of data back into CSV format
    const finalCSVArray = [];
    finalCSVArray.push(Object.keys(objectArray[0]).join(',')); // Add header row
    for (const obj of objectArray) {
        finalCSVArray.push(Object.values(obj).join(','));
    }
 
    // Return the final CSV string
    return finalCSVArray.join('\r\n');
}
 
// Example CSV input
const csvInput = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
 
// Process the CSV input and get the final CSV output
const finalCSVOutput = processCSV(csvInput);
console.log(finalCSVOutput);