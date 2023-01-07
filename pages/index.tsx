import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import{Box,Center,Spacer,Stack} from "@chakra-ui/react"
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Disconnected from '../components/Disconnected'
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"
const inter = Inter({ subsets: ['latin'] })

const Home:NextPage=()=>{
const {connected} =useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Nft Mine Builder</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected?"":"url(background.png)"}// change the background
        backgroundPosition="center" backgroundRepeat="no-repeat"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					{ /* NavBar */ }
          <Navbar/>

          <Spacer />
          <Center>
            {connected? <Connected/>:<Disconnected/>}
            {/* <Disconnected/> */}
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with help of@_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
      
  )
 }

 export default Home;