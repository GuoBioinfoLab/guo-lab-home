from flask import render_template,make_response

from lab_new import app
#from .core import mongo

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/test")
def test():
    return render_template("test.html")
