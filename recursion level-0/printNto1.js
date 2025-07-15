//print from n to 1 using recursion
function fun(num)
{
    if(num<1)
    {
        return;
    }
    console.log(num);
    fun(--num);
}

let num = 5;
fun(num);