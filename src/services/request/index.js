import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

class BobxRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

const bobxRequest = new BobxRequest(BASE_URL, TIME_OUT)

export { bobxRequest }
