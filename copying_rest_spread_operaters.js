let student={
    name:"yaswanth",
    age:20,
    phn:7989667476,
    email:"yaswanth@gamil.com",
    address:{
        city:"hyderabad",
        pincode:522614,
    },
}
//shallow copy
//using spread operater
let student1={...student}
student1.phn=9948205851,
student1.age=25
student1.address.pincode=520041
console.log(student,student1);


//by using object.assign method
let student2={name:"shiva", email:"shiva@gmail.com",address:{pincode:134567}}
let newstudent=Object.assign(student1,student2)
console.log(newstudent,student1);


//Deep copy
let car_showroom={
    model_name:"BMW",
    details:{
        location:"hyderabad",
        phn:6946557475,
        pincode:451209,

    },
    
}
let new_showroom=JSON.parse(JSON.stringify(car_showroom))
new_showroom.details.location="mumbai"
console.log(car_showroom, new_showroom);


//spread in arrays
let array1=[0,2,3]
let array2=[5,6,7]
let new_array=[...array1,...array2]
console.log(new_array);

//spread  in objects
let object1={name:"haresh",age:26}
let object2={phn:8905243954,email:"haresh@gamil.com"}
let new_object={...object1,object2}
console.log(new_object);

//rest in functions
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0)

}
console.log(sum(2,5,7));
console.log(sum(45,232,6));

//rest in arrays  Destructuring
let array=["Narendra","nikhil","anusha","adi","gayatri"]

let[first,second,...remaining]=array
console.log('First Element is' ,first)
console.log('Second ELement is',second)
console.log('Remaining element is ',remaining)




