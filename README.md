## Python Task

<img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
     alt="Markdown Python icon"
     height="50px"
/>&nbsp;&nbsp;&nbsp;

### Introduction

This application returns dictionary object that shows
all allowed applications, the allowed features for a user.
Also, it provides unit tests with report.html for given function.

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
