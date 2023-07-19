//let arrayA = [5, 2, 6, 3, 8];
//let sum = 0, i = 0;
//while ( i < arrayA.length){
//    sum += arrayA[i];
//    ++i;
//}
//console.log(sum); 

let num = [5, 2, 6, 3, 8];
let sum = num.reduce((sum, element) => sum + element, 0);
console.log(sum);
