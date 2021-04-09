function result(x:number):number{
    return x;
}

let d = result(5);
console.log(d);


function res3 <T>(x:T):T{
    return x;
}

let t=res3<number>(10);
console.log(t);
let v=res3<string>('Hello');
console.log(v);