//print numbers from 1 to n using recursion
let num = 5;
function fun(start)
{
    if(start>num)
    {
        return;
    }
    console.log(start);
    fun(++start);
}
fun(1);