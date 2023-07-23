import React,{useState,useEffect} from 'react'
import {FormControl,Input,Button,Icon, WarningOutlineIcon, Box} from 'native-base'

export default function InputFunction({SetInformacao,Titulo,Seguranca=false,Resposta,Desabilitar=false,Valor="",placeholder}){

    const [show, setShow] = useState(false);

    const[PassWord,SetPassWord] = useState(false)

    const handleClick = () => setShow(!show);

    useEffect(()=>{
        if(Seguranca){
            SetPassWord(true)
        }
    },[])

    const Definindo = () => {
        if(Seguranca){
            if(show){
                return "text"
            }else{
                return "password"
            }
        }else{
            return "text"
        }
    }

    const Icone = () => {
        if(show){
            return "eye-closed"
        }else{
            return "eye"
        }
    }

    return(
        <Box
        m={2}
        >
        <FormControl 
        isInvalid={Resposta}
        >
           <FormControl.Label>{Titulo}</FormControl.Label>
        <Input
        variant="underlined"
        onChangeText={value=>{SetInformacao(value)}}
        placeholder={placeholder}
        type={Definindo()}
        isReadOnly={Desabilitar}
        value={Valor}
        size="2xl"
        InputRightElement={
        PassWord
        ? <Button 
            colorScheme="emerald"
            size="xs" 
            rounded="none" 
            h="full" 
            endIcon={<Icon as={Octicons} name={Icone()}/>}
            onPress={handleClick}>
                {show ? "Esconder" : "Mostrar"}
            </Button>
        : null
        }
        />
           {
            Resposta
            ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Há um erro neste campo
            </FormControl.ErrorMessage>
            : null
        }
           </FormControl>
        </Box>
    )
}