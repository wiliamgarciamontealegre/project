import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({dataSelect, onSelect}) {
  const classes = useStyles();

  //Estado para almancer el el campo seleccioando
  const [oferta, setOferta] = React.useState('');

  const handleChange = (event) => {
    setOferta(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Ofertas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={oferta}
          onChange={handleChange}
        >
           {dataSelect?.map((item, key) =>{
               return <MenuItem key={key} value={item.id}>{item.label} - {item.id}</MenuItem>
           })} 
          

        </Select>
      </FormControl>
  
    
    </div>
  );
}

SimpleSelect.propTypes = {
  dataSelect: PropTypes.array,
  onSelect: PropTypes.func
}
