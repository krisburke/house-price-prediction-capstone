import {
  Box,
  Button,
  Card,
  Group,
  NumberInput,
  Select,
  Slider,
  Text,
} from '@mantine/core';
import styles from './InputForm.module.css';
import {
  BldgTypeOptions,
  BsmtExposureOptions,
  BsmtFinTypeOptions,
  CentralAirOptions,
  ConditionOptions,
  DEFAULT_VALUES,
  ElectricalOptions,
  ExteriorOptions,
  FoundationOptions,
  GarageFinishOptions,
  GarageTypeOptions,
  HeatingOptions,
  HomeFunctionOptions,
  HouseStyleOptions,
  LandContourOptions,
  LandSlopeOptions,
  LotConfigOptions,
  LotShapeOptions,
  MSSubClassOptions,
  MSZoningOptions,
  MassVnrTypeOptions,
  NeighborhoodOptions,
  PavedDriveOptions,
  QualityOptions,
  QualityOrNAOptions,
  RoofMatlOptions,
  RoofStyleOptions,
  StreetOptions,
  UtilitiesOptions,
} from './constants';
import { TransformedValues, useForm } from '@mantine/form';
import { FastApiClient } from '../client';
import { HousePredictionInput } from './types';
import { useState } from 'react';

const client = new FastApiClient();

export const InputForm = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    transformValues: (values) => ({
      ...values,
      MSSubClass: Number(values.MSSubClass),
      OverallQual: 8,
      OverallCond: 5,
    }),
  });

  const getPrediction = async (values: TransformedValues<typeof form>) => {
    handleInitiateFetch();
    try {
      const prediction = await client.getPrediction(
        values as unknown as HousePredictionInput
      );
      handleCompleteFetch(prediction);
    } catch (e) {
      handleError(e as Error);
    }
  };

  // TODO integrate sliders with form
  // TODO total baths validation only half baths

  return (
    <Box maw={340} mx='auto'>
      <form
        className={styles.form}
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          getPrediction(values);
        })}
      >
        <Select
          id='MSSubClass'
          label='MSSubClass'
          data={MSSubClassOptions}
          {...form.getInputProps('MSSubClass')}
        />
        <Select
          id='MSZoning'
          label='MSZoning'
          data={MSZoningOptions}
          {...form.getInputProps('MSZoning')}
        />
        <NumberInput
          id='LotFrontage'
          label='LotFrontage'
          {...form.getInputProps('LotFrontage')}
        />
        <NumberInput
          id='LotArea'
          label='LotArea'
          {...form.getInputProps('LotArea')}
        />
        <Select
          id='Street'
          label='Street'
          data={StreetOptions}
          {...form.getInputProps('Street')}
        />
        <Select
          id='LotShape'
          label='LotShape'
          data={LotShapeOptions}
          {...form.getInputProps('LotShape')}
        />
        <Select
          id='LandContour'
          label='LandContour'
          data={LandContourOptions}
          {...form.getInputProps('LandContour')}
        />
        <Select
          id='Utilities'
          label='Utilities'
          data={UtilitiesOptions}
          {...form.getInputProps('Utilities')}
        />
        <Select
          id='LotConfig'
          label='LotConfig'
          data={LotConfigOptions}
          {...form.getInputProps('LotConfig')}
        />
        <Select
          id='LandSlope'
          label='LandSlope'
          data={LandSlopeOptions}
          {...form.getInputProps('LandSlope')}
        />
        <Select
          id='Neighborhood'
          label='Neighborhood'
          data={NeighborhoodOptions}
          {...form.getInputProps('Neighborhood')}
        />
        <Select
          id='Condition1'
          label='Condition1'
          data={ConditionOptions}
          {...form.getInputProps('Condition1')}
        />
        <Select
          id='Condition2'
          label='Condition2'
          data={ConditionOptions}
          {...form.getInputProps('Condition2')}
        />
        <Select
          id='BldgType'
          label='BldgType'
          data={BldgTypeOptions}
          {...form.getInputProps('BldgType')}
        />
        <Select
          id='HouseStyle'
          label='HouseStyle'
          data={HouseStyleOptions}
          {...form.getInputProps('HouseStyle')}
        />
        <Text component='label'>Overall Quality</Text>
        <Slider
          id='OverallQual'
          label='OverallQual'
          defaultValue={5}
          min={1}
          max={10}
          step={1}
        />
        <Text component='label'>Overall Condition</Text>
        <Slider
          id='OverallCond'
          label='OverallCond'
          defaultValue={5}
          min={1}
          max={10}
          step={1}
        />
        <Select
          id='RoofStyle'
          label='RoofStyle'
          data={RoofStyleOptions}
          {...form.getInputProps('RoofStyle')}
        />
        <Select
          id='RoofMatl'
          label='RoofMatl'
          data={RoofMatlOptions}
          {...form.getInputProps('RoofMatl')}
        />
        <Select
          id='Exterior1st'
          label='Exterior1st'
          data={ExteriorOptions}
          {...form.getInputProps('Exterior1st')}
        />
        <Select
          id='Exterior2nd'
          label='Exterior2nd'
          data={ExteriorOptions}
          {...form.getInputProps('Exterior2nd')}
        />
        <Select
          id='MasVnrType'
          label='MasVnrType'
          data={MassVnrTypeOptions}
          {...form.getInputProps('MasVnrType')}
        />
        <NumberInput
          id='MasVnrArea'
          label='MasVnrArea'
          {...form.getInputProps('MasVnrArea')}
        />
        <Select
          id='ExterQual'
          label='ExterQual'
          data={QualityOptions}
          {...form.getInputProps('ExterQual')}
        />
        <Select
          id='ExterCond'
          label='ExterCond'
          data={QualityOptions}
          {...form.getInputProps('ExterCond')}
        />
        <Select
          id='Foundation'
          label='Foundation'
          data={FoundationOptions}
          {...form.getInputProps('Foundation')}
        />
        <Select
          id='BsmtQual'
          label='BsmtQual'
          data={QualityOrNAOptions}
          {...form.getInputProps('BsmtQual')}
        />
        <Select
          id='BsmtCond'
          label='BsmtCond'
          data={QualityOrNAOptions}
          {...form.getInputProps('BsmtCond')}
        />
        <Select
          id='BsmtExposure'
          label='BsmtExposure'
          data={BsmtExposureOptions}
          {...form.getInputProps('BsmtExposure')}
        />
        <Select
          id='BsmtFinType1'
          label='BsmtFinType1'
          data={BsmtFinTypeOptions}
          {...form.getInputProps('BsmtFinType1')}
        />
        <Select
          id='BsmtFinType2'
          label='BsmtFinType2'
          data={BsmtFinTypeOptions}
          {...form.getInputProps('BsmtFinType2')}
        />
        <NumberInput
          id='BsmtUnfSF'
          label='BsmtUnfSF'
          {...form.getInputProps('BsmtUnfSF')}
        />
        <Select
          id='Heating'
          label='Heating'
          data={HeatingOptions}
          {...form.getInputProps('Heating')}
        />
        <Select
          id='HeatingQC'
          label='HeatingQC'
          data={QualityOptions}
          {...form.getInputProps('HeatingQC')}
        />
        <Select
          id='CentralAir'
          label='CentralAir'
          data={CentralAirOptions}
          {...form.getInputProps('CentralAir')}
        />
        <Select
          id='Electrical'
          label='Electrical'
          data={ElectricalOptions}
          {...form.getInputProps('Electrical')}
        />
        <NumberInput
          id='LowQualFinSF'
          label='LowQualFinSF'
          {...form.getInputProps('LowQualFinSF')}
        />
        <NumberInput
          id='BedroomAbvGr'
          label='BedroomAbvGr'
          {...form.getInputProps('BedroomAbvGr')}
        />
        <NumberInput
          id='KitchenAbvGr'
          label='KitchenAbvGr'
          {...form.getInputProps('KitchenAbvGr')}
        />
        <Select
          id='KitchenQual'
          label='KitchenQual'
          data={QualityOptions}
          {...form.getInputProps('KitchenQual')}
        />
        <NumberInput
          id='TotRmsAbvGrd'
          label='TotRmsAbvGrd'
          {...form.getInputProps('TotRmsAbvGrd')}
        />
        <Select
          id='Function'
          label='Function'
          data={HomeFunctionOptions}
          {...form.getInputProps('Function')}
        />
        <NumberInput
          id='Fireplaces'
          label='Fireplaces'
          {...form.getInputProps('Fireplaces')}
        />
        <Select
          id='FireplaceQu'
          label='FireplaceQu'
          data={QualityOrNAOptions}
          {...form.getInputProps('FireplaceQu')}
        />
        <Select
          id='GarageType'
          label='GarageType'
          data={GarageTypeOptions}
          {...form.getInputProps('GarageType')}
        />
        <Select
          id='GarageFinish'
          label='GarageFinish'
          data={GarageFinishOptions}
          {...form.getInputProps('GarageFinish')}
        />
        <NumberInput
          id='GarageCars'
          label='GarageCars'
          {...form.getInputProps('GarageCars')}
        />
        <Select
          id='GarageQual'
          label='GarageQual'
          data={QualityOrNAOptions}
          {...form.getInputProps('GarageQual')}
        />
        <Select
          id='PavedDrive'
          label='PavedDrive'
          data={PavedDriveOptions}
          {...form.getInputProps('PavedDrive')}
        />
        <NumberInput
          id='PoolArea'
          label='PoolArea'
          {...form.getInputProps('PoolArea')}
        />
        <Select
          id='PoolQC'
          label='PoolQC'
          data={QualityOrNAOptions}
          {...form.getInputProps('PoolQC')}
        />
        <NumberInput
          id='MiscVal'
          label='MiscVal'
          {...form.getInputProps('MiscVal')}
        />
        <NumberInput
          id='YearBuilt'
          label='YearBuilt'
          {...form.getInputProps('YearBuilt')}
        />
        <NumberInput
          id='YearRemodAdd'
          label='YearRemodAdd'
          {...form.getInputProps('YearRemodAdd')}
        />
        <NumberInput
          id='TotalSF'
          label='TotalSF'
          {...form.getInputProps('TotalSF')}
        />
        <NumberInput
          id='TotalArea'
          label='TotalArea'
          {...form.getInputProps('TotalArea')}
        />
        <NumberInput
          id='TotalBaths'
          label='TotalBaths'
          {...form.getInputProps('TotalBaths')}
        />
        <NumberInput
          id='TotalPorchSF'
          label='TotalPorchSF'
          {...form.getInputProps('TotalPorchSF')}
        />
        <Group justify='flex-end' mt='md'>
          <Button type='submit' disabled={isLoading} loading={isLoading}>
            Submit
          </Button>
        </Group>
      </form>
      {isError && (
        <Card c='red' mt={12}>
          <Text>{errorMessage}</Text>
        </Card>
      )}
      <Card mt={12}>
        <Text>Predicted Sale Price: {prediction ?? ''}</Text>
      </Card>
    </Box>
  );
};
