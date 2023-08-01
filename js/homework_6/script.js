// Minimum

let shoppingList = [
    {
        product: "milk",
        quantity: 1,
        isBought: false,
        price: 40,
        sum: 40,
    },
    {
        product: "eggs",
        quantity: 10,
        isBought: true,
        price: 5,
        sum: 50,
    },
    {
        product: "tea",
        quantity: 2,
        isBought: false,
        price: 60,
        sum: 120,
    },
    {
        product: "pepper",
        quantity: 3,
        isBought: false,
        price: 20,
        sum: 60,
    },
    {
        product: "apples",
        quantity: 5,
        isBought: true,
        price: 7,
        sum: 35,
    },
]

// Task 1

function showUnboughtFirst(array) {
    array.sort(function(a) {
        if(a.isBought) {
            return 1
        } else {
            return -1
        }
    });
    array.forEach(element => {
        console.log(element.product);
    });
}

// showUnboughtFirst(shoppingList);

// Task 2

function buyProduct(product, array) {
    let desiredObj = array.find(element => {
        return element.product === product;
    });
    desiredObj.isBought = true;
}

// buyProduct("milk", shoppingList);

// Norm

// Task 1

function deleteProduct(product, array) {
    let newList = array.filter(element =>
        element.product !== product);
    return newList;
}

// deleteProduct("eggs", shoppingList);

// Task 2

function addProduct(product, price, array) {
    let desiredObject;
    let isInArray = array.some(element => {
        return (element.product === product)
    })
    if(isInArray){
        desiredObject = array.find(element => {
            return element.product === product;
        });
        desiredObject.quantity +=1;
        desiredObject.sum = desiredObject.quantity * desiredObject.price;
    } else { 
        array.push({
            product,
            quantity: 1,
            isBought: false,
            price,
            sum: 0,
        })
        array[array.length - 1].sum = array[array.length - 1].quantity * array[array.length - 1].price;
    }
    return array; 
}

// console.log(addProduct("coffee", 74, shoppingList));

// Maximum

// Task 1

function sumProducts(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element.sum;
    })
    return sum;
}

// console.log(sumProducts(shoppingList));

// Task 2

function sumUnboughtProducts(array) {
    let unboughtProducts = array.filter(element => {
        return element.isBought === false;  
    })
    let sum = sumProducts(unboughtProducts);
    return sum;
}

// console.log(sumUnboughtProducts(shoppingList));

// Task 3

function showProductsBySum(array, number) {
    if(number === 1) {
        array.sort(function(a, b) {
            return a.sum - b.sum;
        })
    } else if (number === -1) {
        array.sort(function(a, b) {
            return b.sum - a.sum;
        })
    }
    return array;
}

// console.log(showProductsBySum(shoppingList, -1));
