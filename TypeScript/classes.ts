class Car{
    brand:string;

    constructor(brand:string){
        this.brand;
    }

    pbrand(){
        console.log(this.brand)
    }
}

let car = new Car('dfsdf');
console.log(car.pbrand());




class person{
    protected name:string;
    private nam1:string;
    public nd:string;
    pr(){
        console.log('dfg');
    }
}

class emp extends person{

}

let emp1 = new emp;
emp1.pr(); 