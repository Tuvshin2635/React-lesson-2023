import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import Product from "./Product";
import CreatNewUser from "../components/CreatNewUser";
import EditUserList from "../components/EditUserList";
import VideoPlayer from "../components/VideoPlayer";

const drawerWidth = 250;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton to={"/"}>
          <ListItemIcon>
            <HomeIcon
              sx={{
                marginRight: 5,
              }}
            />
            Home
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton to={"/users"}>
          <ListItemIcon>
            <AccountCircleIcon
              sx={{
                marginRight: 5,
              }}
            />
            User
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton to={"/product"}>
          <ListItemIcon>
            <CategoryIcon
              sx={{
                marginRight: 5,
              }}
            />
            Product
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginTop: 2 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="primary">
            ADMIN PANEL
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<VideoPlayer />} />
          <Route path="/users" element={<Users />} />
          <Route path="/product" element={<Product />} />
          <Route path="/creatNewUser" element={<CreatNewUser />} />
          <Route path="/editUserList" element={<EditUserList />} />
        </Routes>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
