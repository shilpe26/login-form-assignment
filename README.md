# Invoice Form with Login

This React application replicates a Figma design, featuring a login system and a functional form. It ensures data persistence using localStorage and utilizes Formik for form handling and validation.

## Features

1. Login System
Login Form: Allows users to enter their username and password.
Validation: Form inputs are validated using Formik.
Session Management:
User session is stored in localStorage upon successful login.
Users are redirected to the main application interface after login.
Auto-Login: Automatically redirects users to the main application interface if their session exists in localStorage.

2. Replicated Figma Design
UI accurately replicates the Figma design.
Responsive design ensures compatibility across devices.
3. Functional Form Implementation
Built with Formik for form handling and validation.
Form inputs are validated to maintain data integrity.
4. Data Persistence with LocalStorage
Form data is stored in localStorage upon submission.
Data persists across page reloads and pre-populates when the page is revisited.
Bonus Features (Optional)
Form Validation: Comprehensive validation for all form fields.
Error Handling: Displays user-friendly error messages for invalid inputs.
Dynamic Styling: Applies dynamic styles to indicate input validation status.
Technology Stack

React: For building the user interface.
Formik: For managing forms and validation.
localStorage: For data persistence.

## Installation

### Clone the repository:
git clone https://github.com/your-username/invoice-form-with-login.git  
### Navigate to the project directory:
cd figma-replica  
### Install dependencies:
npm install  
### Start the development server:
npm run dev  
