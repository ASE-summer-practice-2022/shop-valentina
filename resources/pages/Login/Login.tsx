import { Button, Container, CssBaseline, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "../../hooks";

function Login() {
  const navigate = useNavigate();
  const { userStore, todoStore } = useStore();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await userStore.login(form);
    await todoStore.getTodos();
    navigate("/catalog", { replace: true });
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Stack component="form" gap={2} mt={20} onSubmit={submit}>
        <Typography align="center" variant="h1">
          Вход
        </Typography>
        <TextField required autoFocus label="E-mail" type="email" name="email" fullWidth />
        <TextField required label="Пароль" type="password" name="password" fullWidth />
        <Button fullWidth variant="outlined" type="submit" sx={{ mt: 3 }}>
          Войти
        </Button>
      </Stack>
    </Container>
  );
}

export default observer(Login);
