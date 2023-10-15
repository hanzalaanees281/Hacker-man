let messages = [
    "initializing hack tool ...",
    "connecting to facebook ...",
    "connection to server 1 ...",
    "connection failed. retrying ...",
    "connecton to server 2 ...",
    "user name found ...",
    "accessing account ...",
    "hack successfully"

];

    
const btn = document.getElementById("btn")


const sleep = async()=>{
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, 2000);
         })
}

const showhack = async (messages)=>{
    await sleep(10)
    // console.log(message);
    text.innerHTML = text.innerHTML + messages + "<br>"
}
btn.addEventListener("click",()=>{
    (async()=>{
        for (let i = 0; i < messages.length; i++) {
           await showhack(messages[i]);
          
        }
         
      })()
})

    
