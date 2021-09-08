from main import app_access
from main import apps
from main import app_features
from main import feat_access

# Global variables. Dummy data
user_1 = {'user_id': 1, 
              'application_permissions': [
                    {'app_id': 1, 'features_allowed': [1, 2]}, 
                    {'app_id': 2, 'features_allowed': [5]},
                    {'app_id': 3, 'features_allowed': []}
                ]
              }

user_2 = {'user_id': 2, 
              'application_permissions': [
                    {'app_id': 1, 'features_allowed': [1, 2, 3]}, 
                    {'app_id': 2, 'features_allowed': [3, 4]},
                    {'app_id': 3, 'features_allowed': [3]}
                ]
              }

user_3 = {'user_id': 3, 
              'application_permissions': [
                    {'app_id': 1, 'features_allowed': []}, 
                    {'app_id': 2, 'features_allowed': []},
                    {'app_id': 3, 'features_allowed': []}
                ]
              }

def test_access_user_1():
    assert app_access(1, apps, app_features, feat_access) == user_1

def test_access_user_2():
    assert app_access(2, apps, app_features, feat_access) == user_2

def test_access_user_3():
    assert app_access(3, apps, app_features, feat_access) == user_3