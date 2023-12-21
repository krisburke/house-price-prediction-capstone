import { HousePredictionInput } from './InputForm/types';

export class FastApiClient {
  baseApiUrl: string;
  currencyFormatter: Intl.NumberFormat;
  constructor() {
    console.log(import.meta.env.BASE_URL);
    this.baseApiUrl =
      process.env.NODE_ENV === 'production'
        ? import.meta.env.BASE_URL.replace('/static', '')
        : '';
    this.currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  async getPrediction(values: HousePredictionInput) {
    const response = await fetch(`${this.baseApiUrl}/api/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      throw new Error('Could not get prediction');
    }
    const data = await response.json();

    return data.prediction
      ? this.currencyFormatter.format(data.prediction)
      : null;
  }
}
