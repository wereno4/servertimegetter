from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import urllib.request

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
async def root(url: str):
    try:
        date = urllib.request.urlopen(url).headers['Date']
        return {'time' : date}
    except:
        return {'error' : 'Please enter valid address'}