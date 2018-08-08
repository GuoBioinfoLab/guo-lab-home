from flask import Flask
from flask_restful import Api

app = Flask(__name__)

api = Api(app)

app.config.from_object('lab_new.settings')

app.url_map.strict_slashes = False

import lab_new.core
import lab_new.controllers
