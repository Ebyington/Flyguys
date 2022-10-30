const postId = document.querySelector('input[name="post-id"]').value;

const editForm = async function(event) {
  event.preventDefault();

  const  title= document.querySelector('input[name="title"]').value;
  const location = document.querySelector('input[name="location"]').value;
  const image = document.querySelector('input[name="image"]').value;
  const description= document.querySelector('textarea[name="description"]').value;

  await fetch(`/api/Meetups/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
        title,
        location,
        image,
        description,
        
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deletebtn = async function() {
  await fetch(`/api/Meetups/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#editMeetup')
  .addEventListener('submit', editForm);
document
  .querySelector('#deletebtn')
  .addEventListener('click', deletebtn);
