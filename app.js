let url="https://catfact.ninja/fact";

// fetch(url)
//     .then((response)=>{
//         console.log(response);    //using methods of promise because fetch() returns a promise in the form of response 
//                 //by the above statement we will be unable to see the actual json output, to see that we use below sttement
//         return response.json() // this method again returns a promise so we can use promise methods again
//     })
//     .then((data)=>{
//         console.log("data1 ",data);  //it gets the data from response.json()
//         return fetch(url)
//     })
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log("data2 ",data);
        
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


    //js will not wait untill the promises are resolved or rejected 
    //api calls work asynchronously
    // console.log("hello world!");
 let btn=document.querySelector("button");
 btn.addEventListener("click",async function(){
   let fact = await getFacts();
   let p=document.querySelector("#output");
   p.innerHTML=fact;
 });
async function getFacts() {
   try{
    let res = await axios.get(url); //adding await here so that it waits untill the promise is returned
    return (res.data.fact);
   } catch(e){
    console.log(e);
    return "not found"
    
   }   
}