import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartWidged() {
  const { getQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={getQuantity()} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
