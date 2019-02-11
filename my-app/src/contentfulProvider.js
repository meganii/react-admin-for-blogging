import { stringify } from 'query-string'
import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from 'react-admin'

const accessToken = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN
const spaceId = process.env.
const apiUrl = 'https://cdn.contentful.com/spaces/ajhr53gav30e/environments/master'

export default (type, resource, params) => {
  let url = ''
  switch (type) {
    case GET_LIST: {
      url = `${apiUrl}/${resource}?access_token=${accessToken}`;
      break;
    }
  }

  return fetch(url)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      const data = response.items.map(item => {
        return {
          id: item.sys.id,
          title: item.fields.title,
          slug: item.fields.slug
        }
      })
      return {
        data: data,
        total: response.total
      }
  })
}