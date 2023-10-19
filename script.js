
let showContent = document.getElementsByClassName("showContent")[0], //first element of array
 listItem = document.getElementsByClassName("listItem"),
 hiddenBlock = document.getElementsByClassName("hiddenBlock"),
 paragraphText = document.getElementsByClassName("paragraphText"),
 navBar = document.getElementById("navBar"),

  projects = navBar.getElementsByClassName("projects");


 Array.from(listItem).forEach(function (button, index) { //Convert listItem to array and for every single element execut function....
  
    button.addEventListener("click", () => { //  for every single element(li element) execut function add, addeventListiner to listining for event click when it comes...
    
      hiddenBlock[index].classList.toggle("showContent");//to  hidden block we toggle class named  showContent index represent adequate index to listItem index if listItem index is 1 then the hiddenBlock index must be 1 also
  
      Array.from(listItem).forEach(function (otherButton, otherIndex) { //make array from lisItem again for every single element execut function... 

        if (otherIndex !== index) {// if otherIndex from second iteration forEach is diffrent to index from first iteration forEach. if that's is true, current clicked element isnt the same clicled element
            
          hiddenBlock[otherIndex].classList.remove("showContent"); //for that sitaution we remove class showContent from second iteration index 
        
        }
      });
    });
  });

  Array.from(paragraphText).forEach((element, index) => { // make array from paragraphText and forEach element of arr call function with parameter element index
    setTimeout(() => { //setTimeout(function, delay, param1, param2, ...)
      element.classList.add("typingAnimation");
    
      
    }, index * 2500, ); //after 2 seconds  delay add class to element
    
  });

  
  
    let mainContent = document.getElementById("mainContent"),
    projectContainer = mainContent.querySelectorAll(".projectContainer");
    function handleScroll() {
        let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition > 145) {
            Array.from(projectContainer).forEach(element => {
                element.style.display = "flex";
                element.classList.add("drop-in-from-right");
    
          });
        };
    };

    // Nasłuchuj zarówno zdarzenia "scroll", jak i "touchmove"
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("touchmove", handleScroll);

/*
Po polsku







  Array.from(listItem).forEach(function (button, index) { // Konwertujemy listItem na tablicę i dla każdego elementu wykonujemy funkcję...

    button.addEventListener("click", () => { // Dla każdego elementu (elementu <li>) wykonujemy funkcję, która dodaje nasłuchiwanie na kliknięcie...
  
      hiddenBlock[index].classList.toggle("showContent"); // Przełączamy klasę showContent dla odpowiadającego elementu hiddenBlock o indeksie index. Indeks reprezentuje odpowiedni indeks elementu listItem. Jeśli indeks elementu listItem wynosi 1, to indeks hiddenBlock musi również wynosić 1.
  
      Array.from(listItem).forEach(function (otherButton, otherIndex) { // Ponownie tworzymy tablicę z listItem i dla każdego elementu wykonujemy funkcję...
  
        if (otherIndex !== index) { // Jeśli otherIndex z drugiej iteracji forEach jest różny od index z pierwszej iteracji forEach, to oznacza, że aktualnie kliknięty element nie jest tym samym klikniętym elementem.
  
          hiddenBlock[otherIndex].classList.remove("showContent"); // Dla takiej sytuacji usuwamy klasę showContent dla elementu hiddenBlock z drugiej iteracji o indeksie otherIndex.
        }
      });
    });
  });
  */