import React from "react";
import {Datagrid, List, TextField} from "react-admin";
import {Chip} from "@material-ui/core";

/**
 * Компонент списка книг
 */
export const BookList = props => (
    <List {...props} pagination={null} exporter={false}>
        <Datagrid rowClick="edit" title={<span>Книги</span>}>
            <TextField source="id" label="Ид"/>
            <TextField source="name" label="Наименование"/>
            <TextField source="releaseYear" label="Год издания"/>
            <GenreField label="Жанры"/>
            <AuthorsField label="Авторы"/>
        </Datagrid>
    </List>
);

const GenreField = ({record}) => (
    <div>
        {record.genres.map(item => (
            <Chip label={item.name}/>
        ))}
    </div>
)
GenreField.defaultProps = {
    addLabel: true
};
const AuthorsField = ({record}) => (
    <div>
        {record.authors.map(item => (
            <Chip label={item.fio}/>
        ))}
    </div>
)
AuthorsField.defaultProps = {
    addLabel: true
};
