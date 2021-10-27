// Assignment 2 (Chapter 17 to 30) STARTS ......!






// Chapter 17 to 20 Starts ....


// Task 1
// var arr = [[]]



// task 2

// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(arr[0].join(' ') + '<br>')
// document.write(arr[1].join(' ') + '<br>')
// document.write(arr[2].join(' ') + '<br>')



// task 3
// for(a = 1; a<=10; a++){
//     document.write(a + '<br>')
// }



// task 4
// var table = +prompt('Enter a number to show its multiplication table')
// var length = +prompt('Enter length multiplication table')

// document.write('Mulitiplication table of ' + table + ' & length is ' + length + '<br>')
// document.write('<br>')
// for (a = 1; a <= length; a++) {
//     document.write(table + ' x ' + a + ' = ' + table*a + '<br>')
// }





// task 5

// var fruits = ['apple','banana', 'mango','orange','strawberry'];

// for ( a = 0; a < fruits.length; a++) {
//  document.write(fruits[a]+ '<br>')   
// }
// document.write("<br>")
// for ( a = 0; a <fruits.length; a++) {
//     document.write('Element at index '+ a + ' is '+ fruits[a]+ '<br>')   
// }





// task 6


// document.write('<b>Counting: </b>')
// document.write('<br>')
// document.write('<br>')

// for(a = 1; a<=15; a++){
//     document.write(a + ', ')
// }


// document.write('<br>')
// document.write('<br>')
// document.write('<br>')


// document.write('<b>Reverse Counting: </b>')
// document.write('<br>')
// document.write('<br>')

// for(a = 10; a>=1; a--){
//     document.write(a + ', ')
// }



// document.write('<br>')
// document.write('<br>')
// document.write('<br>')




// document.write('<b>Even: </b>')
// document.write('<br>')
// document.write('<br>')

// for(a = 0; a <= 10; a++){
//     document.write(a*2 + ', ')
// }




// document.write('<br>')
// document.write('<br>')
// document.write('<br>')




// document.write('<b>Odd: </b>')
// document.write('<br>')
// document.write('<br>')

// for(a = 1; a <= 20; a=a+2){
//     document.write(a + ', ')
// }




// document.write('<br>')
// document.write('<br>')
// document.write('<br>')




// document.write('<b>Series: </b>')
// document.write('<br>')
// document.write('<br>')

// for(a = 1; a <= 10; a++){
//     document.write(a*2 + 'k, ')
// }





// task 7

// var A = ['cake','apple pie', 'cookie', 'chips', 'patties'];

// var search = prompt('Welcome to ABC Bakery!\nWhat do you want to order?\nSir/Ma\'am').toLowerCase();

// flg = true;
// for (a = 0; a < A.length; a++) {

//     if (search == A[a]) {
//     flg = true;
//     document.write(search +' is <b>available</b> at index ' + a + ' in our bakery.')
//     break;
// }
// else{
//     flg = false;
// }

// }

// if (flg == false ) {
//     document.write('We are sorry. ' + search +' is <b>not available</b>' + ' in our bakery.')
// }





// task 8

// var A = [24,53,78,91,12];
// document.write('Array items: ' + A)
// document.write('<br>')
// A = A.sort()
// b = A.length;
// document.write('The largest number is ' + A[b-1])






// task 9

// var A = [24,53,78,91,12];
// document.write('Array items: ' + A)
// document.write('<br>')
// A = A.sort()
// b = A.length;
// document.write('The Smallest number is ' + A[0])





// task 10

// for(a = 5; a <= 100; a=a+5){
//     document.write(a + ', ')
// }





// Chapter 17 to 20 COMPLETED .....!










// CHAPTER 21 to 25 STARTS .........!



// task 1

// var firstName = prompt('Enter your first name?')
// var lastName = prompt('Enter your last name?')

// var fullName = firstName + ' ' + lastName;

// alert('Most Welcome Here ' + fullName);




// task 2
// var mobile = prompt('Enter your favorite mobile phone model?')
// var lengthMobile = mobile.length;

// document.write('My Favorite Phone is: ' + mobile + '<br>Length of string: ' + lengthMobile);




// task 3
// var word = 'Pakistani';
// var letter = word.indexOf('n')
// document.write('String: ' + word + '<br>')
// document.write('Index of \'n\':' + letter )






// task 4
// var word = 'Hello World';
// var letter = word.lastIndexOf('l')
// document.write('String: ' + word + '<br>')
// document.write('Last Index of \'l\':' + letter )





// task 5
// var word = 'Pakistani';
// var wordIndex = word.charAt('3')
// document.write('String: ' + word + '<br>')
// document.write('Character at index 3: ' + wordIndex );




// task 6
// var firstName = prompt('Enter your first name?')
// var lastName = prompt('Enter your last name?')

// var fullName = firstName.concat(' ', lastName);

// alert('Most Welcome Here ' + fullName);




// task 7
// var city = 'Hyderabad';
// var replaced = city.replace('Hyder','Islam');
// document.write('City: ' + city + '<br>');
// document.write('After replacement: ' + replaced );




// task 8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replaced = message.replace(/and/g,'&');
// document.write(replaced)





// task 9

// var value = '427'
// document.write('Value: ' + value + '<br>')
// document.write('Type: ' + typeof value+ '<br>');

// value = Number(value);

// document.write('Value: ' + value + '<br>')
// document.write('Type: ' + typeof value);





// task 10

// var input = prompt('Please type any word!')
// document.write('User input: ' + input + '<br>')

// input = input.toUpperCase();
// document.write('Upper Case: ' + input + '<br>')






// task 11

// var input = prompt('Please type any word!')
// firstinput = input.slice(0,1).toUpperCase()
// lastinput = input.slice(1).toLowerCase()
// document.write('User Input: ' + input + '<br>')
// document.write('Title case: ' +firstinput + lastinput)




// task 12

// var num = 35.36;
// var str = num.toString()
// str = str.replace('.','')
// document.write(str);





// task 13
// var username = prompt('Enter Username Please!')
// flg = true;
// for (a = 0; a < username.length; a++) {
//     if (username[a].charCodeAt() == 33 || username[a].charCodeAt() == 44 || username[a].charCodeAt() == 46 || username[a].charCodeAt() == 64 ) {
//         alert('Please enter a valid username');
//         flg = true;
//         break
//     }
//     else{
//         flg = false;
//         break
//     }

// }

// if (flg == false) {
//     alert('Thankyou!')
// }







// task 14 


// var A = ['cake','apple pie', 'cookie', 'chips', 'patties'];

// var search = prompt('Welcome to ABC Bakery!\nWhat do you want to order?\nSir/Ma\'am')

// search = search.toLowerCase()

// flg = true;
// for (a = 0; a < A.length; a++) {

//     if (search == A[a]) {
//     flg = true;
//     document.write(search +' is <b>available</b> at index ' + a + ' in our bakery.')
//     break;
// }
// else{
//     flg = false;
// }

// }

// if (flg == false ) {
//     document.write('We are sorry. ' + search +' is <b>not available</b>' + ' in our bakery.')
// }









// task 15

// var password = prompt('Enter your Password!')
// var pLength = password.length;
// flg = true;
// pass = true;

// document.write('Entered Password: ' + password + '<br>')

// if (password[0].charCodeAt() >= 48 && password[0].charCodeAt() <= 57){
// flg = false
// document.write('Password can\'t begin with a number <br>')
// pass = 'fail';
// }


// if ( pLength < 6  ) {
//         flg = false
//         document.write('Please Write atleast 6 Characters<br>')
//         pass = 'fail';
// }


// for (b = 1; b <= pLength; b++) {
//     if ((password.charCodeAt(b) >= 48 ) && (password.charCodeAt(b) <= 57 ) ){
//     flg = true;
//     break;
// }
// else{
//     flg = false  
//     } 
// }

// if (flg == false) {
//     document.write('Please Use atleast 1 number 0-9<br>')
//     pass = 'fail';
// }


// for (b = 0; b <= pLength; b++) {
//     if ((password.charCodeAt(b) >= 65 ) && (password.charCodeAt(b) <= 90 ) ){
//     flg = true;
//     break;
// }
// else{
//     flg = false
//     } 
// }
// if (flg == false) {
//     document.write('Please Use atleast 1 Capital Letter A-Z<br>')
//     pass = 'fail';
// }

// for (b = 0; b <= pLength; b++) {
//     if ((password.charCodeAt(b) >= 97 ) && (password.charCodeAt(b) <= 122 ) ){
//     flg = true;
//     break;
// }
// else{
//     flg = false
//     } 
// }

// if (flg == false) {
//     document.write('Please Use atleast 1 Small Letter a-z<br>')
//     pass = 'fail';
// }

// if (pass == 'fail') {
//     document.write('Please Enter Valid Password!')
// }







// task 16
// var university = 'University of Karachi';
// var b = university.split('')
// document.write(b.join('<br>'))





// task 17 

// var a = prompt('Input a word please?')
// var b = a.length - 1;
// document.write('User input: ' + a + '<br>' )
// document.write('Last character of input: ' + a[b] )




// task 18

// var text = 'The quick brown fox jumps over the lazy dog';
// text = text.toLowerCase()
// var matching = text.match(/the/g)
// var lengthMatching = matching.length;
// document.write('Text: ' + text + '<br>')
// document.write('There are '+ lengthMatching+' occurrence(s) of word ' +'\'' + matching[0] +'\''+ '<br>')















// -----------------Chapters 21 to 25 Complete ---------!











// -----------------Chapters 25 to 30 Complete ---------!






// task 1

// var num = +prompt('Write a positive integar') + 0.45214;
// document.write('number: ' + num + '<br>')
// document.write('round off value: ' + Math.round(num) + '<br>')
// document.write('floor value: ' + Math.floor(num) + '<br>')
// document.write('ceil value: ' + Math.ceil(num) + '<br>')





// task 2

// var num = +prompt('Write a negative floating point number');
// document.write('number: ' + num + '<br>')
// document.write('round off value: ' + Math.round(num) + '<br>')
// document.write('floor value: ' + Math.floor(num) + '<br>')
// document.write('ceil value: ' + Math.ceil(num) + '<br>')





// task 3

// var num = +prompt('Write a negative floating point number');
// document.write('The absolute value of ' + num + ' is ' + Math.abs(num))





// task 4
// var random = Math.random()*6; ;
// document.write('random dice value: ' + Math.round(random));






// task 5
// var random = Math.random() * 2;
// if (Math.round(random) == '2') {
// document.write(Math.round(random) + '<br> random coin value: Heads');   
// }
// else{
// document.write(Math.round(random) + '<br>random coin value: Tails');       
// }





// task 6

// var random = Math.round(Math.random()*100);
// document.write('random number between 1 and 100: ' + random);   






// task 7

// var weight = prompt('Enter your weight in kilograms')
// var num = parseFloat(weight);
// document.write('The Weight of user is '+num+' kilograms.')





// task 8

// var secretNum = Math.round(Math.random() * 10);
// var random = +prompt('Enter a Secret Number between 1 to 10.')
// if (random == secretNum) {
//     alert('Congratulations! you put the right number.')
// }
// else{
//     alert('Try Again!')
// }





// -----------------Chapters 26 to 30 Complete ---------!





// Assignment # 2 ( 17 to 30 Chapters) Completed-------------------------! 