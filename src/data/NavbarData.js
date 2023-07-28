import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

export const navbarData = [
  {
    text: "About",
    id: "about",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "about",
  },
  {
    text: "Programs",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "programs",
  },
  {
    text: "Events",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "events",
  },
];

export const menuOptions = [
  {
    text: "Home",
    id: "home",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "home",
  },
  {
    text: "About",
    id: "about",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "about",
  },
  {
    text: "Testimonials",
    id: "testimonials",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "testimonials",
  },
  {
    text: "Contact",
    id: "contact",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "contact",
  },
  {
    text: "Cart",
    id: "cart",
    spy: true,
    duration: 500,
    smooth: true,
    exact: "true",
    offset: -80,
    to: "cart",
    icon: <ShoppingCartRoundedIcon />,
  },
];
