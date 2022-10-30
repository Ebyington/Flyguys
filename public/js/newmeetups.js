const newMeetup = async function (event) {
    event.preventDefault();


    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const location = document.querySelector("#location").value.trim();

    await fetch(`/api/meetups`, {
        method: `POST`,
        body: JSON.stringify({
            title,
            location,
            description,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.assign('/dashboard');
    }

const submit = document.getElementById("submitbtn");

submit.addEventListener("click", newMeetup);