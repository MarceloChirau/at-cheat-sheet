
// var is function scoped:
function scope(){
    var x=5;
}


if(true){
    var x=5;

}

// console.log(x);

function scope(){
    let c=5;
}


if(true){
    let c=5;

}

// console.log(c);


function test() {

    if (true) {
        var a = 1;
        let b = 2;
    }

    console.log(b);
}
console.log(a);


test();