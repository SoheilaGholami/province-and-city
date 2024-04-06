import { Autocomplete, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { customPaper } from "../theme/Theme";

function Home() {
  const [citys, setCitys] = useState();
  const [provinces, setProvinces] = useState();
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);
  const [filteredCity, setFilteredCity] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const province = await axios.get(
          "http://rezayari.ir:5050/CityAndProvince/GetProvince",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const city = await axios.get(
          "http://rezayari.ir:5050/CityAndProvince/GetCity",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setProvinces(province.data);
        setCitys(city.data);
        setFilteredCity(city.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Paper sx={customPaper}>
      <Autocomplete
        value={province}
        options={(provinces && provinces) || []}
        getOptionLabel={(option) => option.name}
        sx={{ width: "100% " }}
        renderInput={(params) => <TextField {...params} label="استان ها" />}
        onChange={(event, value) => {
          setProvince(value);
          if (value === null) {
            setCity(null);
            setFilteredCity(citys);
          } else {
            setCity(null);
            setFilteredCity(citys.filter((c) => c.provinceId === value.id));
          }
        }}
      />
      <Autocomplete
        options={(filteredCity && filteredCity) || []}
        getOptionLabel={(option) => option.name}
        value={city}
        sx={{ width: "100%" }}
        getOptionKey={(o) => o.id}
        renderInput={(params) => <TextField {...params} label="شهر ها" />}
        onChange={(event, value) => {
          setCity(value);
          if (value === null) {
            setProvince(null);
          } else {
            setProvince(provinces.find((p) => p.id === value.provinceId));
          }
        }}
      />
    </Paper>
  );
}

export default Home;
