 function validateForm() {
            var outcomeField = document.getElementById('outcome');
            if (outcomeField.value.length < 50) {
                alert('Main Outcome must be at least 50 characters.');
                return false;
            }
            return true;
        }

// Handle form submission

 document.getElementById("coachingForm").addEventListener("submit", (event) => {
    event.preventDefault();

const formData = new FormData(event.target);

const formJsonData = {};

//  Get data in array form
formData.forEach((value, key) => {
     formJsonData[key] = value;
});

const headers = new Headers();
headers.append('Content-Type', 'application/json');
console.log(headers);

 fetch('/submit-coaching-form', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(formJsonData),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
        });