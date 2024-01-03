/*Assignment 1: Find the Average
Write a function that takes an array of numbers as input and returns the average.*/



//Solution :

// let arry1 = [1,2,3,4,5,6,7]; //Create An array
// function arryAverage(x){  //Create a function and pass the parameter in it.
//     let sum = 0;
//     for(i=0;i<x.length ;i++){ //Doing sum through For loop
//         sum += x[i]
//     }
//     let average = sum / x.length 
//     return average  //Returning the Average 
// }

// console.log(arryAverage(arry1));



/*Assignment 2: Reverse Array
Create a function that reverses the elements of an array without using the built-in reverse method.*/


//Solution :


// let arry2 = ["lived"];
// function reverseArry(arr){

//     arr.split("")
   

//     let arr1 = [];
//     for(i=arr.length-1;i>=0;i--){
//         arr1.push(arr[i]);
//     }
//     return arr1
// }

// console.log(reverseArry(["Lived"]))



/*Assignment 3: Even Numbers
Write a function that takes an array of numbers and returns a new array containing only the even numbers.*/


//Solution :

// const myFunction = (str)=>{

//     // console.log(str)

//     let even = str.filter((arr)=>{
//        return  arr % 2== 0;

//     })
//     return even

// }

// console.log(myFunction([1,2,3,4,5,6,7,8,9,10]))

/*Assignment 4: Concatenate Arrays
Create a function that takes two arrays as arguments and returns a new array that is the concatenation of the two input arrays.*/


//Solution :

// function concatArrays(x,y){
//     return z = [...x,...y] //Using Spread Operator
// }
// console.log(concatArrays([1,2,3],[4,5,6]))

/*Assignment 5: Palindrome Check
Write a function that checks if a given string is a palindrome. The function should return true if it's a palindrome and false otherwise.*/


//Solution :

// function palindrome(x){
//     // console.log(x)
//     let palindromeStr = x.split("").reverse().join("");
//     if(palindromeStr == x){
//         return true;
//     }else{
//         return false
//     }

// }

// console.log(palindrome("lol"))


/*Assignment 6: Unique Values
Implement a function that takes an array as input and returns a new array containing only the unique values (no duplicates).*/


// function uniqueArray(x){
//     return new Set(x)
// }

// console.log(uniqueArray(['apple','apple','grapes','mango']))



/*Assignment 7: Find Max and Min
Write a function that takes an array of numbers as input and returns an object with properties max and min representing the maximum and minimum values in the array.*/

// function maxminArray(x){

//     x.sort((a, b) => a - b);
//     return { min: x[0], max: x[x.length - 1] };
    
// }

// console.log(maxminArray([1,2,3]))

/*Assignment 8: Remove Falsy Values
Create a function that takes an array and removes all falsy values (e.g., false, null, 0, "", undefined, and NaN).*/


//Solution :

// function removeFalsy(x){

//    return x.filter((y)=>{
//         if(y){
//             return y
//         }
//     })
// }

// console.log(removeFalsy(["", 0, false, undefined, NaN, null,"helllo", true]))


/*Assignment 9: Chunk Array
Implement a function that takes an array and a chunk size as arguments and returns a new array with the elements grouped into subarrays of the specified size.*/



//Solution :













/*Assignment 10: Find Duplicates
Write a function that takes an array and returns an array containing only the elements that appear more than once in the original array*/


//Solution :

function fakeArray(x){
    

    const fakeval = x.filter((item,index)=>{
        return x.indexOf(item) !== index
    })
    return fakeval



}


console.log(fakeArray(['apple','mango','apple','33','banana','33']))



