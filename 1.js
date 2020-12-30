// 1. Looping Simple Object : 

var human = {};
human.name="Rupesh";
human.age=23;
human.country="Nepal";


for(const key in human)
{
    console.log(`${key} : ${human[key]}`);
}


console.log("\n");


// 2. Looping Nested Objects :

var person = {};
person.name={};
person.name.first = "Rupesh";
person.name.second="Das";
person.age=23;
person.place={};
person.place.country= "Nepal";
person.place.city = "Biratnagr";


for(const data in person)
{
    if(typeof person[data]==='object')
    {
        for(const data1 in person[data])
        {
            console.log(`${data1} : ${person[data][data1]}`);
        }
    }

    else 
    {
        console.log(`${data} : ${person[data]}`);
    }

}


