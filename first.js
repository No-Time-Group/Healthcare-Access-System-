const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    if (username === "") {
        alert("Please enter username");
        isValid = false;
    }

    if (password === "") {
        alert("Please enter password");
        isValid = false;
    }

    if (isValid) {
        form.submit(); // Submit the form if validation passes
    }
});
