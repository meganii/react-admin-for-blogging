
import './App.css';

import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { PostList, PostEdit } from './posts';
import { UserList } from './users';
// import jsonServerProvider from 'ra-data-json-server';
import contentfulProvider from './contentfulProvider';
// const dataProvider = contentfulProvider;

const App = () => (
  <Admin dataProvider={contentfulProvider}>
    <Resource name="entries" list={ListGuesser} edit={EditGuesser} />
    {/* <Resource name="users" list={UserList} /> */}
  </Admin>
);

export default App;
