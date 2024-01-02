
let user = {
name : "halima",
age : 27,
country : "Oman"
}

let x = [1,2,3];
let z = [x];

let {name : nickname , age : userAge , country : userCountry} = user
console.log(nickname, userAge, userCountry);
console.log(userCountry);
console.log(x);