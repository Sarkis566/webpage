var cors = require('cors');
function getStudents(){
    fetch('https://session7api.onrender.com')
      .then(response => response.json())
      .then(json => console.log(json))
}

getStudents();