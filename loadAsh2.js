isArray=(array)=>{

if(array instanceof Array){
  return true
}
else{
  return false
}

}

isEmpty=(array)=>{
  if(array.length==0){
    return true
  }
  else if(array.length==undefined){
    let obj_size=Object.keys(array)
    obj_size=obj_size.length
   
    return (obj_size==0);
  }
  else{
    return false
  }
}



isEqual=(obj,obj1)=>{
let flag=0;

let obj_keys=Object.keys(obj)

let obj_size=obj_keys.length

let obj1_keys=Object.keys(obj1)

let obj1_size=obj1_keys.length

if(obj_size==obj1_size){
for(let key in obj){
  if(obj1.hasOwnProperty(key)){
       
       if(obj[key]!=obj1[key]){
         flag=1;
         break;
       }
  }
  else{
    flag=1;
    break
  }
}

}

else{
flag=1;
}

if(flag==0){
  return true
}
else{
return false;
}
}


reverseString=(string)=>{
 let str="";
 let len=string.length-1
 for(j=len;j>=0;j--){
   str+=string[j];
 }
 return str;
}

drop(array,count=1)=>{
arr=array
for(let i=0;i<count&&arr[i]!='\0';i++){
  arr.shift()
}
return arr;
}

dropRight=(array,count=1)=>{
  arr=array
  diff=arr.length-count;
  arr.length=diff
  return arr
}


console.log(isEmpty([]))

console.log(isEmpty([1,2,3]))

console.log(isEmpty("hai"))

console.log(isEmpty({}))



console.log(isArray([12,1]));

console.log(isArray(10));

console.log(isArray("ashwin"))



let obj={name:"ashwin",age:30,add:'jsjd'}

let obj1={name:"ashwin",ae:30}

let obj2={name:"ashwin",age:35};

let obj3={name:'ashwin',age:30};

let obj4={name:"ashwin",age:30};


console.log(isEqual(obj,obj1))

console.log(isEqual(obj2,obj3))

console.log(isEqual(obj4,obj3))



let str=reverseString("hhhhaaa")

console.log(str)



let arr1=drop([1,2,3,4],2)

console.log(arr1)

let arr2=dropRight([1,2,3,4],2)

console.log(arr2)



