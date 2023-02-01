
// 1  -----------------------

let person = {
    name: "ivan", 
    lastName:  "samusev", 
    age :  "16 years",
    books: [1,2 ,  3, 4 ,5, 6 ] ,
    rest:  5, 


    minusBook(){
        this.books.pop()
    },

    changeAge(){
        this.age += 1
    }

}

person.changeAge()

person.minusBook()

console.log('ivan :>> ', person);
// 2 -----------






//  3 ------------

function spliceArr(array){
const start = array.indexOf('Orange')

array.splice(start ,1  , "grapefruit")

return array
}

let a = spliceArr(["Apple","Orange","Plum"])
console.log('a :>> ', a);