## JavaScript Task

<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"
     alt="Markdown Javascript icon"
     height="50px"
/>&nbsp;&nbsp;&nbsp;

### Introduction

This application contains funtions that returns user ID and
playback time for specific parameters given.
Also, it provides unit tests written in jest.

### Requirements

NodeJS installed on your system (12 or higher) -\*\* [NodeJS](https://nodejs.org)

### Usage

Navigate to javascript_task directory:

```
cd javascript_task
```

Install node_modules:

```
npm install
```

To execute app, run:

```
node app.js
```

To execute tests, run:

```
npm test
```

## Python Task

<img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
     alt="Markdown Python icon"
     height="50px"
/>&nbsp;&nbsp;&nbsp;

### Introduction

This application returns dictionary object that shows
all allowed applications, the allowed features for a user.
Also, it provides unit tests with report.html for given function.

### Requirements

Python3 installed (3.2 or higher) -\*\* [Python](https://www.python.org/)

### Usage

It is advised to work in a virtual environment.
Before creating venv, navigate to python_task directory:

```
cd python_task
```

Create venv using the following command:

```
python -m venv venv
```

Activating **venv**:

- Windows OS: `./venv/Scripts/activate`
- Windows OS (GitBash): `source ./venv/Scripts/activate`

Install the required packages into the newly created venv:

```
pip install -r requirements.txt
```

To execute main script, run:

```
python main.py
```

To execute tests, run:

```
pytest tests/test_main.py --capture=tee-sys --html=report.html
```
