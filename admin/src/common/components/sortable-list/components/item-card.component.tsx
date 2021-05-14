import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import * as classes from './item-card.styles';

interface ItemCardComponentProps {
  id?: string;
  value?: string;
  visible?: boolean;
  edit: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  onSave?: (value: string, id?: string) => void;
  onCancel?: () => void;
  onChangeVisibility?: (id: string) => void;
}

export const ItemCardComponent: React.FunctionComponent<ItemCardComponentProps> = (props) => {
  const minValueLength = 4;
  const {
    id,
    value,
    visible,
    edit,
    onDelete,
    onEdit,
    onSave,
    onCancel,
    onChangeVisibility,
  } = props;
  const [itemValue, setItemValue] = React.useState<string>(value);
  const [disableSave, setDisableSave] = React.useState<boolean>(false);
  const handleClickEdit = () => (!!onEdit ? onEdit(id) : {});
  const handleClickDelete = () => (onDelete ? onDelete(id) : {});
  const handleClickSave = () => {
    onSave(itemValue.trim(), id);
    setItemValue(itemValue.trim());
  };
  const handleClickCancel = () => {
    setItemValue(value.trim());
    onCancel();
  };
  const handleValueChange = (e) => {
    const newItemName = e.target.value;
    if (newItemName.trim().length === 0 || newItemName.length < minValueLength)
      setDisableSave(true);
    else if (newItemName.length >= minValueLength) setDisableSave(false);
    setItemValue(newItemName);
  };
  const handleChangeVisibility = () => onChangeVisibility(id);

  return (
    <Card className={classes.container}>
      <CardContent className={classes.card}>
        {edit ? (
          <TextField
            name='itemValue'
            value={itemValue}
            onChange={handleValueChange}
            className={classes.input}
          />
        ) : (
          <Typography>{value ?? ''}</Typography>
        )}
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        {edit ? (
          <IconButton aria-label='Cancelar' onClick={handleClickCancel}>
            <ClearIcon />
          </IconButton>
        ) : (
          <IconButton aria-label={`Editar ${value}`} onClick={handleClickEdit}>
            <EditIcon />
          </IconButton>
        )}
        {visible !== undefined && !edit && (
          <IconButton
            aria-label={`Hacer ${visible ? 'invisible' : 'visible'} ${value}`}
            onClick={handleChangeVisibility}>
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        )}
        {edit ? (
          <IconButton aria-label='Guardar' onClick={handleClickSave} disabled={disableSave}>
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton aria-label={`Borrar ${value}`} onClick={handleClickDelete}>
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
