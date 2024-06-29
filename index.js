let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

const database = {
    email: "mubirusamuel002@gmail.com",
    password: "care"
}




function checkLogins(){
    const password = document.querySelector('.password').value
    const email = document.querySelector('.email').value
    if (email == database.email && password == database.password) {
        const anchor = document.querySelector('.gotodash')
        anchor.href = "dashboard.html"
        anchor.dispatchEvent(new MouseEvent('click'))
    } else {
            const messageDiv = document.querySelector('.showMessage')
            messageDiv.textContent = "Invalid login details"
            messageDiv.style.backgroundColor = 'red'
            setTimeout(()=> {
                messageDiv.textContent = ''
            }, 1000)
    }


}

function checksignup(){
    const Entername= document.querySelector('.class1').value
    const youremailgmailcom = document.querySelector('.class2').value
    const password=document.querySelector('.class3')
    const confirmpass = document.querySelector('.class4').value
    if (Entername== '') {return}
    if (youremailgmailcom== '') {return}
    if (password== '') {return}
    if (confirmpass== '') {return}
    database.class1 = Entername
    database.class2 = youremailgmailcom
    database.class3 = password
    database.class4 = confirmpass
    const anchor = document.querySelector('.gotodash')
    anchor.href = "dashboard.html"
    anchor.dispatchEvent(new MouseEvent('click'))
}