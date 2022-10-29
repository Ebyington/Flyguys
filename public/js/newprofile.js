const newProfile = async (event) => {
    event.PreventDefault();

    const socialmedia = document.querySelector('#social-media').value.trim();

    await fetch(`/api/profile`, {
        method: `POST`,
        body: JSON.stringify({
            socialmedia
        }),
        headers: { 'Content-Type': 'application/json'},
    });
    document.location.replace('/dashboard');
}

document.querySelector('#create-profile-btn').addEventListener("click", newProfile);