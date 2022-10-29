const { response } = require("express");

const newMeetup = async function (event) {
    event.PreventDefault();


    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const location = document.querySelector("#location").value.trim();

    await fetch(`api/meetups`, {
        method: `POST`,
        body: JSON.stringify({
            title,
            location,
            description,
        }),
        headers: { 'Content-Type': 'applicatioin/json' },
    });
    if (response.ok) {
        document.location.assign('/dashboard');
    } else {
        alert(response.statusText);
    };
};
document.querySelector("#newMeetupForm").addEventListener("click", newMeetup);