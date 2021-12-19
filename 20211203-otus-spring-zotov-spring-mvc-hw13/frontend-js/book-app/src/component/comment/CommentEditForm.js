import React from 'react';
import {Edit, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

/**
 * Форма редактирования комментария
 */
export const commentEdit = props => (
    <Edit {...props} title={<span>Редактирование комментария </span>}>
        <SimpleForm>
            <TextInput disabled source="id" label="Ид"/>
            <ReferenceInput label="Книга" source="bookId" reference="books">
                <SelectInput source="name"/>
            </ReferenceInput>
            <TextInput source="content" label="Текст"   multiline/>
            <TextInput source="author" label="Автор"/>
        </SimpleForm>
    </Edit>
);
