
import './App.css';

import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { PostList, PostEdit } from './posts';
import { UserList } from './users';
// import jsonServerProvider from 'ra-data-json-server';
import contentfulProvider from './contentfulProvider';
// const dataProvider = contentfulProvider;

const App = () => (
  <Admin dataProvider={contentfulProvider}>
    <Resource name="entries" list={ListGuesser}/>
    {/* <Resource name="users" list={UserList} /> */}
  </Admin>
);

export default App;
