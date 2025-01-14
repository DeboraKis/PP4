/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography"

function Navigation({
  isOpen = false,
  handleDrawerToggle = () =>
    console.error("no handleDrawerToggle function provided"),
  drawerWidth = 240,
}) {
  console.log('nav', isOpen, drawerWidth);
  return (
    <Box component="nav">
    {isOpen ? 'open' : 'closed'}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography component="span" variant="h6" sx={{ my: 2 }}>
            CarsApp
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton
                sx={{ textAlign: "left" }}
                component={NavLink}
                to="/"
              >
                <ListItemText primary={"List Cars"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ textAlign: "left" }}
                component={NavLink}
                to="/add"
              >
                <ListItemText primary={"Add Car"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;