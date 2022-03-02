const make = require("./sandwich1");



const make1 = require("./sandwich2")


make1.makeburger()
make1.makesandwich()
make()

const object = {
    name:{firstname:"siva"}
}
object.name ="vinee"
console.log(object)

const makingsand = {task:"srij"}

function makesandwich(){
    console.log(makingsand)
    console.log(`not ${make()}`)
}

makesandwich()