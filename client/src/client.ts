import { HousePredictionInput } from './InputForm/types';

export class FastApiClient {
  baseUrl: string;
  constructor() {
    console.log(import.meta.env.BASE_URL);
    this.baseUrl = import.meta.env.BASE_URL || 'http://localhost:8000';
  }

  async getPrediction(values: HousePredictionInput) {
    try {
      const response = await fetch(`${this.baseUrl}/api/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
