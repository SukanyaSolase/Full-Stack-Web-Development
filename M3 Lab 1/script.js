//step1
let Movies = ["Inception", "The Matrix", "Interstellar", "Spirited Away", "Avatar"];
console.log(Movies[1]);

//step2
let movies = new Array(5);
movies[0] = "Inception";
movies[1] = "The Matrix";
movies[2] = "Interstellar";
movies[3] = "Spirited Away";
movies[4] = "Avatar";

console.log(movies[0]);

//step3
movies.splice(2, 0, "Captain America"); 
console.log(movies.length);

//step4
let moviesLiteral = ["Inception", "The Matrix", "Interstellar", "Spirited Away", "Avatar"];
delete moviesLiteral[0];
console.log(moviesLiteral); 

//step5
let movies7 = ["Inception", "The Matrix", "Interstellar", "Spirited Away", "Avatar", "Dhoom", "Wanted"];

for (let index in movies7) {
    console.log(movies7[index]);
}

//step6
for (let movie of movies7) {
    console.log(movie);
}


//step7
for (let movie of movies7.sort()) {
    console.log(movie);
}


//step8
let Leastmovies = ["Taare Zameen Par", "3 Idiots", "Spiderman"];

console.log("Movies I like:\n");
for (let movie of movies7) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (let movie of Leastmovies) {
    console.log(movie);
}

//step9
let allMovies = movies7.concat(Leastmovies).sort().reverse();
console.log(allMovies);


//step10
console.log(allMovies[allMovies.length - 1]);


//step11
console.log(allMovies[0]);


//step12
let indices = Leastmovies.map(movie => allMovies.indexOf(movie));

indices.forEach((index, i) => {
    if (index !== -1) {
        allMovies[index] = `New Fav Movie ${i+1}`;
    }
});
console.log(allMovies);


//step13
let rankedM = [
    ["Inception", 1],
    ["The Matrix", 2],
    ["Interstellar", 3],
    ["Spirited Away", 4],
    ["Avatar", 5]
];

let movieNames = rankedM.filter(item => typeof item[0] === "string").map(item => item[0]);
console.log(movieNames);


//step14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

let showEmployee = function(empArray) {
    console.log("Employees:\n");
    for (let employee of empArray) {
        console.log(employee);
    }
};

showEmployee(employees);


showEmployee(employees);


//step15
function filterValues(arr) {
    return arr.filter(value => value);
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//step16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(getRandomItem(numbers));



//step17
function getLargestNumber(arr) {
    return Math.max(...arr);
}

console.log(getLargestNumber([10, 20, 100, 5, 80]));