const updateComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lZ1jpmvfp72iObG11Ico/comments?item_id=${itemId}`);
  const json = await response.json();
  document.querySelector('.comment-div').innerHTML = `<h3>Comments(${json.length})</h3>`;
  json.forEach((element) => {
    const commentDetails = document.createElement('div');
    commentDetails.innerHTML = `
      <small>${element.creation_date}</small>
      <small>${element.username}:</small>
      <small>${element.comment}</small>`;
    document.querySelector('.comment-div').appendChild(commentDetails);
  });
};
export default updateComments;