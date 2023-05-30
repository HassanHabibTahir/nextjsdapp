import { Box, Button } from "@mui/material";
import React from "react";

export const Button2 = (props: any) => {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#fff",
          background: "linear-gradient(to right, #c0392b, #8e44ad)",
          fontSize: { xs: "0.8rem", md: "1.3rem" },
          fontWeight: "600",
          textAlign: "center",
          width: "100%",
          px: 3,
          py: 1.5,
        }}
      >
        {" "}
        {props.children}{" "}
      </Button>
    </>
  );
};
