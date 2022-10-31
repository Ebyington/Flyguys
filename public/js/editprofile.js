const postId = document.querySelector('input[name="post-id"]').value;

const editForm = async function(event) {
  event.preventDefault();

  const  username= document.querySelector('input[name="username"]').value;
  const socialmedia = document.querySelector('input[name="socialmedia"]').value;
  

  await fetch(`/api/Profile/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
        username,
        socialmedia,
    
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deletebtn = async function() {
  await fetch(`/api/Profile/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#editprofile')
  .addEventListener('submit', editForm);
document
  .querySelector('#deletebtn')
  .addEventListener('click', deletebtn);
