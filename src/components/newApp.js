// const appId = 'BVDQ4KJUQMbnNVhecGTj';
// lZ1jpmvfp72iObG11Ico

const newApp = () => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text());
  // .then((json) => console.log(json));
};

export default newApp;