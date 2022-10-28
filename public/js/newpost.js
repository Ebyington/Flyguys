const newPost = async function(event){
    event.PreventDefault();


const droneModel= document.querySelector("#droneModel").value;
const description= document.querySelector("#description").value;
const tags = document.querySelector("#tags").value;



 await fetch(`/api/posts`, {
    method: `POST`,
    body: JSON.stringify({
        droneModel,
        description,
        tags,
    }),
    headers: { 'Content-Type': 'application/json' },
});
document.location.replace('/dashboard');
}


document
.querySelector('#newPostForm').addEventListener("click", newPost);