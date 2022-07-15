import { Button, Container, CssBaseline, Stack, Typography } from "@mui/material";
import React from "react";

function PageNotFound() {
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Stack alignItems="center" mt={20}>
        <Typography variant="h1">
          Страница не найдена (404)
        </Typography>
        <Typography>Нам не удалось найти запрошенной страницы =&#40;</Typography>
        <Button href="/catalog" variant="outlined" sx={{ mt: 3 }}>
          Вернуться на главную
        </Button>
      </Stack>
    </Container>
  );
}

export default PageNotFound;
