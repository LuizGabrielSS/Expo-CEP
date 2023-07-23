import axios from "axios";

export default function BuscandoCEP(CEP,SetLoading,SetRua,SetBairro,SetCidade,SetPais,SetEstado,SetDialogText,SetOpenDialog){

    const ApiCEP = axios.create({
        baseURL:"https://viacep.com.br/ws/"
      })

    ApiCEP.interceptors.response.use(
        (response) => {
            return response;
          },
          async function (error) {
            SetDialogText("Erro ao tentar encontrar endereco referente ao CEP: "+{CEP})
            SetOpenDialog(true)
            //Dialog avisando erro no cep
            SetLoading(false)
           return error 
          }
    )

    SetLoading(true)

    ApiCEP.get('/'+CEP+'/json/',{body:"body"},{headers:'headers'})
        .then((res)=>{
            try{
            SetRua(res.data.logradouro)
            SetBairro(res.data.bairro)
            SetCidade(res.data.localidade)
            SetEstado(res.data.uf)
            SetPais('BRASIL')
            SetLoading(false)
            }
            catch{
                SetLoading(false)
            }
            SetLoading(false)
          })
          
}