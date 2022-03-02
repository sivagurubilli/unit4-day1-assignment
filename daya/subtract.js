var a ={a :0}
var  b ={b: 0}
 function sub1(){
 
  console.log(a)
  console.log(b)
  console.log("a-b")
  return(a.a-b.b)
}

module.exports = {sub1,a,b};