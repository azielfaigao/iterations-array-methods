// With the sample data you have. Apply what you learned from the lecture on Feb 03, 2021.

// Use  the 5 iteration methods ['for', 'for in', 'for of', 'while', 'forEach'] to print out all the data.
// Use the 3 array methods ['filter', 'map', 'reduce'] to print out a portion of your data.
// Save the file with the name "iteration-array-method.js" and push it to your github repository
// Submit the github repository.

let people = [
    {
        "name": "Samantha	Buckland",
        "age": 25,
        "gender": "female",
        "contact": "(528) 500-7691",
        "address": "9 Chaplin Drive, Headcorn",
        "email": "samantha.buckland@email.com"
    },
    {
        "name": "Sophie Terry",
        "age": 45,
        "gender": "female",
        "contact": "(783) 815-0561",
        "address": "7 Cambridge Avenue, Newcastle Upon Tyne",
        "email": "sophie.terry@email.com"
    },
    {
        "name": "David Paterson",
        "age": 64,
        "gender": "male",
        "contact": "(938) 327-7373",
        "address": "Heath View, Barkston Road, Marston",
        "email": "david.paterson@email.com"
    },
    {
        "name": "Pippa Welch",
        "age": 26,
        "gender": "female",
        "contact": "(539) 288-8496",
        "address": "12 Rutland Street, London",
        "email": "pippa.welch@email.com"
    },
    {
        "name": "Leah	Mathis",
        "age": 47,
        "gender": "female",
        "contact": "(781) 940-5313",
        "address": "83 Moss Lane, Partington",
        "email": "leah.mathis@email.com"
    },
    {
        "name": "Olivia Bond",
        "age": 29,
        "gender": "female",
        "contact": "(905) 281-8238",
        "address": "41 Avalon Way, Worthing",
        "email": "olivia.bond@email.com"
    },
    {
        "name": "Jan Nolan",
        "age": 32,
        "gender": "male",
        "contact": "(499) 976-0281",
        "address": "11 Rhydwen, Ystradgynlais",
        "email": "jan.nolan@email.com"
    },
    {
        "name": "Ava Berry",
        "age": 21,
        "gender": "female",
        "contact": "(394) 256-9686",
        "address": "66 Ripon Street, Sunderland",
        "email": "ava.berry@email.com"
    },
    {
        "name": "Thomas Slater",
        "age": 57,
        "gender": "male",
        "contact": "(662) 846-5046",
        "address": "6 Tower Crescent, Neath Hill",
        "email": "thomas.slater@email.com"
    },
    {
        "name": "Kimberly	Lambert",
        "age": 45,
        "gender": "female",
        "contact": "(338) 734-9329",
        "address": "6 Monument Road, Woking",
        "email": "kimberly.lambert@email.com"
    },
]

// for loop
for (let x = 0; x < people.length; x++) {
    console.log(people[x]);
}

// for-in loop
for (let x in people) {
    console.log(people[x]);
}

// for-of loop
for (let x of people) {
    console.log(x);
}

// while loop
let i = 0;
while (i < people.length) {
    console.log(people[i]);
    i++;
}

// forEach method
people.forEach(function (index) { console.log(index); });

// filter method
let above50 = people.filter(function (data) { return data.age > 50 });
console.log(above50);

// map method
let names = people.map(function (person) { return person.name });
console.log(names);

// reduce method
let averageAge = people.reduce(function (accumulator, data) { return accumulator + data.age }, 0);
console.log(averageAge / people.length);