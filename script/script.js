function sum (accum) {
   
    function sumTotal (num) {
        return accum +=num;
    }
    return sumTotal;
}
let result = sum(7);
console.log(result(5));