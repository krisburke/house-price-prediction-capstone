from fastapi import FastAPI
from joblib import load

model = load('../notebook/house-price.joblib')

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
