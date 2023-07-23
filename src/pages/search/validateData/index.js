import React from 'react'

export default function Validar(Rua,Numero,Bairro,Cidade,Estado,Pais,SetRespostaRua,SetRespostaNumero,SetRespostaBairro,SetRespostaCidade,SetRespostaEstado,SetRespostaPais,SetHabilitar){

    if(Rua != null){
        if(Rua.length < 0){
            SetRespostaRua(true)
            SetHabilitar(true)
        }else{
            SetRespostaRua(false)
        }
    }
    if(Numero != null){
        if(Numero.length < 0){
            SetRespostaNumero(true)
            SetHabilitar(true)
        }else{
            SetRespostaNumero(false)
        }
    }
    if(Bairro != null){
        if(Bairro.length < 0){
            SetRespostaBairro(true)
            SetHabilitar(true)
        }else{
            SetRespostaBairro(false)
        }
    }
    if(Cidade != null){
        if(Cidade.length < 0){
            SetRespostaCidade(true)
            SetHabilitar(true)
        }else{
            SetRespostaCidade(false)
        }
    }
    if(Estado != null){
        if(Estado.length < 0){
            SetRespostaEstado(true)
            SetHabilitar(true)
        }else{
            SetRespostaEstado(false)
        }
    }
    if(Pais != null){
        if(Pais.length < 0){
            SetRespostaPais(true)
            SetHabilitar(true)
        }else{
            SetRespostaPais(false)
        }
    }

    if(Pais != null && Rua != null && Numero != null && Bairro != null && Cidade != null && Estado != null){
        if(Pais.length > 0 && Rua.length > 0 && Numero.length > 0 && Bairro.length > 0 && Cidade.length > 0 && Estado.length > 0){
            SetHabilitar(false)
        }else{
            SetHabilitar(true)
        }
    }else{
        SetHabilitar(true)
    }
    

}