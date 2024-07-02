let person ={
    firstname:"names",
    lastname:"lastname",
    country:"countrys",
    street:{locality:"local",age:50,landmark:"nearby"}

}
person.firstname="john"
let person2={
    firstname1:"names",
    lastname1:"lastname",
    country1:"countrys",
    street1:{locality:"local",age:50,landmark:"nearby"}

}
console.log(Object.values(person))


let arr=[{"name1":"john1"},{"name1":"john2"},{"name2":"john3"},{"name1":"john4"}]
let arr1=[]
for(let i in arr)
    {
        if(arr[i].hasOwnProperty("name1"))
            {
               arr1.push(arr[i])
            }
    }
    console.log(arr1)



 let arr3=[] 
function objects1(arr2)
{
    
    for(i  in arr2)
        {
          arr3.push(Object.keys(arr2[i]))
        }
        
}
let arr2=[{a:1,b:2},{c:3,d:4},{e:5,f:6}]
objects1(arr2)
console.log(arr3)



let value=[]
function objects2(arr4)
{
  for(i in arr4)
    {
        value.push(Object.values(arr4[i]))
    }
}
let arr4=[{a:1,b:2},{c:3,d:4},{e:5,f:6}]
objects2(arr4)
console.log(value)


let property = [];

function objects3(arr5) {
   
    for (i in arr5) {
        if (arr5[i].hasOwnProperty("a")) {
            property.push( arr5[i]);
        }
    }
}

let arr5 = [{a:1}, {b:3}, {a:2, d:4}];
objects3(arr5);
console.log(property); 


let arr6=[{a:5},{a:4},{a:1},{a:7},{a:2}]
arr6.sort((x,y)=>x.a-y.a)
console.log(arr6)











    


