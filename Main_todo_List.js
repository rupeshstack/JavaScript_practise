
// Chapter 2  variables . created 3 variables and stores string . 
var task_a , task_b , task_c;

task_a="Learn JavaScript";
task_b="Learn_More_of_JavaScript";
task_c="Join Technative";

//chapter 3 array . created array and stored the variables.
var todotask=[];
todotask=[task_a,task_b,task_c];
//console.log(todotask);

//chapter 4. objects and fuctions 

// let's create object function of task and push into array todotask


//created function to create object and push into array


var task_list=[];
function pushtask(taskname,deadline)
{
    const task = {};
    task.name= taskname;
    task.deadline=deadline;
    // task.pushing = function(){
    //                             task_list.push(task);
                               

    //                          };

    //                          //return task;
    task_list.push(task);
}


var task1 = pushtask("Learn JavaScript Basics","29-12-2020");
var task2 = pushtask("Join Technative","1-12-2020");
var task3 = pushtask("Master JavaScript","3-3-2021");

console.log(task_list);


// chapter 5 loops 

function counting(task_list)
{   var count = 0;
    for(const key in task_list)
    {
        if(typeof task_list[key]==='object')
        {
            count++;
        }
        
        else 
        {
         
            continue;
        }
    }

   console.log("Number of task are : " + count);


}

console.log("\n");


counting(task_list);





