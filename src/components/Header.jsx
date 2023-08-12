"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import Link from "next/link";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const pages = ["Home", "About", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const appBarStyle = {
    backgroundColor: "rgba(255,255,255,0.9)",

    backdropFilter: "blur(5px)",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 4px 0px",
  };
  const appBarStyle1 = {
    color: "red",
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pathname = "";

  return (
    <AppBar position="sticky" sx={appBarStyle}>
      <Container maxWidth="xl">
        <Stack
          p={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          disableGutters
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "orangered",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Stack display={"flex"} flexDirection={"row"} gap={2}>
            <Link href={"/#home"}>
              <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <HomeIcon style={{ color: "orangered", fontSize: "20px" }} />
                <h6 style={{ color: "orangered" }}>HOME</h6>
              </ListItemIcon>
            </Link>
            <Link href={"/#services"}>
              <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <MiscellaneousServicesIcon
                  style={{ color: "orangered", fontSize: "20px" }}
                />
                <h6 style={{ color: "orangered" }}>SERVICES</h6>
              </ListItemIcon>
            </Link>
            <Link href={"/#home"}>
               <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <MiscellaneousServicesIcon
                  style={{ color: "orangered", fontSize: "20px" }}
                />
                <h6 style={{ color: "orangered" }}>ABOUT</h6>
              </ListItemIcon>
            </Link>
            <Link href={"/#home"}>
            <ListItemIcon sx={{ marginRight: "10px", cursor: "pointer" }}>
                <MiscellaneousServicesIcon
                  style={{ color: "orangered", fontSize: "20px" }}
                />
                <h6 style={{ color: "orangered" }}>Contact us</h6>
              </ListItemIcon>
            </Link>
            
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "orangered" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  sx={appBarStyle1}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "orangered",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Stack flexDirection={"row"} gap={3} alignItems={"center"}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "orangered" }} />
              </IconButton> */}

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PersonIcon style={{ color: "orangered" }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", padding: "30px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}
export default Header;
