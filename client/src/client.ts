import { HousePredictionInput } from './InputForm/types';

export class FastApiClient {
  baseApiUrl: string;
  currencyFormatter: Intl.NumberFormat;
  constructor() {
    console.log(import.meta.env.BASE_URL);
    this.baseApiUrl = import.meta.env.BASE_URL.replace('/static', '/api');
    this.currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  async getPrediction(values: HousePredictionInput) {
    try {
      const response = await fetch(`${this.baseApiUrl}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      return data.prediction
        ? this.currencyFormatter.format(data.prediction)
        : null;
    } catch (error) {
      console.error(error);
    }
  }
}
