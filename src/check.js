function subarray(arr){
    let max=0;
    let str=''
  for(let i=0;i<arr.length;i++)
  {
     for(let j=i;j<arr.length;j++) {
         var bag="";
         for(let k=i;k<=j;k++){
             bag = bag+arr[k]
         }
        // console.log(bag)
         let out=isPalindrome(bag);
         if(out==!false){
            if(max<out.length){
                max=out.length;
                str=out;
            }
         }
     }
  }
  return str;
  }
  
      function  isPalindrome(S){
        let count=0;
      let temp=S;
    for(let i = temp.length-1;i>=0;i--)
    {
      temp += temp[i]
    }
    if(temp==S)  return count = S;
    else return false;
     
  }
  
  const ans = subarray("yash")
  console.log(ans)