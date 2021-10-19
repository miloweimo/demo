import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObj) => {
  const config = { headers: { authorization: token } }

  const response = await axios.post(baseUrl, newObj, config)
  return response.data
}

const update = async (id, newBlog) => {
  const config = { headers: { authorization: token } }

  const res = await axios.put(`${baseUrl}/${id}`, newBlog, config)
  return res.data
}

const remove = async (id) => {
  const config = { headers: { authorization: token } }

  const res = await axios.delete(`${baseUrl}/${id}`, config)
  return res.data
}

export default { getAll, setToken, create, update, remove }
