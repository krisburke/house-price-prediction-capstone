import React from 'react';
import { Fieldset } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { HousePredictionFormValues, NumericalQualityScale } from '../../types';
import { SliderInput } from '../SliderInput';
import {
  BldgTypeOptions,
  ExteriorOptions,
  HouseStyleOptions,
  MassVnrTypeOptions,
  QualityOptions,
  RoofMatlOptions,
  RoofStyleOptions,
} from '../../constants';
import { Select } from '../Select';
import { NumberInput } from '../NumberInput';

export const HouseStructureFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
  overallQualSliderVal: NumericalQualityScale;
  overallCondSliderVal: NumericalQualityScale;
  setOverallQualSliderVal: (num: NumericalQualityScale) => void;
  setOverallCondSliderVal: (num: NumericalQualityScale) => void;
}> = ({
  form,
  overallCondSliderVal,
  overallQualSliderVal,
  setOverallCondSliderVal,
  setOverallQualSliderVal,
}) => (
  <Fieldset legend='House Structure and Design'>
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
    <SliderInput
      id='OverallQual'
      label={'Overall Quality'}
      description='Rates the overall material and finish of the house'
      value={overallQualSliderVal}
      onChange={(num: number) =>
        setOverallQualSliderVal(num as NumericalQualityScale)
      }
    />
    <SliderInput
      id='OverallCond'
      label={'Overall Condition'}
      description='Rates the overall condition of the house'
      value={overallCondSliderVal}
      onChange={(num: number) =>
        setOverallCondSliderVal(num as NumericalQualityScale)
      }
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
  </Fieldset>
);
