import { FC, ReactNode } from "react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import { PhantomWalletAdapter,CoinbaseWalletAdapter,SolletWalletAdapter,TorusWalletAdapter,BitpieWalletAdapter,CloverWalletAdapter } from "@solana/wallet-adapter-wallets"
import { useMemo } from "react"
require("@solana/wallet-adapter-react-ui/styles.css")

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const url = useMemo(() => clusterApiUrl("devnet"), [])
  const phantom = useMemo(()=>new PhantomWalletAdapter(),[]);
  const coinBase= new CoinbaseWalletAdapter();
  const sollet=new SolletWalletAdapter();
  const torus=new TorusWalletAdapter();
  const bitpie=new BitpieWalletAdapter()
  const clover=new CloverWalletAdapter();


  return (
    <ConnectionProvider endpoint={url}>
      <WalletProvider wallets={[phantom,coinBase,sollet,torus,bitpie,clover]} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletContextProvider