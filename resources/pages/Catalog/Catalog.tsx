import "./Catalog.scss";

import { Logout, ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, CssBaseline, Fab, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ProductCard } from "../../components";
import { useStore } from "../../hooks";
import { Todo } from "../../models";

function Catalog() {
  const navigate = useNavigate();
  const { todoStore, userStore } = useStore();

  const productCards = todoStore.todos.map((product: Todo) => <ProductCard key={product.id} {...product} />);

  const openCart = () => {};
  const logout = async () => {
    await userStore.logout();
    navigate("/", { replace: true });
  };

  return (
    <Box className="app">
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Stack direction="row" py={2}>
            {/* <img src="../../assets/imgs/logo.webp" alt="logo" /> */}
            <Fab color="primary" aria-label="clear-all" sx={{ ml: 3 }} onClick={openCart}>
              <ShoppingCart />
            </Fab>
            <Typography variant="h1" flex={1} align="center">
              Травы.ru
            </Typography>
            <Fab color="primary" aria-label="logout" onClick={logout}>
              <Logout />
            </Fab>
          </Stack>
        </Container>
      </AppBar>

      <Container maxWidth="lg">
        <Stack direction="row" spacing={3} mt={4}>
          {productCards}
        </Stack>
      </Container>
    </Box>
  );
}

export default observer(Catalog);
