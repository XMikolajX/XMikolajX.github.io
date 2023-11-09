

let app = {
  mainContent: document.getElementById("mainContent"),
  projectContainer: mainContent.querySelectorAll(".projectContainer"),
  benefitsBox:  document.querySelectorAll(".benefitsBox"),
  showContent: document.getElementsByClassName("showContent")[0], 
  listItem: document.getElementsByClassName("listItem"),
  hiddenBlock:document.getElementsByClassName("hiddenBlock"),
  paragraphText: document.getElementsByClassName("paragraphText"),
  navBar: document.getElementById("navBar"),
  projects: navBar.getElementsByClassName("projects"),
}

 Array.from(app.listItem).forEach(function (button, index) { //Convert listItem to array and for every single element execut function....
  
    button.addEventListener("click", () => { //  for every single element(li element) execut function add, addeventListiner to listining for event click when it comes...
    
      app.hiddenBlock[index].classList.toggle("showContent");//to  hidden block we toggle class named  showContent index represent adequate index to listItem index if listItem index is 1 then the hiddenBlock index must be 1 also
  
      Array.from(app.listItem).forEach(function (otherButton, otherIndex) { //make array from lisItem again for every single element execut function... 

        if (otherIndex !== index) {// if otherIndex from second iteration forEach is diffrent to index from first iteration forEach. if that's is true, current clicked element isnt the same clicled element
            
          app.hiddenBlock[otherIndex].classList.remove("showContent"); //for that sitaution we remove class showContent from second iteration index 
        
        }
      });
    });
  });

  Array.from(app.paragraphText).forEach((element, index) => { // make array from paragraphText and forEach element of arr call function with parameter element index
    setTimeout(() => { //setTimeout(function, delay, param1, param2, ...)
      element.classList.add("typingAnimation");
    
      
    }, index * 2500, ); //after 2 seconds  delay add class to element
    
  });

    function handleScroll() {
          let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

          if (scrollPosition > 20) {
              Array.from(app.projectContainer).forEach(element => {
                element.style.display = "flex";
                element.classList.add("drop-in-from-right");
    
              });
            }
           if(scrollPosition > 840) {
         
              Array.from(app.benefitsBox).forEach(element => {
                element.style.display = "flex";
                element.classList.add("drop-in-from-left");
                setTimeout(() => {
                  element.classList.add("changeColor");
               
                },2000)

              });
            };
      
    };

    // Nasłuchuj zarówno zdarzenia "scroll", jak i "touchmove"
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("touchmove", handleScroll);

