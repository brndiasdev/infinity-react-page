import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import Button from "@mui/material/Button";
import { List } from "@mui/material";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleButtonClick = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };
  const menuOptions = [
    {
      text: "Início",
      icon: <HomeIcon />,
    },
    {
      text: "Sobre Nós",
      icon: <InfoIcon />,
    },
    {
      text: "Depoimentos",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Carrinho",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav className="navbar-nav">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="logo1" />
      </div>
      <div className="navbar-links-container">
        <a href="">Início</a>
        <a href="">Saiba Mais</a>
        <a href="">Crie sua Imagem</a>
        <a href="">Quadros</a>
        <a href="">Fale Conosco</a>
        <a href="">
          <ShoppingCartRoundedIcon className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Peça Já</button>
      </div>
      <div className="navbar-menu-container">
        <ViewHeadlineOutlinedIcon onClick={() => handleButtonClick()} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
          role="tablist"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
