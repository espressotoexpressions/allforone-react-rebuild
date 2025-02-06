const sayHelloService  = async(name)=>{
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/SayHello/SayHello/"+name);
    const data = await promise.text();
    console.log("ENTER SERVICE");
    return data;
}

export {sayHelloService}