interface Person{
    username:string;
}

function save(person:Person){
    console.log(person.username)
}

save({username: 'dg'})