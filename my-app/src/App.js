
import './App.css';

import React from 'react';
import { Admin, Resource } from 'react-admin';
import { EntryList, EntryEdit } from './entries';
import contentfulProvider from './contentfulProvider';

const App = () => (
  <Admin dataProvider={contentfulProvider}>
    <Resource name="entries" list={EntryList} edit={EntryEdit} />
  </Admin>
);

export default App;
