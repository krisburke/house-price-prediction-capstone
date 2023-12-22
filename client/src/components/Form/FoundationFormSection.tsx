import { Fieldset } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React from 'react';
import {
  FoundationOptions,
  QualityOrNAOptions,
  BsmtExposureOptions,
  BsmtFinTypeOptions,
} from '../../constants';
import { HousePredictionFormValues } from '../../types';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';

export const FoundationFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form }) => (
  <Fieldset legend='Basement and Foundation'>
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
  </Fieldset>
);
