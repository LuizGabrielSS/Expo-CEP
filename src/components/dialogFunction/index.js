import React from 'react'
import { AlertDialog ,Button } from "native-base";

export default function DialogFunction({DialogTitulo,DialogTexto,TextoBotao,CloseDialog,Dialog,Pressionado,ComCancelar=true}){

    return(
        <AlertDialog
        isOpen={Dialog}
        onClose={()=>CloseDialog()}
        >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
            <AlertDialog.Header>{DialogTitulo}</AlertDialog.Header>
            <AlertDialog.Body>
            {DialogTexto}
          </AlertDialog.Body>
          <AlertDialog.Footer>
          <Button.Group space={2}>
                {
                    ComCancelar === true
                    ? <Button colorScheme="red" onPress={() => CloseDialog()}>
                        Cancelar
                    </Button>
                    : null
                } 
              <Button variant="outline" colorScheme="emerald" onPress={() => Pressionado()}>
              {TextoBotao}
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    )
}