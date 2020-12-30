// const readline = require('readline');

// const input1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

/*  1. pop() method  */

var array=[];
array=[1,2,3,4,5,6,7,8,9,10];
console.log("Popped value is " + array.pop() ) ;
console.log("\n");
console.log("popped array : " + array);


/* 2. push() method */

var array1=[];
var array1 = [1,2,3,4,5,6,7,8,9,10];
array1.push(11);    
console.log("pushed array : " + array1);

// input1.question(` Enter the number `, (x) => 

// {

//         console.log(`Number to be pushed is ${x}`);
//         array1.push(x);
//         console.log(array1);


//         // close the stream
//         input1.close();


// });

/* 3. reverse() method */

var array2 =[1,2,3,4,5,6,7,8,9,10];
array2.reverse();
console.log("reversed array : " + array2);

/* shift() method : this shift method removes first element in the array */

var array3 = [1,2,3,4,5,6,7,8,9,10];
array3.shift();
console.log("shifted array : " + array3);

var array4 = [6,3,4,9,7,8,1];
console.log("Sorted array : " + array4.sort() );


/* 4. slice() method : This method print element from given range */

var array5 = ["Tom","Jerry","Jack","Ash"];
console.log("slice array : "+array5.slice(0,3));

/* 5. splice() method : This methond allows us to 
                        simultaneously add and remove
                        element

      Example : a =[1,2,3,4,5,6,7,8,9,10]

      a.splice(1,3,100) 
      returns -> [1,100,5,6,7,8,9,10]
            
*/

var array6 = [1,2,3,4,5,6,7,8,9,10];
array6.splice(1,4,100);
console.log("Splice array : "+array6);

/* 
   unshift() method adds one or more elements to the
   begining of the array 

*/

var array7 = [1,2,3,4,5,6,7,8,9,10];
array7.unshift(-1,0);
console.log("unshift array : " + array7);

/* 
   concat() method is used to concat two or more arrays
   into a new array and original array remains 
   untouched.   
   
*/


var one = ["Rupesh"];
var two = ["Elon"];
var three = ["star"];
var four =["Ship"];

var five = one.concat(two,three,four);
console.log("Result of concat() method : " + five);


/*
    join() : this method converts all values of 
             array to single string.
*/

var a = ["Rupesh","Das","is","doing","great"];
var b = a.join("-");
console.log("Result of join() method : " + b);


/* 
    tostring() method returns a string representing
               the array and its item.
*/

var array8 = ["Rupesh","Das","is","doing","great"];
console.log(array8);
console.log("Result of tostring() method : " + array8.toString() );

/* indexOf() method returns the position/index of
             element.
*/

var array9 = [100,200,5,2,4,0,1,-1];
var pos = array9.indexOf(0);
console.log("position of 0 is : " + pos);

/* lastIndexOf(search element , fromindex) : this method
   returns the position of the element from the last . 
*/

var array10 = [1,2,3,4,5,1,6,5,2,6];
var pos1=array9.lastIndexOf(1,3);
console.log(pos1);

console.log("\n");



/* forEach() method executes a provided function
             once for each array element.
*/

const array11 = [1,2,3,4,5];
array11.forEach(
    element => console.log(element)
);

console.log("\n");


// Example 2 forEach() method :

   var arr = [1,2,3,4];
   var total = 0;

   arr.forEach(
       function(num)
       {
           total=total+num;
       }
   );

   console.log(total);



/* 
    map() method creates return a new array containing
          values returned by callback function.
*/

var a1 = [1,2,3,4,5];
var squared = a1.map(function(num)

{ 
    return num*num;

}

); 

console.log(squared);


console.log("\n");

var myarray = [1,2,3,4,5,6,7,8,9,10];
var result = myarray.every(
function(n)
{
    return n<5;
}

); 

console.log(result);

var resultforsome = myarray.some(function(n)
{
    return n<5;
});

console.log(resultforsome);



// using filter method 

var nums = [3,5,2,1,6,6];
nums = nums.sort();
console.log(nums);

var newnums = nums.filter(function(n)
{
    return n<nums[nums.length-1];
});

console.log(newnums);
console.log("second highest number is : " + newnums[newnums.length-1]);









































