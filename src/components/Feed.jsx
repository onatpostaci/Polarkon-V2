import React, { useState } from "react";
import { Box, Paper, Typography, Grid, Button, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AnalysisIcon from "../images/aicon.svg";
import CurrencyTable from "./CurrencyTable";

export default function Feed() {
  const [openModalCurrency, setOpenModalCurrency] = useState(false);
  const [openModalElectricity, setOpenModalElectricity] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  return (
    <Box flex={2} p={2}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item
              elevation={0}
              sx={{ minHeight: "200px", display:"flex", flexDirection:"column",alignItems: "center",justifyContent:"center" }}
            >
              <Typography
                variant="h4"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontWeight: "bold",
                }}
              >
                Polarkon Maliyet Analizi Uygulamasına Hoşgeldiniz!
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: { xs: "none", sm: "block" }, marginTop: "2rem" }}
              >
                Doğru maliyet, doğru tahminleme ile sizlere proje analizleri ve
                fiyatlandırması yapmayı amaçlıyoruz.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0} sx={{ textAlign: "center" }}>
              <img
                src={AnalysisIcon}
                alt="icon"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </Item>
          </Grid>
        </Grid>
      </Item>

      <Item elevation={0} sx={{ marginTop: "4rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item
              elevation={3}
              sx={{
                minHeight: "400px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent:"center"
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Döviz Kuru
              </Typography>
              <CurrencyTable />
              <Button variant="contained" sx={{ marginTop: "2rem" }}>
                Güncelle
              </Button>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item
              elevation={3}
              sx={{
                minHeight: "400px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent:"center"
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Elektrik Birim Fiyat
              </Typography>
              <CurrencyTable />
              <Button variant="contained" sx={{ marginTop: "2rem" }}>
                Güncelle
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Box>
  );
}
