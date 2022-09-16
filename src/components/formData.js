const formData = async (e) => {
  e.preventDefault();
  const itemId = e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[9].childNodes[1].id.split('-')[1];
  const comentorName = document.querySelector('#coment-input').value;
  const insights = document.querySelector('#comment-text').value;
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lZ1jpmvfp72iObG11Ico/comments/', {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId, username: comentorName, comment: insights }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.text());
  window.location.reload();
};
export default formData;