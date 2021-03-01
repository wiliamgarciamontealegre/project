import React, { useState } from "react"

//Core material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

//Components
import Select from "./Components/Select"
import TableInfo from "./Components/Table"

//Info
import { data } from "./Data/ofertas"

//Funcion global
import { getData } from "./loginMain"

//Css
import "./Assets/Css/index.css"

//Field
import { fieldCharacteristics, fieldPrices } from "./Field"

function App() {

  //Estado donde almacenaremos la informacion de la oferta seleccionada
  const [itemSelect, setItemSelect] = useState(null)


  /* Buscamos el item seleccionado por el usuario en el objecto
  @value, (string) id seleccionado
  */
  const getDataSelect = (value) => {
    setItemSelect(data.filter(item => item.id === value)[0]);
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={"titleMain"}>Modulo de ofertas</h1>
        </Grid>

        <Grid item xs={6}>
          <Select
            dataSelect={getData(data)}
            onSelect={getDataSelect}
          />
        </Grid>

        <Grid item xs={6}>

        </Grid>
        {itemSelect &&
          <React.Fragment>
            <Grid item xs={6}>
              <h1 className={"subTitle"}>Characteristics</h1>
              <TableInfo
                fields={fieldCharacteristics}
                infoData={itemSelect?.versions[0].characteristics}
              />
            </Grid>

            <Grid item xs={6}>
              <h1 className={"subTitle"}>Prices</h1>
              <TableInfo
                fields={fieldPrices}
                infoData={itemSelect?.versions[0].productOfferingPrices}
            
              />
            </Grid>
          </React.Fragment>
        }



      </Grid>
    </Container>
  );
}

export default App;
