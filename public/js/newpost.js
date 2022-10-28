
const title = document.querySelector("#title");
let droneModel= document.querySelector("#droneModel").value;
let description= document.querySelector("#description").value;
let tags = document.querySelector("#tags").value;
const submitBtn = document.querySelector("#submitbtn");

const newPost = async (event) => {
    event.PreventDefault();

await fetch(`/api/posts`, {
    method: `POST`,
    body: JSON.stringify({
        droneModel,
        description,
        tags,
    }),
    headers: { 'Content-Type': 'application/json' }
});
    return //should we return a message that post was submitted
}


submitBtn.addEventListener("click", newPost);