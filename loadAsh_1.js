chunk=(array, size)=> {
  let i = 0
  let arr = []
  let size1 = size
  console.log(array.length)
  while (i < array.length) {
    arr.push(array.slice(i, size1))
    i = i + size
    size1 = size1 + size
  }
  return arr
}

compact=(array)=>{
return array.filter(val=>val)
}


drop=(array,n=1)=>{
 let arr=array.slice(n,array.length)
 return arr
 }

dropRight=(array,n=1)=>{
 array.reverse()
 let arr=array.slice(n,array.length)
 arr.reverse()
 return arr
}

flatten=(array) =>{
 let arr = array
 let arr1 = []
 let a, count = 0
 for (let i = 0; i < arr.length; i++) {
  if (arr[i].length == undefined) {
   arr1.push(arr[i])
  } 
  else {
   [a, ...rest] = arr[i]
   arr1.push(a)
   for (j = 0; j < rest.length; j++) {
    arr1.push(rest[j])
   }
  }
 }
 return arr1
}

flattenDeep=(array,arr)=>{
 let arr1=array
 for(let i=0;i<arr1.length;i++){
   if(Array.isArray(arr1[i])){
     arr2=flattenDeep(arr1[i],arr)
   }
   else{
     arr.push(arr1[i])
   }
 }
 return arr;
}

flattenWithUniqueness=(array,arr)=>{
 let arr1=array
 for(let i=0;i<arr1.length;i++) {
   if(Array.isArray(arr1[i])){
     arr2=flattenWithUniqueness(arr1[i],arr)
   }
   else{
     arr.push(arr1[i])
   }
 }
 return [...new Set(arr)];
}


console.log(arr)


let arr1 = compact([NaN, 1, 2, false, null, 10, "", 5, undefined])

console.log(arr1)

let arr2 = chunk([1, 2, 3, 4, 5], 2)

console.log(arr2)

let arr3=drop([1,2,3],2)

let arr4=dropRight([1,2,3],2)

console.log(arr3)

console.log(arr4)

let arr5 = flatten([[1, [2, 3], 5], 6, 4])

 console.log(arr5)

let arr6=flattenDeep([1,[10,3],[4,5],6],[])

console.log(arr6)


let arr7=flattenWithUniqueness([1,[10,3],[4,5],10],[])

console.log(arr7)

