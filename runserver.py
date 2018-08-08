import os
from lab_new import app


def runserver():
    port = int(os.environ.get('PORT', 4000))
    app.run(host='localhost', port=port)
    app.run()

if __name__ == '__main__':
    runserver()
