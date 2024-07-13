const accountId = 144553
let accountEmail = "prerna@gmail.com"
var accountpassword = "12345"
accountCity = "Anand"
 
// accountId = 2 //not allowed
accountEmail ="pg@gmail.com"
accountpassword = "21212121"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer nnot to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountpassword ,accountCity,accountState])
