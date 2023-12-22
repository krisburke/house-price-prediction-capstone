export type MSZoning = 'A' | 'C' | 'FV' | 'I' | 'RH' | 'RL' | 'RP' | 'RM';
export type MSSubClass =
  | 20
  | 30
  | 40
  | 45
  | 50
  | 60
  | 70
  | 75
  | 80
  | 85
  | 90
  | 120
  | 150
  | 160
  | 180
  | 190;
export type Street = 'Grvl' | 'Pave';
export type LotShape = 'Reg' | 'IR1' | 'IR2' | 'IR3';
export type LandContour = 'Lvl' | 'Bnk' | 'HLS' | 'Low';
export type Utilities = 'AllPub' | 'NoSewr' | 'NoSeWa' | 'ELO';
export type LotConfig = 'Inside' | 'Corner' | 'CulDSac' | 'FR2' | 'FR3';
export type LandSlope = 'Gtl' | 'Mod' | 'Sev';
export type Neighborhood =
  | 'Blmngtn'
  | 'Blueste'
  | 'BrDale'
  | 'BrkSide'
  | 'ClearCr'
  | 'CollgCr'
  | 'Crawfor'
  | 'Edwards'
  | 'Gilbert'
  | 'IDOTRR'
  | 'MeadowV'
  | 'Mitchel'
  | 'Names'
  | 'NoRidge'
  | 'NPkVill'
  | 'NridgHt'
  | 'NWAmes'
  | 'OldTown'
  | 'SWISU'
  | 'Sawyer'
  | 'SawyerW'
  | 'Somerst'
  | 'StoneBr'
  | 'Timber'
  | 'Veenker';
export type Condition =
  | 'Artery'
  | 'Feedr'
  | 'Norm'
  | 'RRNn'
  | 'RRAn'
  | 'PosN'
  | 'PosA'
  | 'RRNe'
  | 'RRAe';
export type BldgType = '1Fam' | '2FmCon' | 'Duplx' | 'TwnhsE' | 'TwnhsI';
export type HouseStyle =
  | '1Story'
  | '1.5Fin'
  | '1.5Unf'
  | '2Story'
  | '2.5Fin'
  | '2.5Unf'
  | 'SFoyer'
  | 'SLvl';
export type NumericalQualityScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type RoofStyle =
  | 'Flat'
  | 'Gable'
  | 'Gambrel'
  | 'Hip'
  | 'Mansard'
  | 'Shed';
export type RoofMatl =
  | 'ClyTile'
  | 'CompShg'
  | 'Membran'
  | 'Metal'
  | 'Roll'
  | 'Tar&Grv'
  | 'WdShake'
  | 'WdShngl';
export type Exterior =
  | 'AsbShng'
  | 'AsphShn'
  | 'BrkComm'
  | 'BrkFace'
  | 'CBlock'
  | 'CemntBd'
  | 'HdBoard'
  | 'ImStucc'
  | 'MetalSd'
  | 'Other'
  | 'Plywood'
  | 'PreCast'
  | 'Stone'
  | 'Stucco'
  | 'VinylSd'
  | 'WdSdng'
  | 'WdShing';
export type MasVnrType = 'BrkCmn' | 'BrkFace' | 'CBlock' | 'None' | 'Stone';
export type Quality = 'Ex' | 'Gd' | 'TA' | 'Fa' | 'Po';
export type QualityOrNA = Quality | 'NA';
export type Foundation =
  | 'BrkTil'
  | 'CBlock'
  | 'PConc'
  | 'Slab'
  | 'Stone'
  | 'Wood';
export type BsmtExposure = 'Gd' | 'Av' | 'Mn' | 'No' | 'NA';
export type BsmtFinType = 'GLQ' | 'ALQ' | 'BLQ' | 'Rec' | 'LwQ' | 'Unf' | 'NA';
export type Heating = 'Floor' | 'GasA' | 'GasW' | 'Grav' | 'OthW' | 'Wall';
export type Electrical = 'SBrkr' | 'FuseA' | 'FuseF' | 'FuseP' | 'Mix';
export type Functional =
  | 'Typ'
  | 'Min1'
  | 'Min2'
  | 'Mod'
  | 'Maj1'
  | 'Maj2'
  | 'Sev'
  | 'Sal';
export type GarageType =
  | '2Types'
  | 'Attchd'
  | 'Basment'
  | 'BuiltIn'
  | 'CarPort'
  | 'Detchd'
  | 'NA';
export type GarageFinish = 'Fin' | 'RFn' | 'Unf' | 'NA';
export type CentralAir = 'N' | 'Y';
export type PavedDrive = 'Y' | 'P' | 'N';

export interface HousePredictionBase {
  MSZoning: MSZoning;
  LotFrontage: number;
  LotArea: number;
  Street: Street;
  LotShape: LotShape;
  LandContour: LandContour;
  Utilities: Utilities;
  LotConfig: LotConfig;
  LandSlope: LandSlope;
  Neighborhood: Neighborhood;
  Condition1: Condition;
  Condition2: Condition;
  BldgType: BldgType;
  HouseStyle: HouseStyle;
  OverallQual: NumericalQualityScale;
  OverallCond: NumericalQualityScale;
  RoofStyle: RoofStyle;
  RoofMatl: RoofMatl;
  Exterior1st: Exterior;
  Exterior2nd: Exterior;
  MasVnrType: MasVnrType;
  MasVnrArea: number;
  ExterQual: Quality;
  ExterCond: Quality;
  Foundation: Foundation;
  BsmtQual: QualityOrNA;
  BsmtCond: QualityOrNA;
  BsmtExposure: BsmtExposure;
  BsmtFinType1: BsmtFinType;
  BsmtFinType2: BsmtFinType;
  BsmtUnfSF: number;
  Heating: Heating;
  HeatingQC: Quality;
  CentralAir: CentralAir;
  Electrical: Electrical;
  LowQualFinSF: number;
  BedroomAbvGr: number;
  KitchenAbvGr: number;
  KitchenQual: Quality;
  TotRmsAbvGrd: number;
  Functional: Functional;
  Fireplaces: number;
  FireplaceQu: QualityOrNA;
  GarageType: GarageType;
  GarageFinish: GarageFinish;
  GarageCars: number;
  GarageQual: QualityOrNA;
  PavedDrive: PavedDrive;
  PoolArea: number;
  PoolQC: QualityOrNA;
  MiscVal: number;
  YearBuilt: number;
  YearRemodAdd: number;
  TotalSF: number;
  TotalArea: number;
  TotalBaths: number;
  TotalPorchSF: number;
}

export interface HousePredictionInput extends HousePredictionBase {
  MSSubClass: MSSubClass;
}

export interface HousePredictionFormValues extends HousePredictionBase {
  MSSubClass: string;
}
