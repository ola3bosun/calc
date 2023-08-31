    
  // THEME TOGGLE ANIMATION
  // THEME 1
  document.getElementById("theme-1").addEventListener("click", theme1)
  function theme1(){
    document.body.classList.remove("theme-3");
    document.body.classList.remove("theme-2");
    document.getElementById("red").classList.add("first-theme");
    document.getElementById("red").classList.remove("second-theme");
    document.getElementById("red").classList.remove("third-theme");
    document.body.classList.add("default");
  }

  // THEME 2
  document.getElementById("theme-2").addEventListener("click", theme2)
  function theme2(){
    document.getElementById("red").classList.add("second-theme");
    document.getElementById("red").classList.remove("third-theme");
    document.body.classList.remove("default");
    document.body.classList.remove("theme-3");
    document.body.classList.add("theme-2");
  }

  // THEME 3
  document.getElementById("theme-3").addEventListener("click", theme3)
  function theme3(){
    document.getElementById("red").classList.add("third-theme");
    document.body.classList.remove("default");
    document.body.classList.remove("theme-2");
    document.body.classList.add("theme-3");
  }

  // THEME INDICATOR DOT

  document.getElementById("red").addEventListener("click", function(){
    if(document.body.classList.contains('default') == true){
      theme2();
    }
    else if(document.body.classList.contains('theme-2') == true){
      theme3();
    }
    else{
      theme1();
    }
  })


  // ENTER KEY EVENTLISTENER
  document.getElementById("display").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
      event.preventDefault();
      document.getElementsById("equality").click();
    }
  })