

const srUrl = 'https://cryptic-beyond-07137.herokuapp.com/http://api.sportradar.us/mma/trial/v2/en/champions.json?api_key=pzkdvmv7t4f6qdsxmfapuv8s'
const Champ = () => fetch(srUrl)
                  .then(response => {
                    if (response.ok) {
                      return response.json();
                    } else {
                      throw response;
                    }
                  })
                  .then(data => {
                    const weight_classes = data.categories[0].weight_classes;
                    weight_classes.forEach( fighter => {
                      console.log(fighter)
                    })
                  })
                  .catch(errorResponse => console.error(errorResponse));

export default Champ;
