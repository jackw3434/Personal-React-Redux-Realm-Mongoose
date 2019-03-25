const axios = require('axios')

const axiosGetCharacter = () => {
    axios.get('http://localhost:8080/api/characters')
        .then((response) => {
            console.log(response.data);
          this.setState({
            characters: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed       
        })
    
  }
  export default axiosGetCharacter;


