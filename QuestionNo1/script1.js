//Anonymous Print Odd Numbers
//*****************************\\
console.log("Print odd numbers in an array-Anonymous");
var oddnumbers=function(array)
    {
 console.log("Odd Numbers");

    for(var i=0; i<array.length; i++)
        {
            if(array[i]%2!=0)
                {
                    console.log( array[i]);
                }
        }

    }
oddnumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//IIFE\\(Print Odd Numbers)
  //***************************\\
  console.log("Print odd numbers in an array-IIFE");
  (function(numbers){
    console.log("Odd Numbers");

    for(var i=0; i<numbers.length; i++)
        {
            if(numbers[i]%2!=0)
                {
                    console.log(numbers[i]);
                }
        }

})
([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(" ");


//Anonymous -String to titlt Caps\\
//**********************************\\
console.log(" Convert all the strings to title caps in a string array-Anonymous");
var Cars=function (str){
 
    for(var i=0; i<str.length; i++){
      str[i]=str[i].toUpperCase();
      console.log(str[i]);
    }
  return str.join('');
  }
  Cars(["Saab", "Volvo", "BMW"]);

  
  //IIFE-String to title Caps\\
//***********************************\\
console.log("Convert all the strings to title caps in a string array-IIFE ");
(function (str){
 
    for(var i=0; i<str.length; i++){
      str[i]=str[i].toUpperCase();
      console.log(str[i]);
    }
  return str.join('');
  
  })(["Saab", "Volvo", "BMW"]);
  console.log(" ");

   //Anonymous-Sum of All numbers\\
//********************************\\
console.log("Sum of all numbers in an array -Anonymous");
var numbers=function(array){
    var sum=0;
 
   for(var i=0; i<array.length; i++)
   {
    sum=sum+array[i];
 }
     console.log(sum);
 
 }
 numbers([1, 2, 3, 4, 5, 5]);




 //IIFE-Sum of All numbers\\
  //*****************************\\
  console.log("Sum of all numbers in an array -IIFE");
  (function(array){
    var sum=0;
 
   for(var i=0; i<array.length; i++)
   {
    sum=sum+array[i];
 }
     console.log(sum);
 
 })([1, 2, 3, 4, 5, 5]);

 console.log(" ");
  //Anonymous function- Print Prime Numbers\\
//*******************************************\\
console.log("Return all the prime numbers in an array -Anonymous");
var prime=function (num){
    for(let i=0; i<=num.length; i++)
    {
     var sum=0;
     for(var j=1;j<=i; j++)
     {
       if(i%j==0)
       {
         sum=sum+1;
       }
    }
    if(sum==2)
    {
      console.log(i);
    }
  } 
  }
  prime([2, 3, 4, 5, 6, 7, 8, 9]);


   //IIFE- print Prime Numbers\\
//**************************\\
console.log(" Return all the prime numbers in an array-IIFE");
(function (num){
    for(let i=0; i<=num.length; i++)
    {
     var sum=0;
     for(var j=1;j<=i; j++)
     {
       if(i%j==0)
       {
         sum=sum+1;
       }
    }
    if(sum==2)
    {
      console.log(i);
    }
  }
  })([2, 3, 4, 5, 6, 7, 8, 9]);
  
  console.log(" ");
  
    //Anonymous function- Palindromes\\
    //***********************************\\
    console.log("Return all the palindromes in an array -Anonymous");
    const palin=function(a)
    {
      var a=["eye","madam","nitin"]
      for(i=0;i<a.length;i++)
      {
          var b=a[i].split("").reverse().join("")
          if(a[i]==b)
          console.log(a[i])
      }
    }
      palin();


       //IIFE-Palindrome\\
  //*******************\\
  console.log(" Return all the palindromes in an array-IIFE");
  (function(b)
  {
        for(var j=0; j<b.length; j++)
    {
      var p=b[j].split("").reverse().join("");
      if(b[j]==p)
        {
           console.log(b[j]);
        }
    }
})(["sis", "mom", "dad"]);

console.log(" ");
  //median anonymous\\
//*******************\\
console.log("Return median of two sorted arrays of the same size.-Anonymous ");
function median(a, b){
    let c = [...a, ...b].sort((a,b) =>a-b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
}
let a=[1,2,3];
let b=[4,2,5];
console.log(median(a, b));

   //median IIFE\\
//*****************\\
console.log("Return median of two sorted arrays of the same size-IIFE");
(function median(aa, bb){
    let c = [...aa, ...bb].sort((aa,bb) =>aa-bb);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
})
let aa=[1,2,3];
let bb=[4,2,5];
console.log(median(aa, bb));

console.log(" ");
//Anon-duplicate
console.log("Remove duplicates from an array-Anonymous ");

var dup1=function(array1){
  let dup2 = [...new Set(array1)];
  console.log(dup2);
 }
 dup1([2,2,3,3]);


//IIFE - duplicate
console.log("Remove duplicates from an array-IIFE ");
(function(array){

  let Dup = [...new Set(array)];
  console.log(Dup);
})([2,2,3,3]);

console.log(" ");
//anon ktimes
console.log("Rotate an array by k times -Anonymous");
const rotateArray1 =(nums,n)=>{
  for (let i=0;i<n;i++) {
      nums.unshift(nums.pop());
  }
  return nums;
}
let nums=[2,7,6,8];
let n=[2];
console.log(rotateArray1(nums,n));

//IIFE k times
console.log(" Rotate an array by k times-IIFE");
(function(num, k){
  for(let j=0; j<k; j++){
      num.unshift(num.pop());
  }
  return num;
  })
  console.log([6, 8, 2, 7]);




