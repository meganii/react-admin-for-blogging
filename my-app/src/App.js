
import './App.css';

import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { PostList } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
