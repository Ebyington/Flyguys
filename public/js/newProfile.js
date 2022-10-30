const newProfile = async function (event) {
    event.preventDefault();

const username = document.querySelector('#username').value.trim();
const socialmedia = document.querySelector('#socialmedia').value.trim();

// fetch not able to stringify data due to items needed for Profile Model
    await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({
            username,
            socialmedia,
        }),
        headers: {
            'Content-Type': 'application/json'},
    });
    document.location.assign('/dashboard');
}

document.getElementById('submitbtn').addEventListener('click', newProfile);

