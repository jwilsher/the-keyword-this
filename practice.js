//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

  //The purspose of the "this" keyword is to allow you to use/access properties
  //or methods on an any instance of an object

  // 2) What are the four rules that govern what the 'this keyword' is bound to 
//and describe each?

      //Answer

/*1. Implicit Binding
      -refers to whatever is left of the dot in front of "this"

2. Explicit Binding
      -you explicity state what the this keyword will be associated to
      -.call() = the first argument takes the execution context, the rest put 
                  the parameters for the function that you are going to run on 
                  the execution context
      -.apply = The first argument takes the execution context, the rest put the 
                parameters for the function that you are are going to run on the 
                execution context, but takes the parameters as an array
      -.bind = The first argument is the object that you are going to bind the function
                in front of ".bind" to.

3. The "new" keyword = if you create a new object using a consruction functino with "new"
                        keyword, than "this" refers to the new object you created

4. Default = if none of the other rules apply, then "this" keyword refers to the
              window object. */

  // 3) What is the difference between call and apply?

      //Answer

  //.call takes in a list of string values in the arguments, where as .apply takes
  //the values in the form of an array.

  // 4) What does .bind do?

      //Answer

  //.bind will take a function and bind it to whatever object is put into the 
  //argument....it returns a function



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's 
                    //username property. *Don't use 'user' instead use 
                    //the 'this' keyword*

    //Code Here

  var user = {
    username: "myUsername",
    email: "myEmail.com",
    getUsername: function () {
      return this.username;
    }
  };

//Now, invoke the getUsername method and verify you got the 
//username of the object and not anything else.

user.getUsername();


//Next Problem


// Write the function definitions which will make the following function 
//invocations function properly.



//MY FUNCTION DEFINITIONS....


function Car(company, make, year) {
  this.company = company;
  this.make = make;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  };
}

//end of MY FUNCTION DEFINITIONS....

  //Function Invocations Here


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. 
                 //Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. 
                   //Returns the new move property.

//note: you need to add a move property to it....they want you to...

//Hint, you'll need to write a moveCar function which is 
//added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure 
//you're invoking moveCar on the right object (prius vs mustang).




//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects 
//from above, use the proper syntax that will allow for you to call the getYear 
//function with the prius then the mustang objects being the focal objects. 
//*Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


getYear.call(prius);
getYear.call(mustang);

// or.....this is equivalent....

var boundGetYear = getYear.bind(prius);
boundGetYear();

//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
  console.log(this);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. 
//After 5 seconds, what will the getUsername function return?

//Note(no tests)
  //Answer Here

//MY ANSWER:  it will return undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//MY ANSWER:  it is bound to the window object

//Fix the setTimeout invocation so that the user object will be the focal object
// when getUsername is ran.

setTimeout(getMyUsername.bind(myUser), 5000);


