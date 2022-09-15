const addNewLikes = async (e) => {
  e.preventDefault();
  const itemId = e.currentTarget.parentNode.parentNode.parentNode.childNodes[9].childNodes[1].id.split('-')[1];
  // console.log(itemId);
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lZ1jpmvfp72iObG11Ico/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.text());
  window.location.reload();
};

export default addNewLikes;