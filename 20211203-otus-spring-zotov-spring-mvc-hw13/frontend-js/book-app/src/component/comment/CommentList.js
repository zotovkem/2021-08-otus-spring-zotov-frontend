import React from "react";
import {Datagrid, List, TextField} from "react-admin";
import {Chip} from "@material-ui/core";

/**
 * Компонент списка комментариев
 */
export const CommentList = props => (
    <List {...props} pagination={null} exporter={false}>
        <Datagrid rowClick="edit" title={<span>Комментарии</span>}>
            <TextField source="id" label="Ид"/>
            <TextField source="content" label="Текст комментария"/>
            <TextField source="author" label="Автор"/>
        </Datagrid>
    </List>
);
