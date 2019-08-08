function animal(){
this.count=2;
this.change=function(){
this.count=3
}
this.display=function(){
 return this.count
}
}

var a=new animal()
var b=new animal()
a.change();
console.log(a.display())
console.log(b.display())
