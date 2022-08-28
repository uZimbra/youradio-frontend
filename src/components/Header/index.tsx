import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import React from "react";

import { Container, DateSpan, Logo, Text } from "./styles";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <Container>
      <Logo src="/youradio.png" alt="Logo do youradio" />
      <Text>Escute o melhor, onde você estiver</Text>
      <DateSpan>{currentDate}</DateSpan>
    </Container>
  );
}
