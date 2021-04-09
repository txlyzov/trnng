let x:string='Hello';

let y:15;
y='hi';

let isCorrect:boolean;
isCorrect=true;

let countries:string[] = ['dsf','sdf','sfd'];
let numbers:Array<number> = [1,2,3];
let t: [number,string] = [1,'hi'];

let a:any;
a=5;
a='hi';

enum Colors {red,blue,green};
let red = Colors.blue;

function greeter(): void{
    console.log('hello');
}

class Product{

}
let greet;
greet = 'hello';
let  count = (<string>greet).length;