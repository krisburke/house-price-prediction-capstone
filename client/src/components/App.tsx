import { Anchor, Card, Container } from '@mantine/core';
import { Form } from './Form';

export const App = () => {
  return (
    <Container mt='sm' mb='xl'>
      <h1>House Price Prediction</h1>
      <Card mb='md'>
        <p>
          Welcome to the house price prediction app! The goal of this app is to
          predict the price of a house based on a number of features. The form
          below has some default values to get you started, but feel free to
          change them to see how the prediction changes. Once you're ready,
          click the "Submit" button to see the prediction! Or, checkout the
          Jupyter notebook that was used to train the model.
        </p>
        <Anchor href='/notebook' target='_blank' rel='noopener noreferrer'>
          Jupyter Notebook
        </Anchor>
      </Card>
      <Form />
    </Container>
  );
};
