import React from 'react';
import { Fieldset } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import {
  MSSubClassOptions,
  MSZoningOptions,
  NeighborhoodOptions,
  UtilitiesOptions,
} from '../../constants';
import { HousePredictionFormValues } from '../../types';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';

export const BasicDetailsFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form }) => (
  <Fieldset legend='Basic Property Details'>
    <Select
      id='MSSubClass'
      label='MSSubClass'
      description='Identifies the type of dwelling involved in the sale.'
      options={MSSubClassOptions}
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
      description='Total square feet of first and second floor and finished basement area'
      form={form}
    />
    <NumberInput
      id='TotalArea'
      label='TotalArea'
      description='Total above grade living area and basement area in square feet'
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
      id='MSZoning'
      label='MSZoning'
      description='Identifies the general zoning classification of the sale.'
      options={MSZoningOptions}
      form={form}
    />
    <Select
      id='Neighborhood'
      label='Neighborhood'
      description='Physical locations within Ames city limits'
      options={NeighborhoodOptions}
      form={form}
    />
  </Fieldset>
);
