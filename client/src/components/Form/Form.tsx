import { useState } from 'react';
import { Box, Button, Card, Flex, Group, Text } from '@mantine/core';
import { TransformedValues, useForm, yupResolver } from '@mantine/form';
import { DEFAULT_VALUES } from '../../constants';
import { FastApiClient } from '../../client';
import { schema, transformFormValuesForSave } from '../../utils';
import { BasicDetailsFormSection } from './BasicDetailsFormSection';
import { HouseStructureFormSection } from './HouseStructureFormSection';
import { FoundationFormSection } from './FoundationFormSection';
import { ParkingFormSection } from './ParkingFormSection';
import { InteriorFeaturesFormSection } from './InteriorFeaturesFormSection';
import { OutdoorFeaturesFormSection } from './OutdoorFeaturesFormSection';
import { MiscFormSection } from './MiscFormSection';

const client = new FastApiClient();

export const Form = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [overallQualSliderVal, setOverallQualSliderVal] = useState(
    DEFAULT_VALUES.OverallQual
  );
  const [overallCondSliderVal, setOverallCondSliderVal] = useState(
    DEFAULT_VALUES.OverallCond
  );

  const handleInitiateFetch = () => {
    setIsError(false);
    setErrorMessage('');
    setIsLoading(true);
    setPrediction(null);
  };

  const handleCompleteFetch = (prediction: string | null) => {
    setIsLoading(false);
    setPrediction(prediction);
  };

  const handleError = (e: Error) => {
    setIsLoading(false);
    setIsError(true);
    setErrorMessage(e.message);
    setPrediction(null);
  };

  const form = useForm({
    initialValues: DEFAULT_VALUES,
    validate: yupResolver(schema),
    transformValues: (values) => ({
      ...values,
      OverallQual: overallQualSliderVal,
      OverallCond: overallCondSliderVal,
    }),
  });

  const getPrediction = async (values: TransformedValues<typeof form>) => {
    handleInitiateFetch();
    try {
      const prediction = await client.getPrediction(
        transformFormValuesForSave(values)
      );
      handleCompleteFetch(prediction);
    } catch (e) {
      handleError(e as Error);
    }
  };

  return (
    <Box maw={1000}>
      <form onSubmit={form.onSubmit(getPrediction)}>
        <Flex>
          <Flex direction='column'>
            <BasicDetailsFormSection form={form} />
            <HouseStructureFormSection
              form={form}
              overallQualSliderVal={overallQualSliderVal}
              overallCondSliderVal={overallCondSliderVal}
              setOverallQualSliderVal={setOverallQualSliderVal}
              setOverallCondSliderVal={setOverallCondSliderVal}
            />
            <OutdoorFeaturesFormSection form={form} />
          </Flex>
          <Flex direction='column'>
            <InteriorFeaturesFormSection form={form} />
            <FoundationFormSection form={form} />
            <ParkingFormSection form={form} />
            <MiscFormSection form={form} />
          </Flex>
        </Flex>
        <Group justify='flex-end' mt='md'>
          {isLoading && (
            <Text size='md'>
              Crunching the numbers...Your prediction will be ready in a moment!
            </Text>
          )}
          <Button type='submit' disabled={isLoading} loading={isLoading}>
            Submit
          </Button>
        </Group>
      </form>
      {isError && (
        <Box c='red' mt={12}>
          <Text>{errorMessage}</Text>
        </Box>
      )}
      <Card mt={12}>
        <Text size='xl'>Predicted Sale Price: {prediction ?? ''}</Text>
      </Card>
    </Box>
  );
};
