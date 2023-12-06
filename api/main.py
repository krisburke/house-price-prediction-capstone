from fastapi import FastAPI
from joblib import load
from models import HouseData, transform

model = load('../models/house-price.joblib')

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/predict")
async def make_prediction(data: HouseData):
    df = transform(data)
    prediction = model.predict(df)
    return { "prediction": prediction }
