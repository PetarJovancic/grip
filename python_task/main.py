# Global variables
apps = [{"app_id": 1}, {"app_id": 2}, {"app_id": 3}, {"app_id": 126}]

app_features = [{"app_id": 1, "features_available": [1, 2, 3]},
                {"app_id": 2, "features_available": [3, 4, 5, 7]},
                {"app_id": 3, "features_available": [3,12]}]

feat_access = [{"user_id": 1, "features_allowed": [1, 2, 5]},
                {"user_id": 2, "features_allowed": [1, 2, 3, 4,]}, 
                {"user_id": 3, "features_allowed": []}]


# Funtion that returns for all allowed applications, 
# the allowed features for a user
def app_access(user_id, apps, app_features, feat_access):
    final_dict = dict()
    app_perm =[]
    feat_access = feat_access[user_id-1]

    for i in app_features:
        temp_dict=dict()
        feat_allowed = set(i['features_available']) & set(
            feat_access["features_allowed"])
        temp_dict["app_id"] = i["app_id"]
        temp_dict["features_allowed"] = list(feat_allowed)
        app_perm.append(temp_dict)

    final_dict["user_id"] = user_id
    final_dict["application_permissions"] = app_perm
    return final_dict

print(app_access(1, apps, app_features, feat_access))