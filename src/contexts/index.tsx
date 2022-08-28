import React, { ReactNode } from "react";

import { PlayerContextProvider } from "./PlayerContext";

type Props = {
  children: ReactNode;
}

export function ContextProvider({ children }: Props) {
  return <PlayerContextProvider>{children}</PlayerContextProvider>;
}
