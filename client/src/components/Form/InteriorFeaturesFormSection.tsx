import { Fieldset } from '@mantine/core';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';
import { UseFormReturnType } from '@mantine/form';
import {
  HeatingOptions,
  QualityOptions,
  CentralAirOptions,
  ElectricalOptions,
  QualityOrNAOptions,
} from '../../constants';
import { HousePredictionFormValues } from '../../types';

export const InteriorFeaturesFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form }) => (
  <Fieldset legend='Interior Features'>
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
      id='BedroomAbvGr'
      label='BedroomAbvGr'
      description='Bedrooms above grade (does NOT include basement bedrooms)'
      form={form}
    />
    <NumberInput
      id='TotalBaths'
      label='TotalBaths'
      description='Total number of bathrooms'
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
  </Fieldset>
);
