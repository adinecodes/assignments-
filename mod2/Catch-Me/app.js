// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x,y){
//     if (x || y !== number){
//         throw "error"
//     }
//     return x + y 
//     }
 // 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.


    // try{
    //     sum(1,2)
    // }
    // catch(err){
    //     console.log(err)
    // }


    // 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
    
    var user = {username: "sam", password: "123abc"};
    function login(username, password){
      //check credentials
    }
    function login(username, password){
        if(username !== "sam" || password !== "123abc"){
            throw "Error"
        } else console.log("login successful!")
    }
     try{
        login("sam","123abc")
     }
     catch(err){
        console.log(err)
     }
     try{
        login("seeem","123eeabc")
     }
     catch(err){
        console.log(err)
     }
