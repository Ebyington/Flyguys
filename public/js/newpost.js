
const title = document.querySelector("#title");
let droneModel= document.querySelector("#droneModel").value;
let description= document.querySelector("#description").value;
let tags = document.querySelector("#tags").value;
const submitBtn = document.querySelector("#submitbtn");

const newPost = async (event) => {
    event.PreventDefault();

const reponse =  await fetch(`/api/posts`, {
    method: `POST`,
    body: JSON.stringify({
        droneModel,
        description,
        tags,
    }),
    headers: { 'Content-Type': 'application/json' },
    if response.ok)
    {document.location.replace("/")
    } else {
        alert(response.statusText)
    }
});
}


submitBtn.addEventListener("click", newPost);