from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from joblib import load
import numpy as np
from models import HouseData, transform

# import os
# from pathlib import Path
# def print_directory_structure(startpath):
#     startpath_str = str(startpath)
#     for root, dirs, files in os.walk(startpath_str):
#         level = root.replace(startpath_str, '').count(os.sep)
#         indent = ' ' * 4 * (level)
#         print(f"{indent}{os.path.basename(root)}/")
#         subindent = ' ' * 4 * (level + 1)
#         for f in files:
#             print(f"{subindent}{f}")
# print("Current Working Directory:", Path.cwd())
# print_directory_structure(Path.cwd())

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

@app.post("api/predict", tags=["predict"])
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
    
@app.get("/{path:path}")
async def catch_all(path: str):
    return FileResponse('static/index.html')
