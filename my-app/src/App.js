
import './App.css';

import React from 'react';
import { Admin, Resource } from 'react-admin';
import { EntryList, EntryEdit, EntryCreate } from './entries';
import contentfulProvider from './contentfulProvider';

const App = () => (
  <Admin locale="ja-JP" dataProvider={contentfulProvider}>
    <Resource name="entries" list={EntryList} edit={EntryEdit} create={EntryCreate} />
  </Admin>
);

export default App;
