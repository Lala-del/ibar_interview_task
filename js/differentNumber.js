function differentNumber(){
  let a =[9,8,7,6,5];
  let b =[6,5,9,7];
  let count = 
     a.length > b.length 
       ? a.length
       : b.length;



  let sum_a = 0;
  let sum_b =0;

  for(let i=0; i<count;i++){
    sum_a +=  a[i] ? a[i] : 0;
    sum_b +=  b[i] ? b[i] : 0;
  }
 // console.log(count)
  //console.log(a)
  //console.log(sum_a)
  let output = Math.abs(sum_a - sum_b);
  console.log('Output is:' + output);
}


differentNumber();