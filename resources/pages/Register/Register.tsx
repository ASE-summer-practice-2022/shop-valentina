import { Button, Container, CssBaseline, Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "../../hooks";

function Register() {
  const navigate = useNavigate();
  const { userStore } = useStore();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await userStore.register(form);
    navigate("/catalog", { replace: true });
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Stack component="form" gap={2} mt={20} onSubmit={submit}>
        <Typography align="center" variant="h1">
          Регистрация
        </Typography>
        <TextField required autoFocus label="Имя" name="name" fullWidth />
        <TextField required label="E-mail" type="email" name="email" fullWidth />
        <TextField required label="Пароль" type="password" name="password" fullWidth />
        <Button fullWidth variant="outlined" type="submit" sx={{ mt: 3 }}>
          Зарегистрироваться
        </Button>
      </Stack>
    </Container>
  );
}

export default observer(Register);
