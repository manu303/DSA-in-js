/*
Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
*/

function votingEligibilty(age)
{
    if(age<0)
    {
        console.log("Invalid input");
    }
    else if(age<18)
    {
        console.log("Not eligible to vote.");
    }
    else
    {
        console.log("Eligible to vote.");
    }     
}

votingEligibilty(15);