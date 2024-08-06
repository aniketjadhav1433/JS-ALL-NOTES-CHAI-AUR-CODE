let students = {
    name:"aniket",
    marks:92.5,
    printMarks(){
        console.log(" the marks is" ,this.marks);
    },
};


let employee = {
    calTax(){ // this is called the method of the object or also the function
        console.log("the tax is 10%");
    }
}

let aniket={
    salary:233,
    // if we want to use the tax function in this Object then we use the prototype 
}
let aniket2={
    salary:233,
    // if we want to use the tax function in this Object then we use the prototype 
}
let aniket3={
    salary:2303,
    calTax(){
        console.log("the tax is 20%"); //now the prefernce will be given to this method, whenever the object and prototype is same the objects method will be used 
    }
    // if we want to use the tax function in this Object then we use the prototype 
}

aniket.__proto__ = employee;  
aniket2.__proto__ = employee;  
aniket3.__proto__ = employee;  

// it is useful when we want to use the function many times 

// class 
// constructor is used fot the initiliazation at the time of new object making if we dont make then also the constructor is made already 

class tata {
    constructor(brand,mileage){
        console.log("this is the new object");
        this.brand= brand;
        this.mileage= mileage;
    }
    start (){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let nano = new tata("nano", 24);
console.log(nano);
let harrier = new tata(); //by this we can access the start and stop methods
nano.setBrand("nano-tata") ;
nano.start()

// inheritance 

class parent {
    constructor(name,lname){
        this.name = name
        this.lname = lname
    }
    hello(){
        console.log("hello my son");
    }
}

class child extends parent{

};

let obje =  new child("aniket", "jadhav");
console.log('object',obje);
obje.hello()

// new example

class person{
    constructor(name){
        this.species = "human"
        this.name = name;
    }
    eat(){
        console.log("eat food");
    }

    sleep(){
        console.log("sleep full day");
    }
}

let per = new person("just a name")
console.log('person name',per);
per.sleep()         // this will print sleep function 

class enginner extends person{

    constructor(branch,name){
        super(name); // this is used to invoke the parent class constructor
        this.branch = branch;
    }
    Work(){
        super.eat();
        console.log("he can work");
    }


}

let anikObj = new enginner("bca", "aniket");    


// practice question

let data = "this is the data"

class user {
    constructor(name,email){
        this.name= name;
        this.email= email;
    }

    viewData(){
        console.log('data', data);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        return data= "this is the new data"
    }
}

let stu = new user('non',"xuz@email");
let stu2 = new user('nons',"xhekjnz@email");
stu2.viewData()

let admin1 = new admin("head","admin@dl.com")
console.log('admin 1',admin1);
// admin1.editData()         // this will not work bcz it doesnt  have any console log
console.log(admin1.editData());         /////  ********** if we need to log any mehtod which has console.log then we will just write admin1.editData()  but if it does not have a console.log inside it then we will write as console.log(admin1.editData());



///

class dataaa {
    constructor(name,email){
        this.name = name
        this.email = email
    }

    static id (){
        return `123`      // if we want that the child should not access this then we will write static in front of method
    }
}


class childs extends dataaa{

}

let chill = new childs("aniket", "ani@gmail")
// console.log(chill.id());  // this will not run bcz id is static and child cannot access it



