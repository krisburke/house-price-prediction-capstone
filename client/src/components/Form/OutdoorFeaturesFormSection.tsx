import { Fieldset } from '@mantine/core';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';
import {
  LandContourOptions,
  LandSlopeOptions,
  LotConfigOptions,
  LotShapeOptions,
  QualityOrNAOptions,
  StreetOptions,
} from '../../constants';
import { UseFormReturnType } from '@mantine/form';
import { HousePredictionFormValues } from '../../types';

export const OutdoorFeaturesFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form }) => (
  <Fieldset legend='Lot and Outdoor Features'>
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
      id='LotShape'
      label='LotShape'
      description='General shape of property'
      options={LotShapeOptions}
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
      id='LandContour'
      label='LandContour'
      description='Flatness of the property'
      options={LandContourOptions}
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
      id='Street'
      label='Street'
      description='Type of road access to property'
      options={StreetOptions}
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
      id='TotalPorchSF'
      label='TotalPorchSF'
      description='Total square feet of porch area'
      form={form}
    />
  </Fieldset>
);
