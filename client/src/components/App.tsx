import { Anchor, Card, Container } from '@mantine/core';
import { Form } from './Form';

export const App = () => {
  return (
    <Container mt='sm' mb='xl'>
      <h1>House Price Prediction</h1>
      <Card mb='md' withBorder>
        <p>
          Welcome to the house price prediction app! The goal of this app is to
          predict a house's price based on several features. The form below has
          some default values to get you started but feel free to change them to
          see how the prediction changes. Once ready, click the "Submit" button
          to see the prediction! Or, check out the Jupyter Notebook to inspect
          the model's development process.
        </p>
        <Anchor href='/notebook' target='_blank' rel='noopener noreferrer'>
          Jupyter Notebook
        </Anchor>
      </Card>
      <Form />
    </Container>
  );
};
