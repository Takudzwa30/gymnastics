

const dolhpins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

const avgdolphins = (dolhpins1 + dolphins2 + dolphins3) / 3;
const avgkoalas = (koalas1 + koalas2 + koalas3) / 3;

if(avgdolphins > avgkoalas && avgdolphins >= 100){
    console.log("The winners are the Dolphins!!!");
}else if(avgkoalas > avgdolphins && avgkoalas >= 100){
    console.log("The winners are the Koalas!!!");
}else if(avgdolphins >= 100 && avgdolphins === avgkoalas && avgkoalas >= 100){
    console.log("The game has ended in a draw!!!");
}else{
    console.log("We do not have a winner :(")
}

