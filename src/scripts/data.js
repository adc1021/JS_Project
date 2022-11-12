const Champ = () => {
  const srUrl =
    "https://cryptic-beyond-07137.herokuapp.com/http://api.sportradar.us/mma/trial/v2/en/champions.json?api_key=pzkdvmv7t4f6qdsxmfapuv8s";
  fetch(srUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    })
    .then((data) => {
      const weight_classes = data.categories[0].weight_classes;
      const arr = [];
      weight_classes.forEach((fighter) => {
        arr.push(fighter);
        // console.log(fighter);
      });
      return arr;
    })
    .catch((errorResponse) => console.error(errorResponse));
};

export default Champ;


const compProfile = (id) => {
  const profileUrl =
  `https://cryptic-beyond-07137.herokuapp.com/http://api.sportradar.us/mma/trial/v2/en/competitors/sr:competitor:${id}/profile.json?api_key=pzkdvmv7t4f6qdsxmfapuv8s`
  // to make fetch requests to specific champions Fighter profile.
  fetch(profileUrl)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw response
      }
    })
    .then( data => {
      console.log(data.info)
    })
}

compProfile(260623);
