// 1. Making simple function :

var name = "Rupesh";
function printname()
{
   console.log(name + " Yes functions can acess global variables");
}

printname();

console.log("\n");


// 2. Parent function and child function :

function parent()
{
    var name = "Parent";
    console.log(name);
    //console.log(q);
    function childfunction()
    {   var q = "Q";
        console.log("Child function can acess the " + name);
    }
    childfunction();

}

parent();

console.log("\n");







