var a ={task :1}
var  b ={task : 2}
 function sub1(){
 
  console.log("a",a)
  console.log("b",b)
  console.log("a-b")
  return(a.task-b.task)
}

module.exports = {sub1,a,b};