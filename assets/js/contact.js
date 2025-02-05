


// HEADER

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);



// EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9gh3j6f','template_ucnqxqn','#contact-form','XeEmxarzpFhSo0VcF')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // // Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (services error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)








// 
// CUSTOM CURSOR
// 

const cursor = document.querySelector("[data-cursor]");
const anchorElements = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

// change cursorElement position based on cursor move
document.body.addEventListener("mousemove",
function (event) {
    setTimeout(function () {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
    }, 100);
});

// add cursor hovered class
const hoverActive = function () { cursor.classList.add("hovered"); }

// remove cursor hovered class
const hoverDeactive = function () { cursor.classList.remove("hovered"); }

// add hover effect on cursor, when hover on any button or hyperlink
addEventOnElements(anchorElements, "mouseover", hoverActive);
addEventOnElements(anchorElements, "mouseout", hoverDeactive);
addEventOnElements(buttons, "mouseover", hoverActive);
addEventOnElements(buttons, "mouseout", hoverDeactive);

// add disabled class on cursorElement, when mouse out of body
document.body.addEventListener("mouseout",
function () {
    cursor.classList.add("disabled");
});

// remove disabled class on cursorElement, when mouse out of body
document.body.addEventListener("mouseover",
function () {
    cursor.classList.remove("disabled");
});