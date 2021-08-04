import React, { useContext, useState } from "react";
import Form from "../components/form";
import Info from "../components/info";
import Loading from "../components/loading";
import Error from "../components/error";

// context api
import CoronavirusContext from "../Context/CoronavirusContext";

// material ui
import Grid from "@material-ui/core/Grid";

// importados llamada a api
import { cases } from "../services/cases";

export default function Home() {

  const context = useContext(CoronavirusContext)

  const [data, setData] = useState({
    confirmados: 0,
    recuperados: 0,
    muertes: 0,
    capital: "",
    pais: "",
    locacion: "",
    poblacion: "",
    experanzaVida: 0,
  });
  console.log(data);

  const getData = async (query) => {
    context.setFormF(true);
    context.setErrorF(false);
    context.setInfoF(false);
    context.setLoadingF(true);
    try {
      const response = await cases(query);
      console.log(response);
      try {
        setData({
          confirmados: response.data.All.confirmed,
          recuperados: response.data.All.recovered,
          muertes: response.data.All.deaths,
          capital: response.data.All.capital_city,
          pais: response.data.All.country,
          locacion: response.data.All.location,
          poblacion: response.data.All.population,
          experanzaVida: response.data.All.life_expectancy,
        });
        context.setErrorF(false);
        context.setInfoF(true);
        context.setFormF(false);
      } catch (error) {
        context.setErrorF(true);
        context.setInfoF(false);
        context.setFormF(true);
      }
      context.setLoadingF(false);
    } catch (error) {
      context.setLoadingF(false);
      console.error(error);
    }
  };

  return (

    <CoronavirusContext.Consumer>
      { context =>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            {context.form && <Form data={getData} />}
            {context.info && <Info {...data} />}
          </Grid>
          <Grid item>
            {context.loading && <Loading />}
            {context.error && <Error />}
          </Grid>
        </Grid>

      }
    </CoronavirusContext.Consumer>
  
  );

}
