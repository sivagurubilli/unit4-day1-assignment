var a ={task :1}
var  b ={task : 2}
 function mul1(){
 
  console.log("a",a)
  console.log("b",b)
  console.log("a*b")
  return(a.task*b.task)
}

module.exports = {mul1,a,b};