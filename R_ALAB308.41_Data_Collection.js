
////>>>>>   1. FIZZ BUZZ        //////////////////////////////////////////////////////////////////////////////////

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



////>>>    2. PRIME NUMBER        ////////////////////////////////////////////////////////////////////////////////

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




///>>>   3.   FEELING LOOPY         //////////////////////////////////////////////////////////////////////////////////////

function parseCSV(csvString) {
    let cell1 = '', cell2 = '', cell3 = '', cell4 = '';
    let currentCell = 1;

    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];

        if (char === ',') {
            currentCell++;
            continue;
        }

        if (char === '\n' || (char === '\r' && csvString[i + 1] === '\n')) {
            console.log(cell1, cell2, cell3, cell4);
            cell1 = cell2 = cell3 = cell4 = '';
            currentCell = 1;
            if (char === '\r') i++;
            continue;
        }

        switch (currentCell) {
            case 1:
                cell1 += char;
                break;
            case 2:
                cell2 += char;
                break;
            case 3:
                cell3 += char;
                break;
            case 4:
                cell4 += char;
                break;
        }
    }
    if (cell1 || cell2 || cell3 || cell4) {
        console.log(cell1, cell2, cell3, cell4);
    }
}

// Example usage
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
parseCSV(csvData);




////>>>>    Part 2: Expanding Functionality      //////////////////////////////////////////////////////////////////////////////////

function parseCSV(csvString) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let numColumns = 0;

    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];

        if (char === ',') {
            currentRow.push(currentCell);
            currentCell = '';
        } else if (char === '\n' || (char === '\r' && csvString[i + 1] === '\n')) {
            currentRow.push(currentCell);
            rows.push(currentRow);

            if (rows.length === 1) {
                numColumns = currentRow.length;
            }

            currentCell = '';
            currentRow = [];

            if (char === '\r') {
                i++; // Skip the next '\n'
            }
        } else {
            currentCell += char;
        }
    }

    if (currentCell !== '' || currentRow.length > 0) {
        currentRow.push(currentCell);
        rows.push(currentRow);
    }

    for (let i = 0; i < rows.length; i++) {
        console.log(...rows[i]);
    }

    console.log(`Number of columns: ${numColumns}`);

    return rows;
}

// Example usage
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26`;

const parsedData = parseCSV(csvData);
console.log('Parsed CSV data:', parsedData);





////>>>>   Part 3: Transforming Data          ///////////////////////////////////////////////////////////////////////////////////


function parseCSV(csvString) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let numColumns = 0;

    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];
        
        if (char === ',') {
            currentRow.push(currentCell);
            currentCell = '';
        } else if (char === '\n' || (char === '\r' && csvString[i + 1] === '\n')) {
            currentRow.push(currentCell);
            rows.push(currentRow);
            
            if (rows.length === 1) {
                numColumns = currentRow.length;
            }
            
            console.log(...currentRow);
            
            currentRow = [];
            currentCell = '';
            
            if (char === '\r') {
                i++;
            }
        } else {
            currentCell += char;
        }
    }
    
    if (currentCell !== '' || currentRow.length > 0) {
        currentRow.push(currentCell);
        rows.push(currentRow);
        console.log(...currentRow);
    }

    console.log("Number of columns:", numColumns);

    const headers = rows[0].map(header => header.toLowerCase());
    const result = rows.slice(1).map(row => {
        const obj = {};
        row.forEach((cell, index) => {
            obj[headers[index]] = cell;
        });
        return obj;
    });

    return result;
}

// Example usage
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26`;

const parsedData = parseCSV(csvData);
console.log(parsedData);




////>>>   Part 4: Sorting and Manipulating Data      /////////////////////////////////////////////////////////////////////////

function parseCSV(csvString) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let numColumns = 0;

    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];
        
        if (char === ',') {
            currentRow.push(currentCell);
            currentCell = '';
        } else if (char === '\n' || i === csvString.length - 1) {
            currentRow.push(currentCell);
            rows.push(currentRow);
            
            if (rows.length === 1) {
                numColumns = currentRow.length;
            }
            
            currentRow = [];
            currentCell = '';
        } else if (char !== '\r') {
            currentCell += char;
        }
    }

    return { rows, numColumns };
}

function createObjects(parsedData) {
    const [headers, ...dataRows] = parsedData.rows;
    const lowercaseHeaders = headers.map(header => header.toLowerCase());

    return dataRows.map(row => {
        const obj = {};
        row.forEach((value, index) => {
            obj[lowercaseHeaders[index]] = value;
        });
        return obj;
    });
}

const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26`;

const { rows, numColumns } = parseCSV(csvData);

console.log("Number of columns:", numColumns);

console.log("Parsed CSV data:");
rows.forEach(row => console.log(...row));

const resultArray = rows;

console.log("Two-dimensional array:");
console.log(resultArray);

let objectArray = createObjects({ rows: resultArray });

console.log("Array of objects:");
console.log(objectArray);

objectArray.pop();

objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("Final array of objects:");
console.log(objectArray);





////>>>>  part5 Convert back to CSV     /////////////////////////////////////////////////////////////////////////////////////

function parseCSV(csvString) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let numColumns = 0;

    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];
        if (char === ',') {
            currentRow.push(currentCell);
            currentCell = '';
        } else if (char === '\n' || i === csvString.length - 1) {
            currentRow.push(currentCell);
            rows.push(currentRow);
            if (rows.length === 1) {
                numColumns = currentRow.length;
            }
            currentRow = [];
            currentCell = '';
        } else if (char !== '\r') {
            currentCell += char;
        }
    }

    return rows;
}

function arrayToObjects(data) {
    const headers = data[0].map(header => header.toLowerCase());
    return data.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index];
        });
        return obj;
    });
}

function objectsToCSV(data) {
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
    
    for (const row of data) {
        const values = headers.map(header => row[header]);
        csvRows.push(values.join(','));
    }
    
    return csvRows.join('\n');
}

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

const parsedData = parseCSV(csvData);
console.log("Parsed CSV data:");
parsedData.forEach(row => console.log(row.join(', ')));

let objectsArray = arrayToObjects(parsedData);
console.log("\nArray of objects:");
console.log(objectsArray);

objectsArray.pop();

objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("\nModified array of objects:");
console.log(objectsArray);

// Convert back to CSV
const finalCSV = objectsToCSV(objectsArray);
console.log("\nFinal CSV:");
console.log(finalCSV);
