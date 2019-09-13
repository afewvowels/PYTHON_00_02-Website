from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def home(year=None):
    return render_template('home.html', year=datetime.datetime.today().year)

@app.route('/about/')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
