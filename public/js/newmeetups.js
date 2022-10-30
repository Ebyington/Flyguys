const newMeetup = async function (event) {
    event.preventDefault();


    const title = document.querySelector('input[name="title"]').value;
    const description = document.querySelector('textarea[name="description"]').value;
    const location = document.querySelector('input[name="location"]').value;
    const image = document.querySelector('input[name="image"]').value;

    await fetch(`/api/Meetups`, {
        method: `POST`,
        body: JSON.stringify({
            title,
            description,
            location,
            image,
    
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.assign('/dashboard');
    }

    document.querySelector('#newMeetupForm').addEventListener("submit", newMeetup);