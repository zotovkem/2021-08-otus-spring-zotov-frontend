import React from 'react';
import {Create, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

/**
 * Форма добавления комментария
 */
export const commentCreate = props => (
    <Create {...props} title={<span>Добавить комментария </span>}>
        <SimpleForm>
            <TextInput disabled source="id" label="Ид"/>
            <ReferenceInput label="Книга" source="bookId" reference="books">
                <SelectInput source="name"/>
            </ReferenceInput>
            <TextInput source="content" label="Текст" multiline/>
            <TextInput source="author" label="Автор"/>
        </SimpleForm>
    </Create>
);
