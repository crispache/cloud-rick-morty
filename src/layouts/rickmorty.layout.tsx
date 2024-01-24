import React from "react";
import { Box, Container, AppBar, Toolbar, useTheme } from "@mui/material";
import RickMortyLogo from "common/assets/rick-morty-logo.png";

interface Props {
  children: React.ReactNode;
}

export const RickMortyLayout: React.FC<Props> = ({ children }) => {
  const { palette } = useTheme();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <img
            src={RickMortyLogo}
            alt="Logo de Rick & Morty"
            height={35}
            width="auto"
            style={{ marginRight: 8, objectFit: 'contain' }}
          />
        </Toolbar>
      </AppBar>
      <main style={{ backgroundColor: palette.primary.main}}>
        <Container>
          <Box sx={{ minHeight: "100vh" }}>{children}</Box>
        </Container>
      </main>
    </>
  );
};
