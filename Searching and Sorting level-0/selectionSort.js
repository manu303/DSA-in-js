//selection sort alogorithm
const arr = [9,2,3,1,5];
function selectionSort(arr)
{
    let n  = arr.length;
    for(let i=0;i<n-1;i++)
    {
        //find minimum number index
        let min = i;
        for(let j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min])
            {
                min = j;
            }
        }
        //only swap if both min and i not equal to improve but works without this condition as well.
        if(min !== i)
        {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr));