//fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "Im Javascript");
 </script>
 Whats the error in this ?
</body>
</html>

//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”scripts.js”></script>
</body>
</html>

scripts.js

alert(“I’m invoked!”);

//explain.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

alert("I'm JavaScript!");
alert('Hello'); 
alert(`World`);
alert(3 +1+ 2); 



//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+lname;
alert( admin ); 

output = Guvigeek



//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);



//How to get the correct score in console.

//fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}




//Write a code to print the numbers in the array

//Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i]; 
}
console.log(new_string);


//Write a code to print the numbers in the array

//Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] +","; 
}
console.log(new_string);


//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

//Output: 11 10 9 8 7 6 5 4 3 2 1

var new_string = "";
 
for (var i = 11; i > 0; i-- ) {
 new_string +=[i] + " "; 
}
console.log(new_string);

// Write a code to add all the numbers in the array

Output: 66