const axios = require('axios')

const url = 'http://127.0.0.1:8000/api/students/2'

axios.get(url).then(response => {
    console.log(response.data)
}).catch(error => {
    console.log(error);
})
