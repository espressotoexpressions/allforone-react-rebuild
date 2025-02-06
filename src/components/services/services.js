const sayHelloService  = async(name)=>{
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/SayHello/SayHello/"+name);
    const data = await promise.text();
    console.log("ENTER SERVICE");
    return data;
}

const oddEvenService =  async (input)=>{
  
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/AddOrEven/OddOrEven/"+input);
    const data =await promise.text();
    return data;
}

const addTwoNumService = async(num1, num2)=>{
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/AddTwoNumbers/GetSumOfTwoNumbers/"+num1+"/"+num2);
    const data = await promise.text();
    console.log("SUM" +data);
    return data;
}

const reverseNumService = async(inputNum)=>{
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/ReverseNum/ReverseNum/"+inputNum);
    const data = await promise.text();
    return data;
    
}

const askingQuestionsService = async(name, time)=>{
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/WakeUpName/GetWakeUpNameTime/"+name+"/"+time);
    const data = await promise.text();
    askingQuestionsOutput.value =data;
}

const reverseStrService = async(inputStr)=>{

    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/ReversedString/ReverseIt/"+inputStr);
    const data = await promise.text();

   return data;
}

const greaterLessService = async (firstNum,secondNum)=>{


    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/GreaterThanLessThan/GreaterThanLessThan/"+firstNum+"/"+secondNum);
    const data = await promise.text();
    return data;

}

const magic8BallService = async(inputStr)=>{
   
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/MagicEightBall/GetAnswer/"+inputStr);
    const data = await promise.text();

   return data;
}

const madlibsService = async()=>{
   
    const noun1=noun1Input.value;
    const adjective2 = adjective2Input.value;
    const number3 = number3Input.value;
    const noun4= noun4Input.value;
    const noun5 = noun5Input.value;
    const adjective6 = adjective6Input.value;
    const noun7 = noun7Input.value;
    const number8= number8Input.value;
    const number9 = number9Input.value;
    const number10 = adjective10Input.value;
    const adverb11 = adverb11Input.value;
    const noun12 = noun12Input.value;


    const promise = await fetch(`https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/Madlib/Madlib/${noun1}/${adjective2}/${number3}/${noun4}/${noun5}/${adjective6}/${noun7}/${number8}/${number9}/${number10}/${adverb11}/${noun12}`);
    const data = await promise.text();


    return data;
}

const restaurantPickerService =async(inputType)=>{
   
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/"+inputType);
    const data = await promise.text();

    return data;
}

export {sayHelloService, oddEvenService,addTwoNumService,reverseStrService,askingQuestionsService,reverseNumService,greaterLessService,magic8BallService,madlibsService,restaurantPickerService}