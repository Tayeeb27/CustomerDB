const btn = document.querySelector('#submit');

const addToDB = (e) => {
    e.preventDefault(); // Prevent the default form submission
        const FirstName = document.querySelector('#FirstName');
        const LastName = document.querySelector('#LastName');
        const Email = document.querySelector('#Email');
        const Password = document.querySelector('#Password');
        const Phone = document.querySelector('#Phone');
        const Address = document.querySelector('#Address');
        const PostalCode = document.querySelector('#PostalCode');
        // Collect form data
        const customerForm = document.querySelector('.customerForm');
        const formDataObject = {FirstName:FirstName.value, LastName:LastName.value, Email:Email.value,Password:Password.value, Phone:Phone.value,Address:Address.value,PostalCode:PostalCode.value};
        console.log(formDataObject)
        // Send data to the server (replace with your server endpoint)
        fetch("http://localhost:5432/customers/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObject),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the server response, e.g., display a success message
                console.log("Data added to the database:", data);
                alert("You have successfully been added to the database")
                // Optionally, clear the form fields
                customerForm.reset();
            })
            .catch((error) => {
                console.error("Error adding data to the database:", error);
                alert("You have not been successfully been added to the database")
            });
}
btn.addEventListener("click",addToDB);



