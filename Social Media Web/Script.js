// Form Validation Script
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Validate Login Form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Email Validation
        const loginEmail = document.getElementById('login-email');
        const loginEmailError = document.getElementById('login-email-error');
        if (loginEmail.value.trim() === '') {
            loginEmailError.textContent = 'Email is required.';
            loginEmailError.style.display = 'block';
            isValid = false;
        } else {
            loginEmailError.style.display = 'none';
        }

        // Password Validation
        const loginPassword = document.getElementById('login-password');
        const loginPasswordError = document.getElementById('login-password-error');
        if (loginPassword.value.trim() === '') {
            loginPasswordError.textContent = 'Password is required.';
            loginPasswordError.style.display = 'block';
            isValid = false;
        } else {
            loginPasswordError.style.display = 'none';
        }

        if (isValid) {
            alert('Login Successful!');
        }
    });

    // Validate Signup Form
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name Validation
        const signupName = document.getElementById('signup-name');
        const signupNameError = document.getElementById('signup-name-error');
        if (signupName.value.trim() === '') {
            signupNameError.textContent = 'Name is required.';
            signupNameError.style.display = 'block';
            isValid = false;
        } else {
            signupNameError.style.display = 'none';
        }

        // Email Validation
        const signupEmail = document.getElementById('signup-email');
        const signupEmailError = document.getElementById('signup-email-error');
        if (signupEmail.value.trim() === '') {
            signupEmailError.textContent = 'Email is required.';
            signupEmailError.style.display = 'block';
            isValid = false;
        } else {
            signupEmailError.style.display = 'none';
        }

        // Password Validation
        const signupPassword = document.getElementById('signup-password');
        const signupPasswordError = document.getElementById('signup-password-error');
        if (signupPassword.value.trim() === '') {
            signupPasswordError.textContent = 'Password is required.';
            signupPasswordError.style.display = 'block';
            isValid = false;
        } else {
            signupPasswordError.style.display = 'none';
        }

        if (isValid) {
            alert('Signup Successful!');
        }
    });
});