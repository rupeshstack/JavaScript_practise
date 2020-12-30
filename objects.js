let user = {};

user = {

    name:"Rupesh Das",
    age:23,
    interest:["SDE","Problem solving","helping society"],
    location:"Nepal"

       }

console.log(user);
console.log(user.name);
user.age=25;
console.log(user.age);
console.log("\n");

user.interest[0]="Software development";
console.log(user);
user.location="Biratnagar";

user["country"] = "Nepal";
console.log(user);



console.log("\n");


//Reading from object : 

console.log(user["name"]);
console.log(user.interest);

// Nested objects : 



console.log("\n");


console.log("Nested objects : ");


console.log("\n");


var person = 
{

    name:{ firstname : { n1:"Elon", n2: "alien"},
           lastname : "Musk"
         } ,

    place:"Earth",
    plan:"Colonize Mars"

};





var human = {};
human.name={};
human.name["First_Name"]="Rupesh";
human.name["Last_Name"]="Das";
human["Place"]="Earth"
human["Plan"]="Make humanity Type 1 civilization";

console.log(person);
console.log("\n");
console.log(human);
console.log("\n");
console.log("Looping over objects : ");
console.log("\n");



//Loop over an object 



for(const key in user)
{
    console.log(`${key}:${user[key]}`);

}



console.log("\n");



//looping over nested object 



for(const i in person)
{
    if(typeof person[i]==='object')
    {
        for(const j in person[i])
        {
            console.log(`${j} : ${person[i][j]}`)
        }

    }

    else
    {
        console.log(`${i} : ${person[i]}`)
    }
}

















