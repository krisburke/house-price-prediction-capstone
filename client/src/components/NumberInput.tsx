import { UseFormReturnType } from '@mantine/form';
import { NumberInput as NumberInputMantine } from '@mantine/core';
import { HousePredictionFormValues } from '../types';

export const NumberInput: React.FC<{
  id: keyof HousePredictionFormValues;
  label: string;
  description?: string;
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form, id, label, description }) => (
  <NumberInputMantine
    id={id}
    label={label}
    description={description}
    {...form.getInputProps(id)}
  />
);
