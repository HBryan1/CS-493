// JavaScript source code
document.addEventListener("DOMContentLoaded", init)

function init() {
    let btnSubmit = document.querySelector("button.btn");
    btnSubmit.addEventListener("click", validateForm);

    function validateForm() {
        let strAlert = "";

        strAlert = validateFirstName(document.forms[0].firstname.value);
        strAlert = strAlert + validateLastName(document.forms[0].lastname.value);
        strAlert = strAlert + validateUsername(document.forms[0].username.value);

        function validateFirstName(field) {
            if (field.length == 0) {
                return "No first name was entered\n";
            } else {
                return " ";
            }
            
        }

        function validateLastName(field) {
            if (field.length == 0) {
                return "No last name was entered\n";
            } else {
                return " ";
            }
        }

        function validateUsername(field) {
            if (field.length == 0) {
                return "No user name was entered\n";
            } else {
                return " ";
            }
        }

        document.getElementById("alertbox").innerText = strAlert;
        document.getElementById("alertbox").style.display = "block";
        event.preventDefault();
    }
}