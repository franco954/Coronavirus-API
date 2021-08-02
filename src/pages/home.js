import React, { useState } from "react";
import Form from "../components/form";
import Info from "../components/info";
import Loading from "../components/loading";
import Error from "../components/error";

// material ui
import Grid from "@material-ui/core/Grid";

// importados llamada a api
import { cases } from "../services/cases";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(false);
  const [form, setForm] = useState(true);
  const [error, setError] = useState(false);

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

  const backForm = () =>{
      setLoading(true)
      setInfo(false)
      setForm(true)
      setLoading(false)
  }

  const getData = async (query) => {
    setForm(true);
    setError(false);
    setInfo(false);
    setLoading(true);
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
        setError(false);
        setInfo(true);
        setForm(false);
      } catch (error) {
        setError(true);
        setInfo(false);
        setForm(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6} spacing={3}>
        {form && <Form data={getData} />}
        {info && <Info {...data} f={backForm} />}
      </Grid>
      <Grid item xs={6} spacing={3}>
        {loading && <Loading />}
        {error && <Error />}
      </Grid>
    </Grid>
  );
}
