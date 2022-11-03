const input = document.querySelector("#input_message")
const btn = document.querySelector(".btn")
const output = document.querySelector("#output")

let message = ''

input.addEventListener("keyup", (event)=>{
  message = event.target.value
})

btn.addEventListener("click", (event)=>{
  console.time("aliceDecrypt")
  aliceDecrypt(message)
  console.timeEnd("aliceDecrypt")
})

const aliceDecrypt = (message)=>{
  let output_message =''
    for(let i =0;i<message.length;i++){
      output_message += message[i]
      if(output_message.length >= 2 && output_message[output_message.length-1]===output_message[output_message.length-2]){
        output_message = output_message.slice(0,-2)
      }
    }
    output.innerHTML = output_message
}
