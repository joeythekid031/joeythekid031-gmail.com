const generatEl = document.getElementById("generate")
var myPassEl = document.getElementById("#myPassword")

const randomFunc = {
  lowerVal: getRandomLower,
  upperVal: getRandomUpper,
  numberVal: getRandomNumber, 
  symbolVal: getRandomSymbol, 
};

// default value for all parameters 

var length = 8;
var lowerVal = true;
var upperVal = true;
var numberVal = true;
var symbolVal = true;



// generateing our password on click of the button by calling a function on click of the genbtn using a different function to avoid using arrow but might change if i run into problems

generatEl.addEventListener("click", function(){


myPassword.textContent = generatePassword(lowerVal, upperVal, numberVal, symbolVal, length);
});
function generatePassword(lowerVal, upperVal, numberVal, symbolVal, length){

  let generatedPassword = "" 

  // var typesCount = lowerVal + upperVal + numberVal + symbolVal;

  var length = prompt("How long would you like your password? Minimum of 8");
  var hasLower = confirm("Do you want lowercase letters?")
  var hasUpper = confirm("Do you want uppercase letters?")
  var numberVal = confirm("Do you want numbers?")
  var hasSymbol = confirm("Do you want symbols?")

  var typesCount = lowerVal + upperVal + numberVal + symbolVal;

  const typesArr = [{ lowerVal }, {upperVal}, {numberVal}, {symbolVal}].filter
  (
    item => Object.values(item)[0]
  );

  for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
      const func = Object.keys(type)[0];
      console.log('func: ', func);
			generatedPassword += randomFunc[func]();
		});
	}
  console.log(generatedPassword);
  return(generatedPassword);

  myPassEl.textContent = (generatedPassword);
  
  // for (let i = 0 ; i < lengthVal; i += typesCount){
  //   typesArr.forEach (type =>{
  //     const funcName = Object.keys(type)[0];
  //     console.log(funcName);

  //     generatedPassword += randomFunc[funcName]();
  //   })
  // }
}


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random()*14)+32);
      // sugessted in the how to but keeps giving error code
  // const symbols= "!@#$%^&*(){}[]=<>/,.";
  // return symbols[Math.floor(Math.random()*symbols.length))];
}

console.log(getRandomSymbol());