from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from joblib import load
import numpy as np
from models import HouseData, transform

model = load('house-price.joblib')

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

app.mount('/static', StaticFiles(directory='static'), name='static')

@app.get('/api/healthcheck', tags=['healthcheck'])
async def healthcheck():
    return {'message': 'API is healthy'}

@app.post("/api/predict", tags=["predict"])
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
    
@app.get('/notebook', response_class=HTMLResponse)
async def serve_html_notebook():
    with open('static/house-price-prediction.html', 'r') as file:
        html = file.read()
    return HTMLResponse(content=html)

@app.get("/{path:path}")
async def catch_all(path: str):
    return FileResponse('static/index.html')
