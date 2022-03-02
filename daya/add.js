var a ={task :1}
var  b ={task : 2}
 function add1(){
 
  console.log("a",a)
  console.log("b",b)
  console.log("a+b")
  return(a.task+b.task)
}

module.exports = {add1,a,b};