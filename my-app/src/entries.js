import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput, ReferenceField } from 'react-admin';

export const EntryList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="slug" />
            <EditButton />
        </Datagrid>
    </List>
);

const EntryTitle = ({ record }) => {
    return <span>Entry {record ? `"${record.title}"` : ''}</span>;
};

export const EntryEdit = (props) => (
    <Edit title={<EntryTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="slug" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);