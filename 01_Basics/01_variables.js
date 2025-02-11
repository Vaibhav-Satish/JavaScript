const accountId = 11223344
let accountEmail = "vaibhavsatish24@gmail.com"
var accountPassword = "123456"
accountCity = "Bengaluru"
let accountState;

// accountId = 2 // not allowed

accountEmail = "yb@yb.com"
accountPassword = "654321"
accountCity = "Mysore"

console.log(accountId);

/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])