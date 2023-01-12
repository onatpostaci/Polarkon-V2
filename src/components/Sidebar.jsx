import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Switch,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";
import BarChartIcon from "@mui/icons-material/BarChart";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Stack } from "@mui/system";

export default function Sidebar() {
  return (
    //background-color = "bgcolor" -- flex={#number} = width -- p = padding
    <Box
      bgcolor={"#777575"}
      color={"#fff"}
      flex={0.4}
      p={2}
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        minHeight: "88.5vh",
        justifyContent: "space-between",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Anasayfa" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Ayarlar" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Dosya Yönetimi" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Maliyet Analizi" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNightIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <CopyrightIcon />
        <Typography>DeltaSoft</Typography>
      </Stack>
    </Box>
  );
}
