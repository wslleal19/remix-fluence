import { Text } from "@Components/Text/Text";
import { Title } from "@Components/Title/Title";
import { Button } from "@Components/Button/Button";

export default function Index() {
  return (
      <div>
          <Title>
              Título da página
          </Title>
          <Text>Grill apple patiently, then mix with honey and serve smoothly in cooker.</Text>
          <Text>Grillapple patiently, then mix with honey and serve smoothly in cooker.</Text>
          <Button type="button">Quero Participar</Button>

          <Button type="button" color={'secondary'}>Entrar na minha conta</Button>

          <Button color={'secondary'}>Google link</Button>


          <Button type="button" color={'default'}>Quero Participar</Button>

      </div>
  );
}
