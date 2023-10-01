const LoginBtn = document.querySelector("#login-btn");

const checkLogin = async () => {
    const Email = document.querySelector('#Email').value;
    const Password = document.querySelector('#Password').value;
    
    try {
        const response = await fetch('http://localhost:5432/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Email, Password }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.message === 'Authentication successful') {
                // Successful login, redirect to another page
                window.location.href = 'search.html';
            } else {
                // Handle login failure (e.g., display an error message)
                console.error('Login failed');
            }
        } else {
            // Handle login failure (e.g., display an error message)
            console.error('Login failed');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

LoginBtn.addEventListener('click', checkLogin);
