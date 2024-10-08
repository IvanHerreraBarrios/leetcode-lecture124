// Nos dan un arreglo n, retornar arreglo n +1, debe tener los 1's que existen en la representacion binaria de ese número
/*
n=3
[0,1,2]
*/

//solution 1
var countBits = function(n){
    const ans = [];
    for (let i=0; i<=n; i++){
        const strNum = i.toString(2);
        let count = 0;
        for(let j=0; j < strNum.length; j++){
            if (strNum[j] == "1") count++;
        }
        ans.push(count);
    }
    return ans;
};


//solution 2
var countBits = function(n){
    const ans = [];
    for (let i=0; i<=n; i++){
        const count = haminWeight(i);
        ans.push(count);
    }
    return ans;
};


var haminWeight = function(n){
   let count = 0;
   let mask = 1;
   for(let i=0; i<32; i++){
        if ((mask & n) != 0) {
            count++;
        }
        //unshift operator
        mask <<= 1;
   } 
   return count;
}