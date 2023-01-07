import { FC,MouseEventHandler,useCallback } from "react";
import { Button,Container,Heading,HStack,Text,VStack } from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';


const Disconnected :FC=() => {
    const modalState=useWalletModal()
    const {wallet,connect} = useWallet()
    const handleClick:MouseEventHandler<HTMLButtonElement>=useCallback(
        (event)=>{
            if(event.defaultPrevented){
                return
            }
            if(!wallet){
                modalState.setVisible(true)
            }
            else{
                connect().catch(()=>{})
            }
        },
        [wallet,connect,modalState]
    )

    return(
        <Container>
            <VStack spacing={20}>
                <Heading color="white" as="h1" size="3x1" noOfLines={2} textAlign="center" background="#009444" padding="3px" borderRadius="35px">
                    Mint your BuildDoor, Earn $BLD LEVEL up
                </Heading>
                <Button
                bgColor="accent"
                color="white" maxW="380px" onClick={handleClick}
                >
                    <HStack>
                        <Text>Become a Buildoor</Text>
                        <DoorSlidingIcon />
                    </HStack>
                </Button>
            </VStack>
        </Container>
    )
}

export default Disconnected