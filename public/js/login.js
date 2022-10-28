async function LoginForm(event){event.preventDefault();


const password= document.querySelector('#password-login').value.trim();
const email= document.querySelector('#email-login').value.trim();

if (email && password){
    const response = await fetch('/api/user/login', {method: 'post', body: JSON.stringify({password,email}), headers: {'Content-Type': 'application/json'}});
if (response.ok){document.location.replace('/dashboard')}    
else { alert(response.statusText)}
}};
document.querySelector( '#login-form' ).addEventListener( 'submit', LoginForm );