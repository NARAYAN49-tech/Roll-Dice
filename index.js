btn = document.getElementById("rollDice");
  btn.addEventListener("click",()=>{
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
  let imge = document.getElementById("image");
  let para = document.getElementById("para");
  let h1 = document.getElementById("h1");

  imge.classList.remove("animate");
  void imge.offsetWidth; // Trigger reflow for animation to reapply
  imge.classList.add("animate");
  switch (random) {
    case 1 :
       imge.src = "1_dice.png";
       para.innerHTML = `The image is 1`;
       h1.innerHTML = "bad";
       h1.style.color = "#FF5733";
       break;
    case 2 : 
       imge.src = "2_dice.png";
       para.innerHTML=`The image is 2`;
       h1.innerHTML  = "not  good";
       h1.style.color = "#C70039";
       break;
    case 3 :
       imge.src = "3_img.png";       
       para.innerHTML=`The image is 3`;
       h1.innerHTML = "On the Way";
       h1.style.color = "#FFC300";
       break;   
    case 4 :
      imge.src = "4_dice.png";       
      para.innerHTML=`The image is 4`;
       h1.innerHTML = "Well Tried";
       h1.style.color = "#DAF7A6";

       break;    
    case 5 :
      imge.src = "5_dice.png";
       para.innerHTML=`The image is 5`;
       h1.innerHTML = "Good Try";
       h1.style.color = "#28A745";
       break;  
    case 6 :
      imge.src = "6_dice.png";
       para.innerHTML=`The image is 6`;
       h1.innerHTML = "Congratulations !!!";
       h1.style.color = "#FF1493";
       break;    
  }
  });
  
  
