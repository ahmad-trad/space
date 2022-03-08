let primireMune = document.querySelector('section header .mune');
let navBar = document.querySelector("section header nav");
let listActive = document.querySelectorAll("section header nav ul li");

// toggle click mune and close

primireMune.addEventListener('click' , () =>{
    navBar.classList.toggle("move");
    

    let attrpet = primireMune.getAttribute("data-toggle");
    if(attrpet === "true"){
        primireMune.setAttribute("data-toggle", "false");
    }else {
        primireMune.setAttribute("data-toggle", "true");
    }
});

// for loop calss active

listActive.forEach((ele) =>{
    ele.addEventListener("click", () =>{
        listActive.forEach((element) =>{
            element.classList.remove("active");
        });
        ele.classList.add("active");
    })
})