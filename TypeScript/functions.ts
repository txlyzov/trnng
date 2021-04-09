function getSum2(x:number,y:number,z?:number):number{
    if (typeof z !=='undefined'){
        return z;
    }
    return x;
}

function dfd( ...x:number[]):number{
    for (let i=0; i<x.length;i++){
        return x[i];
    }
}