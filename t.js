// בסיעתא דשמיא
const cont=document.querySelector("#cont")
let calc=90
let mone=0
const func=()=>{
    const score=document.createElement("div")
    score.textContent=`score:${mone}`
    cont.append(score)
    const inpt=document.createElement("input")
    // inpt.placeholder="enter answer"
    cont.append(inpt)
    const btn=document.createElement("button")
    btn.textContent="submit"
    btn.style.width="7vw"
    cont.append(btn)
    btn.addEventListener("click",()=>{
        console.log(inpt.value);
        if(calc===Number(inpt.value))
            {
                mone+=10
                score.textContent=`score:${mone}`
                randNums()
                // func()
            }
            else{
                inpt.value=""
                // const no=document.createElement("div")
                // no.textContent="mistake"
                // no.append(score)
            }
    })
}
const randNums=()=>{
const num1=Math.floor(Math.random()*10)+1
const num2=Math.floor(Math.random()*10)+1
const act=Math.floor(Math.random()*3)+1
switch(act)
{
    case 1 :{cont.textContent=`${num1}+${num2}`
               calc=num1+num2 }
    case 2 :{cont.textContent=`${num1}-${num2}`
               calc=num1-num2 } 
    case 3 :{cont.textContent=`${num1}*${num2}`
               calc=num1*num2 }       
    func()
}
}
randNums()