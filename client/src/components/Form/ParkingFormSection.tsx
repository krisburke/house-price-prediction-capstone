import { Fieldset } from '@mantine/core';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';
import {
  GarageFinishOptions,
  GarageTypeOptions,
  PavedDriveOptions,
  QualityOrNAOptions,
} from '../../constants';
import { UseFormReturnType } from '@mantine/form';
import { HousePredictionFormValues } from '../../types';

export const ParkingFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form }) => (
  <Fieldset legend='Garage and Parking'>
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
  </Fieldset>
);
