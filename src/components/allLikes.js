const allLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lZ1jpmvfp72iObG11Ico/likes/');
  const json = await response.json();
  json.forEach((element) => {
    const id = `coment-${element.item_id}`;
    const node = document.getElementById(id);
    node.parentElement.parentElement.childNodes[7].childNodes[1].innerHTML = `${element.likes} likes`;
  });
};

export default allLikes;