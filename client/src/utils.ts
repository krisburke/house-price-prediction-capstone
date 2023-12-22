import { DEFAULT_VALUES } from './constants';
import {
  HousePredictionFormValues,
  HousePredictionInput,
  MSSubClass,
} from './types';
import { object, string, number, StringSchema, NumberSchema } from 'yup';

export const schema = object().shape({
  ...Object.fromEntries(
    Object.keys(DEFAULT_VALUES).map((k) => {
      const key = k as keyof HousePredictionFormValues;
      const entry: [
        keyof HousePredictionFormValues,
        StringSchema | NumberSchema
      ] = [key, string().required()]; // Default to string type

      if (key === 'TotalBaths') {
        const value = number()
          .required()
          .test({
            name: 'divisibleByHalf',
            message: 'Total baths must be divisible by 0.5',
            test: (value) => {
              return value % 0.5 === 0;
            },
          });
        entry[1] = value;
      } else if (typeof DEFAULT_VALUES[key] === 'number') {
        entry[1] = number().required();
      }

      return entry;
    })
  ),
});
console.log(schema);

export const transformFormValuesForSave = (
  values: HousePredictionFormValues
): HousePredictionInput => ({
  ...values,
  MSSubClass: parseInt(values.MSSubClass) as MSSubClass,
});
