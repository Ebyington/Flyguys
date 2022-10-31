const postId = document.querySelector('input[name="post-id"]').value;

const editForm = async function(event) {
  event.preventDefault();

  const typeOfDrone= document.querySelector('input[name="typeOfDrone"]').value;
  const tags = document.querySelector('input[name="tags"]').value;
  const  image= document.querySelector('input[name="image"]').value;
  const videoLink = document.querySelector('input[name="videoLink"]').value;
  const description= document.querySelector('textarea[name="description"]').value;

  await fetch(`/api/Posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
        typeOfDrone,
        image,
        videoLink,
        description,
        tags,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deletebtn = async function() {
  await fetch(`/api/Posts/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#editpost')
  .addEventListener('submit', editForm);
document
  .querySelector('#deletebtn')
  .addEventListener('click', deletebtn);
