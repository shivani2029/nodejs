class student{
    name = 'raj';
    college ='itm';
    
      constructor(name,age){
        // this.studentname=name;
        // this .studentage=age;
        console.log(name)
      }

    fees(){
        console.log('mern fees is 5000/-')
    }
    itm(){
        console.log('hello itm')
    }
    static rjit(){
        console.log('rjit college')
    }
    static mits(){
        console.log('mits college')
    }
}
let data= new student('ram',43)
// students.mits()
// student.rjit()
// console.log(data.college)
// data.fees
// data.itm()
data.itm('shivani')