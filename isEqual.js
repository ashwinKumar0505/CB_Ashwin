let obj={name:"ashwin",age:30,add:"hids"}

let obj1={add:"hids",age:30,name:"ashwin"}

let obj2={name:"ashwin",b:{age:35}};

let obj3={name:'ashwin',b:{age:35}};

let obj4={name:"ashwin",age:30};

let obj5={name:'ashwin',age:30};



console.log(isEqual(obj,obj1))

console.log(isEqual(obj2,obj3))

console.log(isEqual(obj4,obj5))








function isEqual(obj,obj1){
let flag=0;

obj_keys=Object.keys(obj)

obj_size=obj_keys.length

obj1_keys=Object.keys(obj1)

obj1_size=obj1_keys.length

if(obj_size==obj1_size){
for(let key in obj){
  if(obj1.hasOwnProperty(key)){
       if(typeof obj[key]=='object'&&typeof obj1[key]=='object'){
          value=isEqual(obj[key],obj1[key])
          if(value==false){
            return false
          }
       }
        else{
         if(obj[key]!=obj1[key]){
         flag=1;
         }
       }
      
  }
  else
  {
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
