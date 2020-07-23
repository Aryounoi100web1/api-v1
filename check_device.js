const axios = require('axios').default

axios.defaults.headers.common['x-auth-license'] = 'xxxxxxx'
axios.defaults.baseURL = 'https://api-v1.banktopup.com'
axios
  .post('/api/v1/scb/check_device', {
    deviceid: 'xxxxx',
  })
  .then(
    (response) => {
      console.log(JSON.stringify(response.data))
    },
    (error) => {
      console.log(JSON.stringify(error.response.data))
    }
  )
