import React from 'react';
import {Create, SimpleForm, TextInput} from 'react-admin';

/**
 * Форма создания жанра
 */
export const genreCreate = props => (
    <Create {...props} title={<span>Создание жанра</span>}>
        <SimpleForm >
            <TextInput disabled source="id" label="Ид"/>
            <TextInput source="name" label="Наименование"/>
        </SimpleForm>
    </Create>
);
