let AppRound=function(){
return new Promise((resolve,reject)=>
resolve("cleared Apptitude round"))
}

let CodingRound=function(result){
return new Promise((resolve,reject)=>
resolve(result+"cleared coding round"))
}

let HrRound=function(result){
return new Promise((resolve,reject)=>{
pass=false;
if(pass)
 resolve(result+"cleared HR round");
else
 resolve(result+"failed HR round");
})
}

AppRound().then(function(result){
return CodingRound(result)
}).then(function(result){
return HrRound(result)
}).then(function(result){
console.log(result);
}).catch(function(result){
console.log(result);
})

