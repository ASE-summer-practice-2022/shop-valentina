import { Button, Container, CssBaseline, Stack, Typography } from "@mui/material";
import React from "react";

function Product() {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Stack gap={2} mt={20}>
        <Typography align="center" variant="h1">
          Травы.ru
        </Typography>
        <Typography align="center">Стало скучно? Добро пожаловать в нашу аптеку!</Typography>
        <Button href="/login" fullWidth variant="outlined" sx={{ mt: 3 }}>
          Войти
        </Button>
        <Button href="/register" fullWidth variant="outlined">
          Зарегистрироваться
        </Button>
      </Stack>
    </Container>
  );
}

export default Product;
