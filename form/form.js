// Form Popup msg

const form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Form submitted, Thank you!");
    this.reset();
})