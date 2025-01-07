from fastapi import FastAPI
from user.interface.controllers.user_controller import router as user_router
from news.interface.controllers.news_controller import router as news_router
from containers import Container


app = FastAPI()
app.container = Container()
app.include_router(user_router)
app.include_router(news_router)

@app.get("/")
def hello():
	return {"Hello": "World"}
