import { Text } from "@Components/Text/Text";
import { Title } from "@Components/Title/Title";
import { Button } from "@Components/Button/Button";
import { Modal } from "@Components/Modal/Modal";
import { Accordion } from "@Components/Accordion/Accordion";
import { TextField } from "@Components/TextField/TextField";
import {useState} from "react";

const items = [
    {title: 'Accordion 1', description: 'Accordion Lorem ipsum dolor sit amet, consectetur adipiscing'},
    {title: 'Accordion 2', description: 'Accordion Lorem ipsum dolor sit amet, consectetur adipiscing'},
]

export default function Index() {
    let [isOpen, setIsOpen] = useState(false);

   return (
      <div className={"p-4"}>
          <Title>
              Título da página
          </Title>
          <Text>Grill apple patiently, then mix with honey and serve smoothly in cooker.</Text>
          <Text>Grillapple patiently, then mix with honey and serve smoothly in cooker.</Text>
          <Button type="button">Quero Participar</Button>

          <Button type="button" color={'secondary'}>Entrar na minha conta</Button>

          <Button color={'secondary'} onClick={() => setIsOpen(true)}>Visualizar modal</Button>

          <Modal title={'Criar uma conta'}
                 show={isOpen}
                 backdropClick={() => setIsOpen(false)}
                 content={
                      <>
                          <Text>Grillapple patiently, then mix with honey and serve smoothly in cooker.</Text>
                          <Text>Grill apple patiently, then mix with honey and serve smoothly in cooker.</Text>
                      </>
                 }
                 actionButtons={
                     <>
                         <Button>Criar conta</Button>
                         <Button color="error" onClick={() => setIsOpen(false)}>Cancelar</Button>
                     </>
                 }
             />

          <br/>

          <div className={'mt-4'}></div>
          <Accordion items={items} />

          <br/>

          <TextField outline placeholder={"Informe o usuário"} label={'Nome de usuário'} />
<br/>
          <TextField placeholder={"Informe sua senha"} label={'Senha'} />
      </div>
  );
}
