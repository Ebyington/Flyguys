
const title = document.querySelector("#title");
let droneModel= document.querySelector("#droneModel");
let description= document.querySelector("#description");
let tags = document.querySelector("#tags");
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
    headers: { }
})

}


submitBtn.addEventListener("click", newPost);