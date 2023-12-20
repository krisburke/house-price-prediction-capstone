from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from joblib import load
import numpy as np
from app.models import HouseData, transform

model = load('./models/house-price.joblib')


app = FastAPI()

origins = [
    'http://localhost:5173',
    'localhost:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Hello World"}

@app.post("/predict", tags=["predict"])
async def make_prediction(data: HouseData) -> dict:
    try:
        df = transform(data)
        prediction = model.predict(df)
        prediction = prediction.tolist()[0]
        prediction = np.exp(prediction)
        return {"prediction": prediction}
    except Exception as e:
        print(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    