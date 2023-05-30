import React from "react";
import { Box, Button, Typography } from "@mui/material";
export const Button1 = (props: any) => {
  return (
    <Box
      {...props}
      sx={{
        background: "linear-gradient(to right, #c0392b, #8e44ad)",
        p: "3px",
        width: "100%",
      }}
    >
      <Button
        sx={{
          color: "#fff",
          background: "#181818",
          fontSize: { xs: "0.8rem", md: "1.3rem" },
          fontWeight: "600",
          textAlign: "center",
          width: "100%",
          px: 3,
          py: 1,
        }}
      >
        {" "}
        {props.children}{" "}
      </Button>
    </Box>
  );
};
