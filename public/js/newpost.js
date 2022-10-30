const newPost = async function(event){
    event.preventDefault();


const typeofdrone= document.querySelector("#droneModel").value;
const description= document.querySelector("#description").value;
const tags = document.querySelector("#tags").value;


 await fetch(`/api/posts`, {
    method: `POST`,
    body: JSON.stringify({
        typeofdrone,
        description,
        tags,
    }),
    headers: { 'Content-Type': 'application/json' },
});
document.location.replace('/dashboard');
}


const submit = document.getElementById('submitbtn');

submit.addEventListener("click", newPost);


