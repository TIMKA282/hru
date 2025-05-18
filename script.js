let money_text=document.querySelector(".money-text")
let main_clicker=document.querySelector(".clicker")
let counter=0
let price=1
let bonus_price=25
let bonus_price2=200
let bonus_price3=500
let b1=document.querySelector(".button1")
let b2=document.querySelector(".button2")
let b3=document.querySelector(".button3")
main_clicker.addEventListener("click",function(){
  counter+=price
  money_text.innerHTML=counter
})

 
b1.addEventListener("click",function(){
  if(counter>=bonus_price){
    price=price*2
    counter=counter-bonus_price
    money_text.innerHTML=counter
    bonus_price=bonus_price*2
    b1.innerHTML=`при клике 2x цена ${bonus_price}`
  }
})


b2.addEventListener("click",function(){
  if(counter>=bonus_price2){
    
    setInterval(function(){
      counter+=5 
      money_text.innerHTML=counter
    },1000)
  


    counter=counter-bonus_price2
    money_text.innerHTML=counter
    bonus_price2=bonus_price2*2
    b2.innerHTML=`каждую секунду +5 цена ${bonus_price2}`
  }
})

b3.addEventListener("click",function(){
  if(counter>=bonus_price3){
    
    setInterval(function(){
      counter= counter*2
      money_text.innerHTML=counter
    },1000)
  


    counter=counter-bonus_price3
    money_text.innerHTML=counter
    bonus_price3=bonus_price3*3
    b3.innerHTML=`деньги 2x каждую секунду цена${bonus_price3}`
  }
})

  
  

  
  
