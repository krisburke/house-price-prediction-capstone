import { useState } from 'react';
import { Box, Button, Card, Group, Slider, Text } from '@mantine/core';
import { TransformedValues, useForm, yupResolver } from '@mantine/form';
import styles from './Form.module.css';
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
  FunctionalOptions,
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
} from '../../constants';
import { FastApiClient } from '../../client';
import { schema, transformFormValuesForSave } from '../../utils';
import { NumericalQualityScale } from '../../types';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';

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
          description='Identifies the type of dwelling involved in the sale.'
          options={MSSubClassOptions}
          form={form}
        />
        <Select
          id='MSZoning'
          label='MSZoning'
          description='Identifies the general zoning classification of the sale.'
          options={MSZoningOptions}
          form={form}
        />
        <NumberInput
          id='LotFrontage'
          label='LotFrontage'
          description='Linear feet of street connected to property'
          form={form}
        />
        <NumberInput
          id='LotArea'
          description='Lot size in square feet'
          label='LotArea'
          form={form}
        />
        <Select
          id='Street'
          label='Street'
          description='Type of road access to property'
          options={StreetOptions}
          form={form}
        />
        <Select
          id='LotShape'
          label='LotShape'
          description='General shape of property'
          options={LotShapeOptions}
          form={form}
        />
        <Select
          id='LandContour'
          label='LandContour'
          description='Flatness of the property'
          options={LandContourOptions}
          form={form}
        />
        <Select
          id='Utilities'
          label='Utilities'
          description='Type of utilities available'
          options={UtilitiesOptions}
          form={form}
        />
        <Select
          id='LotConfig'
          label='LotConfig'
          description='Lot configuration'
          options={LotConfigOptions}
          form={form}
        />
        <Select
          id='LandSlope'
          label='LandSlope'
          description='Slope of property'
          options={LandSlopeOptions}
          form={form}
        />
        <Select
          id='Neighborhood'
          label='Neighborhood'
          description='Physical locations within Ames city limits'
          options={NeighborhoodOptions}
          form={form}
        />
        <Select
          id='Condition1'
          label='Condition1'
          description='Proximity to various conditions'
          options={ConditionOptions}
          form={form}
        />

        <Select
          id='Condition2'
          label='Condition2'
          description='Proximity to various conditions (if there is more than one present)'
          options={ConditionOptions}
          form={form}
        />
        <Select
          id='BldgType'
          label='BldgType'
          description='Type of dwelling'
          options={BldgTypeOptions}
          form={form}
        />
        <Select
          id='HouseStyle'
          label='HouseStyle'
          description='Style of dwelling'
          options={HouseStyleOptions}
          form={form}
        />
        <Text component='label' size='sm'>
          Overall Quality
        </Text>
        <Text size='xs'>
          Rates the overall material and finish of the house
        </Text>
        <Slider
          id='OverallQual'
          label={overallQualSliderVal}
          value={overallQualSliderVal}
          onChange={(num: number) =>
            setOverallQualSliderVal(num as NumericalQualityScale)
          }
          min={1}
          max={10}
          step={1}
        />
        <Text component='label' size='sm'>
          Overall Condition
        </Text>
        <Text size='xs'>Rates the overall condition of the house</Text>
        <Slider
          id='OverallCond'
          label={overallCondSliderVal}
          value={overallCondSliderVal}
          onChange={(num: number) =>
            setOverallCondSliderVal(num as NumericalQualityScale)
          }
          min={1}
          max={10}
          step={1}
        />
        <Select
          id='RoofStyle'
          label='RoofStyle'
          description='Type of roof'
          options={RoofStyleOptions}
          form={form}
        />
        <Select
          id='RoofMatl'
          label='RoofMatl'
          description='Roof material'
          options={RoofMatlOptions}
          form={form}
        />
        <Select
          id='Exterior1st'
          label='Exterior1st'
          description='Exterior covering on house'
          options={ExteriorOptions}
          form={form}
        />
        <Select
          id='Exterior2nd'
          label='Exterior2nd'
          description='Exterior covering on house (if more than one material)'
          options={ExteriorOptions}
          form={form}
        />
        <Select
          id='MasVnrType'
          label='MasVnrType'
          description='Masonry veneer type'
          options={MassVnrTypeOptions}
          form={form}
        />
        <NumberInput
          id='MasVnrArea'
          label='MasVnrArea'
          description='Masonry veneer area in square feet'
          form={form}
        />
        <Select
          id='ExterQual'
          description='Evaluates the quality of the material on the exterior'
          label='ExterQual'
          options={QualityOptions}
          form={form}
        />
        <Select
          id='ExterCond'
          description='Evaluates the present condition of the material on the exterior'
          label='ExterCond'
          options={QualityOptions}
          form={form}
        />
        <Select
          id='Foundation'
          label='Foundation'
          description='Type of foundation'
          options={FoundationOptions}
          form={form}
        />
        <Select
          id='BsmtQual'
          label='BsmtQual'
          description='Evaluates the height of the basement'
          options={QualityOrNAOptions}
          form={form}
        />
        <Select
          id='BsmtCond'
          label='BsmtCond'
          description='Evaluates the general condition of the basement'
          options={QualityOrNAOptions}
          form={form}
        />
        <Select
          id='BsmtExposure'
          label='BsmtExposure'
          description='Refers to walkout or garden level walls'
          options={BsmtExposureOptions}
          form={form}
        />
        <Select
          id='BsmtFinType1'
          label='BsmtFinType1'
          description='Rating of basement finished area'
          options={BsmtFinTypeOptions}
          form={form}
        />
        <Select
          id='BsmtFinType2'
          label='BsmtFinType2'
          description='Rating of basement finished area (if multiple types)'
          options={BsmtFinTypeOptions}
          form={form}
        />
        <NumberInput
          id='BsmtUnfSF'
          label='BsmtUnfSF'
          description='Unfinished square feet of basement area'
          form={form}
        />
        <Select
          id='Heating'
          label='Heating'
          description='Type of heating'
          options={HeatingOptions}
          form={form}
        />
        <Select
          id='HeatingQC'
          label='HeatingQC'
          description='Heating quality and condition'
          options={QualityOptions}
          form={form}
        />
        <Select
          id='CentralAir'
          label='CentralAir'
          description='Central air conditioning'
          options={CentralAirOptions}
          form={form}
        />
        <Select
          id='Electrical'
          label='Electrical'
          description='Electrical system'
          options={ElectricalOptions}
          form={form}
        />
        <NumberInput
          id='LowQualFinSF'
          label='LowQualFinSF'
          description='Low quality finished square feet (all floors)'
          form={form}
        />
        <NumberInput
          id='BedroomAbvGr'
          label='BedroomAbvGr'
          description='Bedrooms above grade (does NOT include basement bedrooms)'
          form={form}
        />
        <NumberInput
          id='KitchenAbvGr'
          label='KitchenAbvGr'
          description='Kitchens above grade'
          form={form}
        />
        <Select
          id='KitchenQual'
          label='KitchenQual'
          description='Kitchen quality'
          options={QualityOptions}
          form={form}
        />
        <NumberInput
          id='TotRmsAbvGrd'
          label='TotRmsAbvGrd'
          description='Total rooms above grade (does not include bathrooms)'
          form={form}
        />
        <Select
          id='Functional'
          label='Functional'
          description='Home functionality (Assume typical unless deductions are warranted)'
          options={FunctionalOptions}
          form={form}
        />
        <NumberInput
          id='Fireplaces'
          label='Fireplaces'
          description='Number of fireplaces'
          form={form}
        />
        <Select
          id='FireplaceQu'
          label='FireplaceQu'
          description='Fireplace quality'
          options={QualityOrNAOptions}
          form={form}
        />
        <Select
          id='GarageType'
          label='GarageType'
          description='Garage location'
          options={GarageTypeOptions}
          form={form}
        />
        <Select
          id='GarageFinish'
          label='GarageFinish'
          description='Interior finish of the garage'
          options={GarageFinishOptions}
          form={form}
        />
        <NumberInput
          id='GarageCars'
          label='GarageCars'
          description='Size of garage in car capacity'
          form={form}
        />
        <Select
          id='GarageQual'
          label='GarageQual'
          description='Garage quality'
          options={QualityOrNAOptions}
          form={form}
        />
        <Select
          id='PavedDrive'
          label='PavedDrive'
          description='Paved driveway'
          options={PavedDriveOptions}
          form={form}
        />
        <NumberInput
          id='PoolArea'
          label='PoolArea'
          description='Pool area in square feet'
          form={form}
        />
        <Select
          id='PoolQC'
          label='PoolQC'
          description='Pool quality'
          options={QualityOrNAOptions}
          form={form}
        />
        <NumberInput
          id='MiscVal'
          label='MiscVal'
          description='$Value of miscellaneous feature'
          form={form}
        />
        <NumberInput
          id='YearBuilt'
          label='YearBuilt'
          description='Original construction date'
          form={form}
        />
        <NumberInput
          id='YearRemodAdd'
          label='YearRemodAdd'
          description='Remodel date (same as construction date if no remodeling or additions)'
          form={form}
        />
        <NumberInput
          id='TotalSF'
          label='TotalSF'
          description='Total square feet of house (all floors)'
          form={form}
        />
        <NumberInput
          id='TotalArea'
          label='TotalArea' /* TODO add description */
          form={form}
        />
        <NumberInput
          id='TotalBaths'
          label='TotalBaths'
          description='Total number of bathrooms'
          form={form}
        />
        <NumberInput
          id='TotalPorchSF'
          label='TotalPorchSF'
          description='Total square feet of porch area'
          form={form}
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
