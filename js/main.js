// // divide using callback

let num1, num2, num3;
function divide(no1,no2,callback){
    let c=no1/no2;
    callback(c)
}

divide(25,10,division=>{
    num1=division;
    console.log(num1);
    divide(num1,5,division=>{
        num2=division;
        console.log(num2);
        divide(num2,2,division=>{
            num3=division;
            console.log(num3);
        })
    })
})

// // //  sum using callback

let n1,n2,n3;

function add(num1,num2,back){
    let sumadd=num1+num2;
    back(sumadd)
}

add(16,17,sum=>{
    n1=sum;
    console.log(n1);
    add(n1,9,sum=>{
        n2=sum;
        console.log(n2);
        add(n2,13,sum=>{
            n3=sum;
            console.log(n3);
        })
    })
})


// pizza order using callback


function dish(food,dish){
    return dish(food);
}
dish("Pizza",dev)

function dev(food){
    setTimeout(() => {
        console.log("Order Placed");
    }, 1000);
    setTimeout(()=>{
        console.log(`${food} is preparing on the way`);
    },3000)
    setTimeout(()=>{
        console.log(`${food} is ready, thank you`);
    },4000)
}

