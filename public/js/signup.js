async function signup( event ) {
    event.preventDefault();
 
   
    const password = document.querySelector( '#password-signup' ).value.trim();
    const email = document.querySelector( '#email-signup' ).value.trim();
 
    if ( email && password ) {
       const response = await fetch( '/api/user', {
          method: 'POST',
          body: JSON.stringify({ email, password, }),
          headers: { 'Content-Type': 'application/json' }
       });
       if ( response.ok ) {
          // After successfully creating a new account, redirect to the 
          document.location.replace( '/dashboard' );
       }
       else {
          alert( response.statusText );
       };
    };
 };
 
 
 document.querySelector( '#signup-form' ).addEventListener( 'submit', signup );