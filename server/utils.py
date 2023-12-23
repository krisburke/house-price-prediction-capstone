from datetime import datetime

def add_house_age(df):
    """
    Adds the age of the house to the dataframe.
    """
    current_year = datetime.now().year
    df['HouseAge'] = current_year - df['YearBuilt']
    df.drop(columns=['YearBuilt'], inplace=True)
    return df

def add_house_remodel_age(df):
    """
    Adds the age of the house since the last remodel to the dataframe.
    """
    current_year = datetime.now().year
    df['HouseRemodelAge'] = current_year - df['YearRemodAdd']
    df.drop(columns=['YearRemodAdd'], inplace=True)
    return df

def add_features(df):
    """
    Adds the following features to the dataframe:
    - HouseAge
    - HouseRemodelAge
    """
    df = add_house_age(df)
    df = add_house_remodel_age(df)
    return df
