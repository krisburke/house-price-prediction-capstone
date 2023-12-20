from pydantic import BaseModel
from typing import Literal
import pandas as pd

from app.utils import add_features

class HouseData(BaseModel):
    """
    A model representing house data for sale.

    For detailed descriptions of each field, refer to 'data/data_description.txt'.
    """
    MSSubClass: Literal[20, 30, 40, 45, 50, 60, 70, 75, 80, 85, 90,
                        120, 150, 160, 180, 190]
    MSZoning: Literal['A', 'C', 'FV', 'I', 'RH', 'RL', 'RP', 'RM']
    LotFrontage: int
    LotArea: int
    Street: Literal['Grvl', 'Pave']
    LotShape: Literal['Reg', 'IR1', 'IR2', 'IR3']
    LandContour: Literal['Lvl', 'Bnk', 'HLS', 'Low']
    Utilities: Literal['AllPub', 'NoSewr', 'NoSeWa', 'ELO']
    LotConfig: Literal['Inside', 'Corner', 'CulDSac', 'FR2', 'FR3']
    LandSlope: Literal['Gtl', 'Mod', 'Sev']
    Neighborhood: Literal['Blmngtn', 'Blueste', 'BrDale', 'BrkSide', 'ClearCr',
                          'CollgCr', 'Crawfor', 'Edwards', 'Gilbert', 'IDOTRR',
                          'MeadowV', 'Mitchel', 'Names', 'NoRidge', 'NPkVill',
                          'NridgHt', 'NWAmes', 'OldTown', 'SWISU', 'Sawyer',
                          'SawyerW', 'Somerst', 'StoneBr', 'Timber', 'Veenker']
    Condition1: Literal['Artery', 'Feedr', 'Norm', 'RRNn', 'RRAn', 'PosN', 'PosA',
                        'RRNe', 'RRAe']
    Condition2: Literal['Artery', 'Feedr', 'Norm', 'RRNn', 'RRAn', 'PosN', 'PosA',
                        'RRNe', 'RRAe']
    BldgType: Literal['1Fam', '2FmCon', 'Duplx', 'TwnhsE', 'TwnhsI']
    HouseStyle: Literal['1Story', '1.5Fin', '1.5Unf', '2Story', '2.5Fin', '2.5Unf',
                        'SFoyer', 'SLvl']
    OverallQual: Literal[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    OverallCond: Literal[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    RoofStyle: Literal['Flat', 'Gable', 'Gambrel', 'Hip', 'Mansard', 'Shed']
    RoofMatl: Literal['ClyTile', 'CompShg', 'Membran', 'Metal', 'Roll', 'Tar&Grv',
                        'WdShake', 'WdShngl']
    Exterior1st: Literal['AsbShng', 'AsphShn', 'BrkComm', 'BrkFace', 'CBlock',
                            'CemntBd', 'HdBoard', 'ImStucc', 'MetalSd', 'Other',
                            'Plywood', 'PreCast', 'Stone', 'Stucco', 'VinylSd',
                            'Wd Sdng', 'WdShing']
    Exterior2nd: Literal['AsbShng', 'AsphShn', 'BrkComm', 'BrkFace', 'CBlock',
                            'CemntBd', 'HdBoard', 'ImStucc', 'MetalSd', 'Other',
                            'Plywood', 'PreCast', 'Stone', 'Stucco', 'VinylSd',
                            'Wd Sdng', 'WdShing']
    MasVnrType: Literal['BrkCmn', 'BrkFace', 'CBlock', 'None', 'Stone']
    MasVnrArea: int
    ExterQual: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po']
    ExterCond: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po']
    Foundation: Literal['BrkTil', 'CBlock', 'PConc', 'Slab', 'Stone', 'Wood']
    BsmtQual: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po', 'NA']
    BsmtCond: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po', 'NA']
    BsmtExposure: Literal['Gd', 'Av', 'Mn', 'No', 'NA']
    BsmtFinType1: Literal['GLQ', 'ALQ', 'BLQ', 'Rec', 'LwQ', 'Unf', 'NA']
    BsmtFinType2: Literal['GLQ', 'ALQ', 'BLQ', 'Rec', 'LwQ', 'Unf', 'NA']
    BsmtUnfSF: int
    Heating: Literal['Floor', 'GasA', 'GasW', 'Grav', 'OthW', 'Wall']
    HeatingQC: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po']
    CentralAir: Literal['N', 'Y']
    Electrical: Literal['SBrkr', 'FuseA', 'FuseF', 'FuseP', 'Mix']
    LowQualFinSF: int
    BedroomAbvGr: int
    KitchenAbvGr: int
    KitchenQual: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po']
    TotRmsAbvGrd: int
    Functional: Literal['Typ', 'Min1', 'Min2', 'Mod', 'Maj1', 'Maj2', 'Sev', 'Sal']
    Fireplaces: int
    FireplaceQu: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po', 'NA']
    GarageType: Literal['2Types', 'Attchd', 'Basment', 'BuiltIn', 'CarPort',
                        'Detchd', 'NA']
    GarageFinish: Literal['Fin', 'RFn', 'Unf', 'NA']
    GarageCars: int
    GarageQual: Literal['Ex', 'Gd', 'TA', 'Fa', 'Po', 'NA']
    PavedDrive: Literal['Y', 'P', 'N']
    PoolArea: int
    PoolQC: Literal['Ex', 'Gd', 'TA', 'Fa', 'NA']
    MiscVal: int
    YearBuilt: int
    YearRemodAdd: int
    TotalSF: int
    TotalArea: int
    TotalBaths: float
    TotalPorchSF: int


def transform(input_data: HouseData):
    try:
        input_data_dict = input_data.model_dump()
        input_df = pd.DataFrame([input_data_dict])
        input_df = add_features(input_df)
        return input_df

    except Exception as e:
        print(f"Error in transform function: {e}")
        raise
