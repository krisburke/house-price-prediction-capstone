from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from joblib import load
import numpy as np
from models import HouseData, transform

model = load('../models/house-price.joblib')

app = FastAPI()

# Set up CORS middleware TODO should only apply to local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/predict")
async def make_prediction(data: HouseData):
    try:
        df = transform(data)
        prediction = model.predict(df)
        prediction = prediction.tolist()[0]
        prediction = np.exp(prediction) # TODO double check it was log transformed
        return {"prediction": prediction}
    except Exception as e:
        print(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    