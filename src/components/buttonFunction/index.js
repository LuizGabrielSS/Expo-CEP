import React,{useState,useEffect} from 'react'
import { Button,Box,Text,Icon} from 'native-base'
import {AntDesign} from "@expo/vector-icons";

export default function ButtonFunction({Texto,Pressionado,Inverso=false,Icone=false,IconeNome,Desabilitar=false}){

    const[CoresBotao,SetCoresBotao] = useState()

    useEffect(()=>{
        if(Inverso===true){
            SetCoresBotao("outline")   
        }
    },[])

    return(
        <Box
        m={2}
        >
            <Button
            size="lg" 
            borderRadius="20" 
            variant={CoresBotao}
            colorScheme="emerald.700" 
            onPress={() => Pressionado()}
            isDisabled={Desabilitar}
            leftIcon={
                Icone
                ? <Icon 
                as={AntDesign} 
                name={IconeNome} 
                size="sm" 
                />
                : null  
            }
            >
               <Text 
               bold 
               color={
                Inverso
                ? "emerald"
                : "white"
               } >{Texto}</Text>
            </Button>
        </Box>
    )
}