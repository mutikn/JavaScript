let cartQuantity = 0;

function showQuantity(){
    console.log(`Cart quantity ${cartQuantity}`);
}

function addToCart(){
    cartQuantity += 1;
    console.log(`Cart quantity ${cartQuantity}`);
}

function plusTwo(){
    cartQuantity += 2;
    console.log(`Cart quantity ${cartQuantity}`);
}

function plusThree(){
    cartQuantity += 3;
    console.log(`Cart quantity ${cartQuantity}`);
}

function resetCart(){
    cartQuantity = cartQuantity - cartQuantity;
    console.log(`Cart quantity ${cartQuantity}`);
}

function addToCart(number){
    cartQuantity += number;
    console.log(`Cart quantity ${cartQuantity}`);
}

function trueOrFalse(){
    if (false){
        console.log("Hello");
    }
    else{
        console.log("not hello");
    }
}
