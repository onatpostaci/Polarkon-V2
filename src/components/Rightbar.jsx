import React from "react";
import { Box, Container, Stack } from "@mui/material";

export default function Rightbar() {
  return (
    <Box
      bgcolor={"lightcoral"}
      flex={0.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}
