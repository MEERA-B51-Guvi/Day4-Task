//Print Odd Numbers using Arrow Function\\
//********************************************\\
console.log(" Print odd numbers in an array");
var Odd=(numbers)=>{
    console.log("Odd Numbers");
  
    for(var i=0; i<numbers.length; i++)
        {
            if(numbers[i]%2!=0)
                {
                    console.log( numbers[i]);
                }
        }
  }
  Odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(" ");
     //Arrow Function-String to titlt Caps\\
  //***************************************\\
  console.log("Convert all the strings to title caps in a string array");
  var String=(str)=>{
 
    for(var i=0; i<str.length; i++){
      str[i]=str[i].toUpperCase();
      console.log(str[i]);
    }
  //return str.join('');
  
  }
  String(["Saab", "Volvo", "BMW"]);

  console.log(" ");
  //Arrow Function-Sum of all numbers\\
 //*************************************\\
 console.log(" Sum of all numbers in an array");
 var numbers=(array)=>{
    var sum=0;
  
   for(var i=0; i<array.length; i++)
   {
    sum=sum+array[i];
  }
     console.log(sum);
  
  }
  numbers([1, 2, 3, 4, 5, 5]);

  console.log(" ");

    //Arrow Function- Print Prime Number\\
  //**************************************\\
  console.log(" Return all the prime numbers in an array");
  var prime=(num)=>{
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


  console.log(" ");

   //Arrow Function- Palindromes\\
  //*******************************\\
  console.log("Return all the palindromes in an array ");
  var arr=(c)=>{
    for(var k=0; k<c.length; k++){
    var pp=c[k].split("").reverse().join("");
    if(c[k]==pp){
        console.log(c[k]);
    }
    }
}
arr(["mam", "rever","wow"]);
  