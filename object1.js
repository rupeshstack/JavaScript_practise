// Creating objects using function : 

function createstudentobject(name,age,rollno)
{
   const student = {};
   student.name=name;
   student.age=age;
   student.rollno=rollno;
   student.registrationno = function (){
                                         student.rollno++;
                                       };
   return student;

};

student_information_array = [];

const student1 = createstudentobject("Rupesh",23,1);
const student2 = createstudentobject("Elon",40,2);
const student3 = createstudentobject("Dsa",20,3);

student_information_array.push(student1);
student_information_array.push(student2);
student_information_array.push(student3);

console.log(student_information_array);








