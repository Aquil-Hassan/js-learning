const accountId=144553
let accountEmail="aquil998@gmail.com"
var accountPassword="12345"
accountCity="jaipur" //
let accountState;

//accountId=2  //not allowed to change const

accountEmail="faisal998@gmail.com"
console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountPassword, accountEmail, accountCity, accountState]);
