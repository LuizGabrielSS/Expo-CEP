import React,{useState,useEffect} from 'react';
import {Box,Input,Heading,Spinner,FormControl,Button} from 'native-base'

//Componentes gerais
import ContainerFunction from '../../components/container'
import ButtonFunction from '../../components/buttonFunction';
import InputFunction from '../../components/inputfunction'
import DialogFunction from '../../components/dialogFunction'

//Pesquisa pelo CEP
import BuscandoCEP from './request/cep'

//Validacao
import Validar from './validateData'

export default function SearchScreen(){

    const[Rua,SetRua] = useState(null)

    const[Numero,SetNumero] = useState(null)

    const[Bairro,SetBairro] = useState(null)

    const[Cidade,SetCidade] = useState(null)

    const[Estado,SetEstado] = useState(null)

    const[Pais,SetPais] = useState(null)

    const[RespostaRua,SetRespostaRua] = useState(false)

    const[RespostaNumero,SetRespostaNumero] = useState(false)

    const[RespostaBairro,SetRespostaBairro] = useState(false)

    const[RespostaCidade,SetRespostaCidade] = useState(false)

    const[RespostaEstado,SetRespostaEstado] = useState(false)

    const[RespostaPais,SetRespostaPais] = useState(false)

    const[CEP,SetCEP] = useState(null)

    const[Loading,SetLoading] = useState(false)

    //Dialog
    const[OpenDialog,SetOpenDialog] = useState(false)

    const[DialogText,SetDialogText] = useState("")

    const[Habilitar,SetHabilitar] = useState(true)

    useEffect(() => {
        Validar(Rua,Numero,Bairro,Cidade,Estado,Pais,SetRespostaRua,SetRespostaNumero,SetRespostaBairro,SetRespostaCidade,SetRespostaEstado,SetRespostaPais,SetHabilitar)
    },[Rua,Numero,Bairro,Cidade,Estado,Pais])

    return(
        <ContainerFunction>
            <Box>
                <DialogFunction
                CloseDialog={SetOpenDialog(false)}
                Dialog={OpenDialog}
                DialogTexto={DialogText}
                DialogTitulo="Erro ao inserir CEP"
                Pressionado={SetOpenDialog(false)}
                TextoBotao="OK"
                ComCancelar={false}
                />
            {Loading == true
            ? <Box space={2} justifyContent="center">
                <Spinner color="emerald.500" />
                <Heading color="emerald.500" fontSize="md">
                    Carregando ...
                </Heading>
            </Box>
            :<>
                <Box
                    m={2}
                    >
                        <FormControl 
                        >
                            <FormControl.Label>CEP</FormControl.Label>
                            <Input
                            variant="underlined"
                            onChangeText={value=>{SetCEP(value)}}
                            placeholder="Digite o seu CEP"
                            size="2xl"
                            value={CEP}
                            InputRightElement={
                                <Button 
                                colorScheme="emerald"
                                size="xs" 
                                rounded="none" 
                                h="full" 
                                onPress={
                                    () => {
                                        BuscandoCEP(CEP,SetLoading,SetRua,SetBairro,SetCidade,SetPais,SetEstado,SetDialogText,SetOpenDialog)
                                    }
                                }
                                >
                                    Pesquisar CEP
                                </Button>
                            }
                            />
                        </FormControl>
                    </Box>
                <InputFunction
                SetInformacao={SetPais}
                Titulo="País"
                Resposta={RespostaPais}
                Valor={Pais}
                placeholder="Digite o nome do seu país"
                />
                <InputFunction
                SetInformacao={SetEstado}
                Titulo="Estado"
                Resposta={RespostaEstado}
                Valor={Estado}
                placeholder="Digite o nome do seu estado"
                />
                <InputFunction
                SetInformacao={SetCidade}
                Titulo="Estado"
                Resposta={RespostaCidade}
                Valor={Cidade}
                placeholder="Digite o nome da sua cidade"
                />
                <InputFunction
                SetInformacao={SetBairro}
                Titulo="Estado"
                Resposta={RespostaBairro}
                Valor={Bairro}
                placeholder="Digite o nome do seu bairro"
                />
                <InputFunction
                SetInformacao={SetRua}
                Titulo="Estado"
                Resposta={RespostaRua}
                Valor={Rua}
                placeholder="Digite o nome da sua rua"
                />
                <InputFunction
                SetInformacao={SetNumero}
                Titulo="Estado"
                Resposta={RespostaNumero}
                Valor={Numero}
                placeholder="Digite o numero da sua residencia"
                />
                <ButtonFunction
                Pressionado={()=>console.log("Pressionado")}
                Texto="Veja seu endereco"
                Desabilitar={Habilitar}
                />
            </>
            }
            </Box>
        </ContainerFunction>
    )
}