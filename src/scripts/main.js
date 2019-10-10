// Testing if js is linked to html
// console.log("We're learning about objects!");

// Lightning Exercise 1
const car = {
    year: 2015,
    brand: "Ford",
    model: "Mustang",
    color: "red"
}


const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]


const mom = {
    name: "Maria",
    age: 52,
    role: "mother"
}

const dad = {
    name: "Armando",
    age: 55,
    role: "father"
}

const daughter = {
    name: "Nicole",
    age: 29,
    role: "daughter"
}

const son = {
    name: "Nicholas",
    age: 21,
    role: "son"
}


const familyMembers = [mom, dad, daughter, son]
console.log(familyMembers);



// Lightning Exercise 2: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`The wardrobe is ${wardrobe.height} inches tall`);
console.log(`The wardrobe is made by ${wardrobe.manufacturer}`);
console.log(`The wardrobe is full of ${wardrobe.contents[0]}, ${wardrobe.contents[1]}, ${wardrobe.contents[2]}, ${wardrobe.contents[3]}, ${wardrobe.contents[4]}`);
console.log(`The wardrobe is ${wardrobe.depth} inches deep`);
console.log(`The wardrobe is ${wardrobe.width} inches wide`);

//Lightning Exercise 3:

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The empire state building is ${empireStateBuilding.height} high with ${empireStateBuilding.stories} stories. The east west length is ${empireStateBuilding.eastWestLength} and the north south length is ${empireStateBuilding.northSouthLength}. It is ${empireStateBuilding.squareFeet} square feet big.`)


const addressKey = "address"
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"

console.log(`The empire state building is at ${empireStateBuilding[addressKey]}. It was built in ${empireStateBuilding[constructionKey]} by ${empireStateBuilding[architectKey]}. It cost ${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding}.`)



// Lightning Exercise 4

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// question 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

const ptInstructors = nashvilleSoftwareSchool.instructors.partTime

const ftInstructors = nashvilleSoftwareSchool.instructors.fullTime

for (let i = 0; i < ptInstructors.length; i++) {
    console.log(ptInstructors[i])
}

for (let i = 0; i < ftInstructors.length; i++) {
    console.log(ftInstructors[i])
}

// question 2: Output only Andy and Zoe in the console.


console.log(ftInstructors[4], ptInstructors[0])


// practice exercise
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}


const beatlesMembers = beatles.members
const yearsBeatles = beatles.history


console.log(`${beatlesMembers[1].name} was in the Beatles from ${yearsBeatles.formed} to ${yearsBeatles.disbanded}. He was born in ${beatlesMembers[1].birth}. He contributed heavily to the ${beatles.albums[3]}.`)