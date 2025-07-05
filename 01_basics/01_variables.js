const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipr"
//accountId = 2 // not allowed // because we have declared it as a constant not variable

console.table([accountId, accountEmail, accountPassword, accountCity])

accountEmail = "hc.@hc.com"
accountPassword = "1212121212"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

let accountState;
console.log(accountState);