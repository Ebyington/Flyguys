const { response } = require("express");

const newProfile = async function (profile) {
    profile.PreventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const socialMedia = document.querySelector('#socialMedia').value.trim();

    await fetch('api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            location,
            model,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.assign('/dashboard');
    } else {
        alert(response 500);
    };
};

document.querySelector('#profile').addEventListener('click', newProfile);

