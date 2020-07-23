const axios = require('axios').default

axios.defaults.headers.common['x-auth-license'] = 'xxxxxxx'
axios.defaults.baseURL = 'https://api-v1.banktopup.com'
axios
  .post(
    '/api/v1/scb/register/xxxxxx-2ca5-4a0e-a3ce-53ac0ba7b3b2', //เลขอุปกรที่ได้จากขั้นตอน 1
    {
      otp: '599xxx',
    }
  )
  .then(
    (response) => {
      console.log(JSON.stringify(response.data))
    },
    (error) => {
      console.log(JSON.stringify(error.response.data))
    }
  )
