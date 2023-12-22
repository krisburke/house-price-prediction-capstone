import React from 'react';
import { Text, Slider } from '@mantine/core';
import { HousePredictionFormValues } from '../types';

const MARKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
  label: `${num}`,
  value: num,
}));

export const SliderInput: React.FC<{
  label: string;
  id: keyof HousePredictionFormValues;
  description?: string;
  value: number;
  onChange: (num: number) => void;
}> = ({ label, id, description, value, onChange }) => {
  return (
    <>
      <Text component='label' size='sm'>
        {label}
      </Text>
      {description && <Text size='xs'>{description}</Text>}
      <Slider
        id={id}
        label={value}
        value={value}
        onChange={onChange}
        min={1}
        max={10}
        step={1}
        marks={MARKS}
        mb={16}
      />
    </>
  );
};
