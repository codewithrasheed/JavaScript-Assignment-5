//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 21 - 30 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Changing Case ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var a = prompt("Enter Any Word, We Convert it into UPPERCASE");
// var b = a.toUpperCase();
// document.write(b);

// Task : 2.
// var input = prompt("Enter Any Word, We Convert it into TitleCase")
// var firstLetter = input.slice(0, 1);
// var otherLetters = input.slice(1);
// input = firstLetter.toUpperCase() + otherLetters.toLowerCase();
// document.write(input);

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Strings: measuring length and extracting parts ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var mobile = prompt("Enter Your Favorite Mobile Phone Model");
// var length = mobile.length;
// document.write(length);

// Task : 2.
// var str1 = prompt("Enter Your Favorite Mobile Phone Model");
// var str2 = str1.charAt(str1.length-1);
// document.write(str2);

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Strings: finding segments ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var nationality = "Pakistani"
// document.write(nationality.indexOf("n"));

// Task : 2.
// var username = prompt("Enter a Username")
// var checkusername = username.indexOf("@");
// if(checkusername != -1){
//     prompt("Enter a Valid Username")
// }

// Task : 3.
// var string = "The quick brown fox jumps over the lazy dog";
// var count = string.match(/the/g).length
// document.write(count)

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Strings: finding a character at a location ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var nationality2 = "Pakistani"
// var find = nationality2.charAt(3)
// document.write(find);

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Strings: replacing characters ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var city = "Hyderabad";
// document.write("Before Replacing The Character: &nbsp", city)
// var chngcity = city.replace("Hyder","Islam")
// document.write("<br><br> After Replacing Hyder Character: &nbsp",chngcity)

// Task : 2.
// var message = "Ali and Sami are best friends.";
// var message2 = "They play cricket and football together.";
// var chngcharacter = message.replace("and","&")
// var chngcharacter2 = message2.replace("and","&")
// document.write(chngcharacter)
// document.write(chngcharacter2)

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Rounding numbers ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var number = prompt("Enter Any Positive Floating Number")
// var round = Math.round(number)
// var flor = Math.floor(number)
// var ceil = Math.ceil(number)
// document.write("<big>Round Off Value of Number: ",round)
// document.write("<br>Floor Value of Number: ",flor)
// document.write("<br>Ceil Value of Number: ",ceil)

// Task : 2.
// var negnumber = prompt("Enter Any Negative Floating Number")
// var round = Math.round(negnumber)
// var flor = Math.floor(negnumber)
// var ceil = Math.ceil(negnumber)
// document.write("<big>Round Off Value of Negative Number: ",round)
// document.write("<br>Floor Value of Negative Number: ",flor)
// document.write("<br>Ceil Value of Negative Number: ",ceil)

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Generating random numbers ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var a = Math.random();
// var dice = Math.round(a);
// var dice = Math.round(a*6);
// var dice = Math.ceil(a*6);
// document.write("<big>Dice Number: ",dice);

// Task : 2.
// var a = Math.random();
// var toss = Math.round(a * 2);
// document.write("<big>Toss Heads/Tails: ");
// if (toss == 2) {
//   document.write("Heads");
// }
// else {
//   document.write("Tails");
// }

// Task : 3.
// var secret = 5;
// var user = prompt("Enter a Number Between 1 to 10")
// if(user == secret){
//     document.write("Congratulation you Enter A Secret Number")
// }
// else{
//     document.write("OOPS! you Can't Enter A Secret Number")
// }

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Converting strings to integers and decimals ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var weight = prompt("Write Your weight")
// var convert = parseInt(weight)
// var convert = parseFloat(weight)
// document.write("Your Weight is: ",convert, "Kg")

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Converting strings to numbers, numbers to strings▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var string = "472"
// var convertstr = Number(string)
// document.write("<big> Value: ",convertstr)
// document.write("<br> Type: ",typeof(convertstr))

// Task : 2.
// var num = 35.36
// var strg = num.toString().replace(".", "");
// document.write("<big>String Value: ", strg);

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: Controlling the length of decimals ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var percentage = 30 / 45 * 100;
// var fixed = percentage.toFixed(0)
// document.write("<big>After Controlling the Lenght of Decimal: ",fixed)

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 31 - 34 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: DATE METHODS ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// var dt = new Date();
// document.write("<big>Current Date and Time: ",dt)

// Task : 2.
// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var dat = new Date();
// var a = dat.getMonth();
// document.write("<big>Current Month: ", months[a]);

// Task : 3.
// var days = [
//     "Sun",
//     "Mon",
//     "Tue",
//     "Wed",
//     "Thu",
//     "Fri",
//     "Sat"
// ];
// var currentDay = new Date()
// var display = currentDay.getDay()
// document.write("Today is: " + days[display]);

// Task : 4.
// var cd = new Date();
// cd = cd.getDay();
// if(cd == 0 || cd == 12){
//     document.write("<big>It's Fun Day");
// }
// else{
//     document.write("<big>It's Working Day ")
// }

// Task : 5.
// var date = new Date();
// var today = date.getDate();
// if(today <= 15){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// };

// Task : 6.
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// document.write("<big>Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since January 1, 1970: " + diffMin)

// Task : 7.
// var x = new Date();
// var y = x.getHours();
// if(y == "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"){
//     document.write("It's PM")
// }
// else{
//     document.write("It's AM")
// }

// Task : 8.
// var ntd = new Date("Oct31,2022");
// document.write("<big>Later Date: " + ntd)

// Task : 9.
// var start = new Date("June 18,2015")
// start = start.getTime();
// var end = new Date()
// end = end.getTime();
// var diff = end-start
// document.write( Math.floor( diff/(1000*60*60*24) ) +" days have passed since 1st Ramadan, 2015")

// Task : 10.
// var start = new Date("Jan 1, 2015")
// start = start.getTime()
// var end = new Date("Dec 5, 2015")
// end_ref_date = end.getTime()
// var diff = end_ref_date - start
// document.write("<big>On reference date " + end + ",<br> "+ Math.floor( diff/1000 ) +" seconds had passed since beginning of 2015");

// Task  :11.
// var date = new Date()
// document.write("Current date: "+ date)
// var get_hour = date.getHours()
// date.setHours(get_hour - 10)
// document.write("<br>One hour ago, it was: " +date)

// Task  : 12.
// var date = new Date()
// document.write("Current date: "+ date)
// var year = date.getFullYear()
// date.setFullYear(year-100)
// document.write("<br>100 years back, it was: " + date)

// Task : 13.
// var ask = prompt("Enter Your Age:")
// var ctd = new Date()
// var year = ctd.getFullYear()
// var ageresut = year - ask
// document.write("<big>Your Age is: ", ask)
// document.write("<br>Your Birth Year is: ", ageresut)

// Task  : 14.
// document.write(" <h1> K-Electric Bill </h1>  ")
// document.write("Customer Name: <b> XYZ Customer </b>")
// document.write("<br> Month: <b> November </b>")
// var units = 410
// var charges = 16
// var surcharges = 350
// document.write(`<br>  Number of units: <b>  ${units} </b> `)
// document.write(`<br>  Charges per unit: <b>  ${charges} </b> `)
// document.write(`<br><br>  Net Amount Payable (within Due Date): <b>  ${(charges * units).toFixed(2)} </b> `)
// document.write(`<br> Late Payment Surcharge: <b>  ${surcharges} </b> `)
// document.write(`<br> Gross Amount Payable (after Due Date): <b>  ${((charges * units) + surcharges).toFixed(2)} </b>`)

//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CHAPTER NO: 35 - 38 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
//   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Topic: FUNCTIONS ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//
// Task : 1.
// function date(){
//     var curtdt = new Date()
//     document.write(curtdt);
// }
// date()

// Task : 2.
// function greet(){
//     var first = prompt("Enter First Name");
//     var second = prompt("Enter Second Name");
//     document.write("Welcome ", first ,"&nbsp", second)
// }
// greet()

// Task : 3.
// function add(){
//     var one = prompt("Enter First Number");
//     var two = prompt("Enter Second Number");
//     var xyz = parseInt(one) +  parseInt(two);
//     document.write("After Adding Two Number: " + xyz);
// }
// add()

// Task : 4.
// function calculator(){
//     var num1 = prompt("Enter First Number");
//     var operator = prompt("Enter Operator eg: +, -, *, /, %");
//     var num2 = prompt("Enter Second Number");
//     if (operator == "+" ) {
//         document.write("<big>Addition: ",parseInt(num1) + parseInt(num2));
//     } else if (operator == "-") {
//         document.write("Subtraction: ",num1 - num2);
//     } else if (operator == '*') {
//         document.write("Multiplication: ",num1 * num2);
//     } else if (operator == '/') {
//         document.write("Division: ",num1 / num2);
//     }
//     else if (operator == '%') {
//     document.write("Modules: ",num1 % num2);
//     }
//     else {
//         document.write("Wrong Operator! <br> Please Enter Correct Operator");
//     }

// }
// calculator()

// Task : 5.
// function square(){
//     var val1 = prompt("Enter Any Number \nWe Show its Square");
//     document.write(`Square of ${val1} is: ${val1 * val1}`);
// }
// square()

// Task : 6.
// function factorial(n) {
//     if (n == 0) return 1;
//     return n * factorial(n - 1);
// }
// var num = prompt("Enter Any Number \nWe Show its Factorial");
// document.write(`<big> Factorial of  ${num}  is:  ${factorial(num)}`);

// Task : 7.
// function counting(){
//     var startnum = prompt("Enter Starting Number of Counting");
//     var endnum = prompt("Enter Ending Number of Counting");
//     while(startnum <= endnum){
//         document.write(startnum + "<br>" )
//         startnum++
//     }
// }
// counting()

// Task : 8.
// function calculateHypotenuse(){
//     var base = prompt("Enter Base Value of \nRight Angle Triangle")
//     var perp = prompt("Enter Perpendicular Value of \nRight Angle Triangle")
//     var hypo = base*base + perp*perp
//     document.write("<big>Hypotenuse Value of Right Angle Triangle: " + hypo);
//     function calculateSquare(){
//     var square = Math.sqrt(hypo)
//     document.write("<br>Hypotenuse Value of Right Angle Triangle After Square root: " + square);

// }
//     calculateSquare()
// }
// calculateHypotenuse()

// Task : 9.
// function area(){
//     var width = prompt("Enter Width of Rectangle");
//     var height = prompt("Enter Height of Rectangle");
//     var formula = width*height;
//     document.write("<big>Area of Rectangle is: " + formula)
// }
// area()

// Task : 10.
// function palindrome(string) {
//     var len = string.length;

//     for (var i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return '<big>It is not a Palindrome';
//         }
//     }
//     return '<big>It is a Palindrome';
// }
// var string = prompt('Enter Any Word: ');
// var value = palindrome(string);
// document.write(value);

// Task : 11.
// function titleCase(string) {
// var sentence = string.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
// }
// document.write("Sentence in Title Case: ",sentence.join(" "));
// return sentence;
// }
// titleCase(prompt("Enter Sentence:"));

// Task : 12.
// function find_longest_word(str) {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for (var x = 1; x < array1.length; x++) {
//     if (result.length < array1[x].length) {
//       result = array1[x];
//     }
//   }
//   return result;
// }
// document.write(find_longest_word(prompt("Enter a Sentence")));

// Task : 13.
// function myfuction() {
//     var string2 = "JSResourceS.com";
//     var count2 = string2.match(/o/g).length
//     document.write("<big>",count2)
// }
// myfuction();

// Task : 14.
// document.write("<h1>The Geometrizer</h1>")
// var radius = prompt("Enter Radius Value");
// var pie = 3.142
// function calcCircumference(){
//     document.write("<big>The Circumference of Circle: ", 2*pie*radius)
// }
// calcCircumference()
// var radiussquare = radius*radius
// function calcArea(){
//     document.write("<br>The area of Circle: ", pie*radiussquare);
// }
// calcArea()

// x--------------------------------------------------x-------------------------------------------------------------x