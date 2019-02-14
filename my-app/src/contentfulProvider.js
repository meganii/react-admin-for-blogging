import { stringify } from 'query-string'
import * as contentful from 'contentful-management'
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
const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master`

const client = contentful.createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_CONTENT_MANAGEMENT_API_KEY
})

export default　async (type, resource, params) => {
  switch (type) {
    case GET_LIST: {
      const res = await fetch(`${apiUrl}/${resource}?access_token=${accessToken}`)
      const response = await res.json()
      const data = await response.items.map(item => {
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
    }
    case GET_ONE: {
      const res = await fetch(`${apiUrl}/${resource}/${params.id}?access_token=${accessToken}`)
      const response = await res.json()
      return {
        data: {
          id: response.sys.id,
          title: response.fields.title,
          slug: response.fields.slug,
          body: response.fields.body         
        }
      }
    }
    case UPDATE: {
      const space = await client.getSpace(spaceId)
      const environment = await space.getEnvironment('master')
      let entry = await environment.getEntry(params.id)
      entry.fields.title = {'ja-JP': params.data.title}
      entry.fields.slug = {'ja-JP': params.data.slug}
      entry.fields.body = {'ja-JP': params.data.body}
      const updatedEntry = await entry.update()
      const publishedEntry = await updatedEntry.publish()
      return {
        id: publishedEntry.id,
        data: {
          id: publishedEntry.fields.id,
          title: publishedEntry.fields.title,
          slug: publishedEntry.fields.slug,
          body: publishedEntry.fields.body
        },
        previousData: {
          id: entry.id,
          data: {
            id: entry.fields.id,
            title: entry.fields.title,
            slug: entry.fields.slug,
            body: entry.fields.body
          }
        }
      }
    }
    default: {
      return {data: []}
    }
  }
}