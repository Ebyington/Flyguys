const newPost = async function(event){
    event.preventDefault();


const  typeOfDrone= document.querySelector('input[name="typeOfDrone"]').value;
const tags = document.querySelector('input[name="tags"]').value;
const description= document.querySelector('textarea[name="description"]').value;



 await fetch(`/api/posts`, {
    method: `POST`,
    body: JSON.stringify({
        typeOfDrone,
        description,
        tags,
    }),
    headers: { 'Content-Type': 'application/json' },
});
document.location.replace('/dashboard');
}


document.querySelector('#newPostForm').addEventListener("submit", newPost);


