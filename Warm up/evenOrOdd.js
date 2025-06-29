/*Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.*/
function evenOrOdd(num)
{
    if(num%2==0)
    {
        console.log("Even number");
    }
    else
    {
        console.log("Odd number");
    }
}

evenOrOdd(18);
evenOrOdd(5);