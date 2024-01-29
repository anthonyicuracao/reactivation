document.addEventListener("DOMContentLoaded", function () {
    var modal1 = new bootstrap.Modal(document.getElementById("modal1"));
    if (modal1 && typeof modal1 !== "undefined") {
        modal1.show();
    }
});

function toggleDisplay(ids) {
    for (var i = 0; i < ids.length; i++) {
        var element = document.getElementById(ids[i]);
        if (element) {
            if (element.style.display === "none") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function initializeLocalStorageAndElements() {
    // Define the values to check and set in local storage
    var initialValues = {
        form1A: "1605 West Olympic Boulevard",
        form1B: "Suite 805",
        form1C: "Los Angeles",
        form1D: "CA",
        form1E: "90015",
        form2A: "Boeing",
        form2B: "(213) 639-2100",
        form2C: "$8,000.00"
    };

    // Loop through the keys and values to check and set in local storage
    for (var key in initialValues) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, initialValues[key]);
        }

        // Get the corresponding elements by ID
        var element = document.getElementById(key);
        var elementX = document.getElementById(key + "X");

        // Check if the element exists and update its innerText, placeholder, and value
        if (element) {
            element.innerText = localStorage.getItem(key);
        }

        if (elementX) {
            elementX.placeholder = localStorage.getItem(key);
            elementX.value = localStorage.getItem(key);
        }
    }
}

// Run the function on page load (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {
    initializeLocalStorageAndElements();
});

// Function to update local storage when form1 is submitted
function updateForm1LocalStorage() {
    var form1AX = document.getElementById("form1AX").value;
    var form1BX = document.getElementById("form1BX").value;
    var form1CX = document.getElementById("form1CX").value;
    var form1DX = document.getElementById("form1DX").value;
    var form1EX = document.getElementById("form1EX").value;

    // Update local storage with the values from form1
    if (form1AX, form1BX, form1CX, form1DX, form1EX) {
        localStorage.setItem("form1A", form1AX);
        localStorage.setItem("form1B", form1BX);
        localStorage.setItem("form1C", form1CX);
        localStorage.setItem("form1D", form1DX);
        localStorage.setItem("form1E", form1EX);

        document.getElementById("form1A").innerText = form1AX;
        document.getElementById("form1B").innerText = form1BX;
        document.getElementById("form1C").innerText = form1CX;
        document.getElementById("form1D").innerText = form1DX;
        document.getElementById("form1E").innerText = form1EX;

    }
}

// Function to update local storage when form2 is submitted
function updateForm2LocalStorage() {
    var form2AX = document.getElementById("form2AX").value;
    var form2BX = document.getElementById("form2BX").value;
    var form2CX = document.getElementById("form2CX").value;
    // Update local storage with the values from form2
    if (form2AX, form2BX, form2CX) {
        localStorage.setItem("form2A", form2AX);
        localStorage.setItem("form2B", form2BX);
        localStorage.setItem("form2C", form2CX);
        document.getElementById("form2A").innerText = form2AX;
        document.getElementById("form2B").innerText = form2BX;
        document.getElementById("form2C").innerText = form2CX;
    }
}

// Add event listeners to the form submit events
if (document.getElementById("form1") && typeof document.getElementById("form1") !== "undefined") {
    document.getElementById("form1").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        if (document.querySelectorAll("#form1 .was-validated .form-control:invalid").length === 0) {
            updateForm1LocalStorage(); // Update local storage
            toggleDisplay(['home1', 'home2']);
        }
    });
}

if (document.getElementById("form2") && typeof document.getElementById("form2") !== "undefined") {
    document.getElementById("form2").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        if (document.querySelectorAll("#form2 .was-validated .form-control:invalid").length === 0) {
            updateForm2LocalStorage(); // Update local storage
            toggleDisplay(['work1', 'work2']);
        }
    });
}

function validateForm(x) {
    var formEl = document.getElementById(x);
    if (formEl && typeof formEl !== "undefined") {
        var submitButton = formEl.querySelector("button[type='submit']");
        var formInputs = formEl.querySelectorAll(".form-control");
        if (submitButton && formInputs) {
            for (var i = 0; i < formInputs.length; i++) {
                formInputs[i].addEventListener("input", function () {
                    var invalidInputs = formEl.querySelectorAll(".was-validated .form-control:invalid");
                    if (invalidInputs.length > 0) {
                        submitButton.disabled = true;
                    } else {
                        submitButton.disabled = false;
                    }
                });
            }
        }
    }
}

function validatePhoneNumber() {
    var formEl = document.getElementById("form3");
    if (formEl && typeof formEl !== "undefined") {
        var submitButton = formEl.querySelector("button[data-bs-target='#modal002']");
        var phoneNumber = document.getElementById("phoneNumber");
        var tcpa = document.getElementById("tcpa");
        if (submitButton && phoneNumber && tcpa) {
            var phoneNumLen = phoneNumber.value.length;
            if (phoneNumLen < 14 || !tcpa.checked) {
                submitButton.disabled = true;
            } else {
                submitButton.disabled = false;
            }
        }
    }
}

// Call the function to set up the listeners
validateForm("form1");
validateForm("form2");

var phoneNumber = document.getElementById("phoneNumber");
var tcpa = document.getElementById("tcpa");
if (phoneNumber && typeof phoneNumber !== "undefined") {
    phoneNumber.addEventListener("input", function () {
        validatePhoneNumber()
    })
}
if (tcpa && typeof tcpa !== "undefined") {
    tcpa.addEventListener("change", function () {
        validatePhoneNumber()
    })
}

// Apply input masks
$(document).ready(function () {
    $('#form1EX').mask('99999');
});

$(document).ready(function () {
    $('#form2CX').mask('$0,000.00');
});

$(document).ready(function () {
    $('#form2BX').mask('(000) 000-0000');
});

$(document).ready(function () {
    $('#phoneNumber').mask('(000) 000-0000');
});

const codeInputs = Array.from(document.querySelectorAll('.codeInput'));
const codeSubmitButton = document.getElementById('codeSubmitButton');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value !== '') {
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        }

        if (codeInputs.every(input => input.value !== '')) {
            codeSubmitButton.disabled = false;
        } else {
            codeSubmitButton.disabled = true;
        }
    });
});