import { Box, Button, Card, Checkbox, Fade, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";

import { parseDate } from "../../helpers/date";
import { useStore } from "../../hooks";

interface TaskItemProps {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  status: boolean;
}

function ProductCard({ id, name, startDate, endDate, status }: TaskItemProps) {
  const { todoStore } = useStore();
  const [fade, setFade] = useState(false);

  const toggleChb = () => todoStore.toggleCompleted(id);
  const openPopup = () => todoStore.setCurrentId(id);
  const rmTodo = () => fade && todoStore.deleteTodo(id);
  const runRmAnim = () => setFade(true);

  return (
    <Fade in={!fade} timeout={450} onTransitionEnd={rmTodo}>
      <Card>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h1" flex={1} align="center">
            Персен таблетки п/o плен. 40 шт.
          </Typography>
          <Typography flex={1} align="center">
            Валериана (Valeriana)
          </Typography>
          <Button href="/product" variant="contained" onClick={openPopup}>
            Купить
          </Button>
        </Stack>
      </Card>
    </Fade>
  );
}

export default observer(ProductCard);
