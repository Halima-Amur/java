

let enhancedsum = (x,y, ...args)=>{
    sum = x+y;
    if(args.length !=0){
        for (let i = 0; i < args.length; i++) {
            sum += args[i];
        }
    }
    return sum;
}

let enhancedsum1 = (x,y, ...args)=>{
    sub = x-y;
    if(args.length !=0){
        for (let i = 0; i < args.length; i++) {
            sub -= args[i];
        }
    }
    return sub;
}
console.log(enhancedsum1(2,3));
console.log(enhancedsum1(2,3,4,5,6,7,8,9));

let arr1 = ["one" , "Tow"] ;
let arr2 = [  ...arr1 , "there" , "four" , "five" ,"six" , "seven" , "eight"];
let arr3 = [1,2,3,4,5,6,7,8,9]
console.log(arr1)
console.log(enhancedsum1)
