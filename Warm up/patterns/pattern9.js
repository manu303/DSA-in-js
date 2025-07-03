let n = 6;
let flag = 1 ;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + flag;
    if (flag == 1)
      flag = 0;
    else
      flag = 1;
  }
  
  console.log(row);
}
