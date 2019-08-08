const posts=[{title:"post one",body:'this is post one'},{title:"post two",body:"this is post two"}]

function getpost()
{
 setTimeout(()=>{
 let output=''
 posts.forEach((posts)=>{
 output+='<li>'+posts.title+'</li>';
 });
 document.body.innerHTML=output;
 },1000);
}
function createpost(post)
{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
posts.push(post)
console.log(post)
const error=false;
if(!error)
 resolve()
else
 reject('error:something went wrong')
},2000)
})
}
createpost({title:"post Three",body:"this is post 3"})
 .then(getpost)
 .catch(err=>console.log("erorrrrrrrrrrrrrr"))
