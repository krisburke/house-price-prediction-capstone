import { UseFormReturnType } from '@mantine/form';
import { ComboboxData, NativeSelect } from '@mantine/core';
import React from 'react';
import { HousePredictionFormValues } from '../types';

export const Select: React.FC<{
  id: keyof HousePredictionFormValues;
  label: string;
  description?: string;
  options: ComboboxData;
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form, id, label, description, options }) => (
  <NativeSelect
    id={id}
    label={label}
    description={description}
    data={options}
    {...form.getInputProps(id)}
  />
);
