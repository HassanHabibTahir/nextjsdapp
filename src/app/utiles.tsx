// "use client";
// import React, { useEffect, useState } from "react";
// import { createContext } from "react";
// import { useAccount, useWalletClient, useNetwork } from "wagmi";
// import { stateType } from "../../types/utilesTypes";

// let initialState = {
//   account: null,
//   signer: null,
//   chainId: [],
// };

// interface inerStateType {
//   account: string | null;
//   signer: Object | null;
// }

// export const AppContext = createContext<stateType>(initialState);
// export const ConectivityProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const { address, isDisconnected } = useAccount();
//   const { data: signer } = useWalletClient();

//   const { chains } = useNetwork();
//   const chainId = chains?.map((info) => info?.id);

//   const [state, setState] = useState<inerStateType>(initialState);

//   useEffect(() => {
//     setState({
//       account: address ?? null,
//       signer: signer ?? null,
//     });
//   }, [isDisconnected, address, signer]);
//   return (
//     <AppContext.Provider
//       value={{
//         account: state.account,
//         signer: state.signer,
//         chainId: chainId,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
