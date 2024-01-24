import React from "react";
import { Box } from "@mui/system";
import { Spinner } from "common";

export const ListLoading: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        textAlign: "center",
      }}
    >
      <Spinner color="secondary"/>
    </Box>
  );
};
