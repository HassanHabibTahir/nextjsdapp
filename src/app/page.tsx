"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SomeText from "./components/SomeText";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  usePresaleContract,
  useToken,
  voidAccount,
} from "./components/ConnectivityAssets/Hooks";
import { useCallback, useContext, useEffect, useState } from "react";
// import { AppContext } from "./utiles";
import { Button1 } from "./components/SmallComponents/Button1";
import { Button2 } from "./components/SmallComponents/Button2";
import { token } from "./components/ConnectivityAssets/Enviorment";
import TokenAbi from "./components/ConnectivityAssets/TokenAbi.json";
import { ethers } from "ethers";
import { Web3Button, Web3NetworkSwitch, useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { usePublicClient } from "wagmi";

const array = [
  {
    name: "+ 500 TRK",
    value: 5,
  },
  {
    name: "+ 1K TRK",
    value: 1,
  },
  {
    name: "+ 10K TRK",
    value: 10,
  },
  {
    name: "+ 30K TRK",
    value: 30,
  },
  {
    name: "+ 50K TRK",
    value: 50,
  },
  {
    name: "+ 100K TRK",
    value: 100,
  },
];
export default function Home() {
  // const { account, chainId, signer } = useContext(AppContext);
  const { address, isConnecting, isDisconnected } = useAccount();
  const [balance, setBalance] = useState(0);
  console.log("addres", address);
  const pulicSigner = usePublicClient();
  console.log("pulic", pulicSigner);
  // const preSaleToken = usePresaleContract(pulicSigner);
  // const TokenContract = useToken(signer);
  // console.log("contract ", TokenContract);
  const [amount, setAmount] = useState(0);
  // const Balance = useCallback(async () => {
  //   try {
  //     const Balance = await TokenContract.balanceOf(account);
  //     console.log("balance ", Balance);
  //   } catch (error) {
  //     console.log("error ", error);
  //   }
  // }, [TokenContract, account]);
  // useEffect(() => {
  //   try {
  //     if (account && signer !== null) {
  //       console.log("singner", signer);
  //       // @ts-ignore
  //       let contract = new ethers.Contract(token, TokenAbi, signer);
  //       console.log("contract ", contract);
  //     }
  //   } catch (e) {}
  // }, [signer, account]);

  return (
    <>
      {/* <SomeText /> */}
      <Web3Button icon="show" label="Connect Wallet" />
      <br />

      <br />
      <Web3NetworkSwitch />

      <Container
        sx={{
          background:
            " linear-gradient(94deg, rgba(66,66,66,1) 35%, rgba(8,8,8,1) 65%)",
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px 0px",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "4rem" },
                fontWeight: "600",
                letterSpacing: "1.5rem",
                textAlign: "center",
              }}
            >
              DEPOSIT
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "1.4rem" },
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              DEPOSIT MIN 500 TRX MAX 300 TRX FREE
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #c0392b, #8e44ad)",
                p: "3px",
                width: "60%",
              }}
            >
              <Box sx={{ background: "#181818" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "2.5rem" },
                    fontWeight: "600",
                    textAlign: "center",
                    px: 10,
                  }}
                >
                  {amount} TRX
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container rowSpacing={4} spacing={2} px={10}>
          {array.map((item, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button1
                  onClick={() => {
                    setAmount(item.value);
                  }}
                >
                  {item.name}
                </Button1>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0px 20px",
          }}
        >
          <Button1 onClick={() => setAmount(0)}>reset</Button1>
          <Button2>Deposit</Button2>
        </Box>
      </Container>
    </>
  );
}
