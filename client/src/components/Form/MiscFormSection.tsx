import { Fieldset } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { ConditionOptions, FunctionalOptions } from '../../constants';
import { HousePredictionFormValues } from '../../types';
import { NumberInput } from '../NumberInput';
import { Select } from '../Select';

export const MiscFormSection: React.FC<{
  form: UseFormReturnType<HousePredictionFormValues>;
}> = ({ form }) => (
  <Fieldset legend='Miscellaneous Features'>
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
      id='Functional'
      label='Functional'
      description='Home functionality (Assume typical unless deductions are warranted)'
      options={FunctionalOptions}
      form={form}
    />
    <NumberInput
      id='LowQualFinSF'
      label='LowQualFinSF'
      description='Low quality finished square feet (all floors)'
      form={form}
    />
  </Fieldset>
);
