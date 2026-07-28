"use strict";

// Helper selector function
const $ = selector => document.querySelector(selector);

// DOMContentLoaded Event Handler
document.addEventListener("DOMContentLoaded", () => {
    // Email regex pattern constant
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]{2,4}$/;

    // Move focus to the "Arrival date" text box
    $("#arrival_date").focus();

    // Submit event handler for form validation
    $("#reservation_form").addEventListener("submit", event => {
        let isValid = true;

        // Clear previous error messages
        $("#arrival_date_error").textContent = "";
        $("#nights_error").textContent = "";
        $("#name_error").textContent = "";
        $("#email_error").textContent = "";
        $("#phone_error").textContent = "";

        // Get text box values
        let arrivalDate = $("#arrival_date").value;
        let nights = $("#nights").value;
        let name = $("#name").value;
        let email = $("#email").value;
        let phone = $("#phone").value;

        // Trim all entries and write trimmed values back to controls
        arrivalDate = arrivalDate.trim();
        nights = nights.trim();
        name = name.trim();
        email = email.trim();
        phone = phone.trim();

        $("#arrival_date").value = arrivalDate;
        $("#nights").value = nights;
        $("#name").value = name;
        $("#email").value = email;
        $("#phone").value = phone;

        // Validate Arrival Date
        if (arrivalDate === "") {
            $("#arrival_date_error").textContent = "This field is required.";
            isValid = false;
        }

        // Validate Nights (required & numeric)
        if (nights === "") {
            $("#nights_error").textContent = "This field is required.";
            isValid = false;
        } else if (isNaN(nights)) {
            $("#nights_error").textContent = "Must be numeric.";
            isValid = false;
        }

        // Validate Name
        if (name === "") {
            $("#name_error").textContent = "This field is required.";
            isValid = false;
        }

        // Validate Email (required & pattern match)
        if (email === "") {
            $("#email_error").textContent = "This field is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email_error").textContent = "Must be a valid email address.";
            isValid = false;
        }

        // Validate Phone
        if (phone === "") {
            $("#phone_error").textContent = "This field is required.";
            isValid = false;
        }

        // Cancel form submission if entries are invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
