
import axios from '@/utils/axios'
import qs from 'qs'

export function login (username, password) {
  const data = {
    username,
    password
  }
  return axios({
    url: `/sys/login`,
    method: 'post',
    data: qs.stringify(data)
  })
}
