 var employees = [];


function Employee (Name, jobTitle, Salary, ) {
  this.name = Name;
  this.jobTitle = jobTitle;
  this.salary = Salary;
  this.fullTime = true;
  this.printEmployeeCard = function(){
    console.log(this.name)
    console.log(this.jobTitle)
    console.log(this.salary)
    if (this.fullTime){
      console.log("fullTime")
     
      }
    }
  }
  
  
  


var worker = new Employee ("bob", "manager", 75000)
var workerTwo = new Employee ("amy", "secretary", 50000,)
var workerThree = new Employee ("nancy", "CEO", 150000,)

worker.printEmployeeCard()
workerTwo.printEmployeeCard()
workerThree.printEmployeeCard()









