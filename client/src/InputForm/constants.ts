import { ComboboxData } from '@mantine/core';
import { HousePredictionFormValues } from './types';

export const QualityOptions: ComboboxData = [
  { value: 'Ex', label: 'Excellent' },
  { value: 'Gd', label: 'Good' },
  { value: 'TA', label: 'Average/Typical' },
  { value: 'Fa', label: 'Fair' },
  { value: 'Po', label: 'Poor' },
];

export const QualityOrNAOptions: ComboboxData = [
  ...QualityOptions,
  { value: 'NA', label: 'Not Applicable' },
];

export const MSSubClassOptions: ComboboxData = [
  { value: '20', label: '1-STORY 1946 & NEWER ALL STYLES' },
  { value: '30', label: '1-STORY 1945 & OLDER' },
  { value: '40', label: '1-STORY W/FINISHED ATTIC ALL AGES' },
  { value: '45', label: '1-1/2 STORY - UNFINISHED ALL AGES' },
  { value: '50', label: '1-1/2 STORY FINISHED ALL AGES' },
  { value: '60', label: '2-STORY 1946 & NEWER' },
  { value: '70', label: '2-STORY 1945 & OLDER' },
  { value: '75', label: '2-1/2 STORY ALL AGES' },
  { value: '80', label: 'SPLIT OR MULTI-LEVEL' },
  { value: '85', label: 'SPLIT FOYER' },
  { value: '90', label: 'DUPLEX - ALL STYLES AND AGES' },
  {
    value: '120',
    label: '1-STORY PUD (Planned Unit Development) - 1946 & NEWER',
  },
  { value: '150', label: '1-1/2 STORY PUD - ALL AGES' },
  { value: '160', label: '2-STORY PUD - 1946 & NEWER' },
  { value: '180', label: 'PUD - MULTILEVEL - INCL SPLIT LEV/FOYER' },
  { value: '190', label: '2 FAMILY CONVERSION - ALL STYLES AND AGES' },
];

export const MSZoningOptions: ComboboxData = [
  { value: 'A', label: 'Agriculture' },
  { value: 'C', label: 'Commercial' },
  { value: 'FV', label: 'Floating Village Residential' },
  { value: 'I', label: 'Industrial' },
  { value: 'RH', label: 'Residential High Density' },
  { value: 'RL', label: 'Residential Low Density' },
  { value: 'RP', label: 'Residential Low Density Park' },
  { value: 'RM', label: 'Residential Medium Density' },
];

export const StreetOptions: ComboboxData = [
  { value: 'Grvl', label: 'Gravel' },
  { value: 'Pave', label: 'Paved' },
];

export const LotShapeOptions: ComboboxData = [
  { value: 'Reg', label: 'Regular' },
  { value: 'IR1', label: 'Slightly irregular' },
  { value: 'IR2', label: 'Moderately Irregular' },
  { value: 'IR3', label: 'Irregular' },
];

export const LandContourOptions: ComboboxData = [
  { value: 'Lvl', label: 'Near Flat/Level' },
  {
    value: 'Bnk',
    label: 'Banked - Quick and significant rise from street grade to building',
  },
  { value: 'HLS', label: 'Hillside - Significant slope from side to side' },
  { value: 'Low', label: 'Depression' },
];

export const UtilitiesOptions: ComboboxData = [
  { value: 'AllPub', label: 'All public Utilities (E,G,W,& S)' },
  { value: 'NoSewr', label: 'Electricity, Gas, and Water (Septic Tank)' },
  { value: 'NoSeWa', label: 'Electricity and Gas Only' },
  { value: 'ELO', label: 'Electricity only' },
];

export const LotConfigOptions: ComboboxData = [
  { value: 'Inside', label: 'Inside lot' },
  { value: 'Corner', label: 'Corner lot' },
  { value: 'CulDSac', label: 'Cul-de-sac' },
  { value: 'FR2', label: 'Frontage on 2 sides of property' },
  { value: 'FR3', label: 'Frontage on 3 sides of property' },
];

export const LandSlopeOptions: ComboboxData = [
  { value: 'Gtl', label: 'Gentle slope' },
  { value: 'Mod', label: 'Moderate Slope' },
  { value: 'Sev', label: 'Severe Slope' },
];

export const NeighborhoodOptions: ComboboxData = [
  { value: 'Blmngtn', label: 'Bloomington Heights' },
  { value: 'Blueste', label: 'Bluestem' },
  { value: 'BrDale', label: 'Briardale' },
  { value: 'BrkSide', label: 'Brookside' },
  { value: 'ClearCr', label: 'Clear Creek' },
  { value: 'CollgCr', label: 'College Creek' },
  { value: 'Crawfor', label: 'Crawford' },
  { value: 'Edwards', label: 'Edwards' },
  { value: 'Gilbert', label: 'Gilbert' },
  { value: 'IDOTRR', label: 'Iowa DOT and Rail Road' },
  { value: 'MeadowV', label: 'Meadow Village' },
  { value: 'Mitchel', label: 'Mitchell' },
  { value: 'Names', label: 'North Ames' },
  { value: 'NoRidge', label: 'Northridge' },
  { value: 'NPkVill', label: 'Northpark Villa' },
  { value: 'NridgHt', label: 'Northridge Heights' },
  { value: 'NWAmes', label: 'Northwest Ames' },
  { value: 'OldTown', label: 'Old Town' },
  { value: 'SWISU', label: 'South & West of Iowa State University' },
  { value: 'Sawyer', label: 'Sawyer' },
  { value: 'SawyerW', label: 'Sawyer West' },
  { value: 'Somerst', label: 'Somerset' },
  { value: 'StoneBr', label: 'Stone Brook' },
  { value: 'Timber', label: 'Timberland' },
  { value: 'Veenker', label: 'Veenker' },
];

export const ConditionOptions: ComboboxData = [
  { value: 'Artery', label: 'Adjacent to arterial street' },
  { value: 'Feedr', label: 'Adjacent to feeder street' },
  { value: 'Norm', label: 'Normal' },
  { value: 'RRNn', label: 'Within 200 of North-South Railroad' },
  { value: 'RRAn', label: 'Adjacent to North-South Railroad' },
  {
    value: 'PosN',
    label: 'Near positive off-site feature--park, greenbelt, etc.',
  },
  { value: 'PosA', label: 'Adjacent to postive off-site feature' },
  { value: 'RRNe', label: 'Within 200 of East-West Railroad' },
  { value: 'RRAe', label: 'Adjacent to East-West Railroad' },
];

export const BldgTypeOptions: ComboboxData = [
  { value: '1Fam', label: 'Single-family Detached' },
  {
    value: '2FmCon',
    label: 'Two-family Conversion; originally built as one-family dwelling',
  },
  { value: 'Duplx', label: 'Duplex' },
  { value: 'TwnhsE', label: 'Townhouse End Unit' },
  { value: 'TwnhsI', label: 'Townhouse Inside Unit' },
];

export const HouseStyleOptions: ComboboxData = [
  { value: '1Story', label: 'One story' },
  { value: '1.5Fin', label: 'One and one-half story: 2nd level finished' },
  { value: '1.5Unf', label: 'One and one-half story: 2nd level unfinished' },
  { value: '2Story', label: 'Two story' },
  { value: '2.5Fin', label: 'Two and one-half story: 2nd level finished' },
  { value: '2.5Unf', label: 'Two and one-half story: 2nd level unfinished' },
  { value: 'SFoyer', label: 'Split Foyer' },
  { value: 'SLvl', label: 'Split Level' },
];

export const RoofStyleOptions: ComboboxData = [
  { value: 'Flat', label: 'Flat' },
  { value: 'Gable', label: 'Gable' },
  { value: 'Gambrel', label: 'Gabrel (Barn)' },
  { value: 'Hip', label: 'Hip' },
  { value: 'Mansard', label: 'Mansard' },
  { value: 'Shed', label: 'Shed' },
];

export const RoofMatlOptions: ComboboxData = [
  { value: 'ClyTile', label: 'Clay or Tile' },
  { value: 'CompShg', label: 'Standard (Composite) Shingle' },
  { value: 'Membran', label: 'Membrane' },
  { value: 'Metal', label: 'Metal' },
  { value: 'Roll', label: 'Roll' },
  { value: 'Tar&Grv', label: 'Gravel & Tar' },
  { value: 'WdShake', label: 'Wood Shakes' },
  { value: 'WdShngl', label: 'Wood Shingles' },
];

export const MassVnrTypeOptions: ComboboxData = [
  { value: 'BrkCmn', label: 'Brick Common' },
  { value: 'BrkFace', label: 'Brick Face' },
  { value: 'CBlock', label: 'Cinder Block' },
  { value: 'None', label: 'None' },
  { value: 'Stone', label: 'Stone' },
];

export const ExteriorOptions: ComboboxData = [
  { value: 'AsbShng', label: 'Asbestos Shingles' },
  { value: 'AsphShn', label: 'Asphalt Shingles' },
  { value: 'BrkComm', label: 'Brick Common' },
  { value: 'BrkFace', label: 'Brick Face' },
  { value: 'CBlock', label: 'Cinder Block' },
  { value: 'CemntBd', label: 'Cement Board' },
  { value: 'HdBoard', label: 'Hard Board' },
  { value: 'ImStucc', label: 'Imitation Stucco' },
  { value: 'MetalSd', label: 'Metal Siding' },
  { value: 'Other', label: 'Other' },
  { value: 'Plywood', label: 'Plywood' },
  { value: 'PreCast', label: 'PreCast' },
  { value: 'Stone', label: 'Stone' },
  { value: 'Stucco', label: 'Stucco' },
  { value: 'VinylSd', label: 'Vinyl Siding' },
  { value: 'Wd Sdng', label: 'Wood Siding' },
  { value: 'WdShing', label: 'Wood Shingles' },
];

export const FoundationOptions: ComboboxData = [
  { value: 'BrkTil', label: 'Brick & Tile' },
  { value: 'CBlock', label: 'Cinder Block' },
  { value: 'PConc', label: 'Poured Contrete' },
  { value: 'Slab', label: 'Slab' },
  { value: 'Stone', label: 'Stone' },
  { value: 'Wood', label: 'Wood' },
];

export const BsmtExposureOptions: ComboboxData = [
  { value: 'Gd', label: 'Good Exposure' },
  { value: 'Av', label: 'Average Exposure (split levels or foyers typically)' },
  { value: 'Mn', label: 'Mimimum Exposure' },
  { value: 'No', label: 'No Exposure' },
  { value: 'NA', label: 'No Basement' },
];

export const BsmtFinTypeOptions: ComboboxData = [
  { value: 'GLQ', label: 'Good Living Quarters' },
  { value: 'ALQ', label: 'Average Living Quarters' },
  { value: 'BLQ', label: 'Below Average Living Quarters' },
  { value: 'Rec', label: 'Average Rec Room' },
  { value: 'LwQ', label: 'Low Quality' },
  { value: 'Unf', label: 'Unfinshed' },
  { value: 'NA', label: 'No Basement' },
];

export const HeatingOptions: ComboboxData = [
  { value: 'Floor', label: 'Floor Furnace' },
  { value: 'GasA', label: 'Gas forced warm air furnace' },
  { value: 'GasW', label: 'Gas hot water or steam heat' },
  { value: 'Grav', label: 'Gravity furnace' },
  { value: 'OthW', label: 'Hot water or steam heat other than gas' },
  { value: 'Wall', label: 'Wall furnace' },
];

export const CentralAirOptions: ComboboxData = [
  { value: 'N', label: 'No' },
  { value: 'Y', label: 'Yes' },
];

export const ElectricalOptions: ComboboxData = [
  { value: 'SBrkr', label: 'Standard Circuit Breakers & Romex' },
  {
    value: 'FuseA',
    label: 'Fuse Box over 60 AMP and all Romex wiring (Average)',
  },
  { value: 'FuseF', label: '60 AMP Fuse Box and mostly Romex wiring (Fair)' },
  {
    value: 'FuseP',
    label: '60 AMP Fuse Box and mostly knob & tube wiring (poor)',
  },
  { value: 'Mix', label: 'Mixed' },
];

export const FunctionalOptions: ComboboxData = [
  { value: 'Typ', label: 'Typical Functionality' },
  { value: 'Min1', label: 'Minor Deductions 1' },
  { value: 'Min2', label: 'Minor Deductions 2' },
  { value: 'Mod', label: 'Moderate Deductions' },
  { value: 'Maj1', label: 'Major Deductions 1' },
  { value: 'Maj2', label: 'Major Deductions 2' },
  { value: 'Sev', label: 'Severely Damaged' },
  { value: 'Sal', label: 'Salvage only' },
];

export const GarageTypeOptions: ComboboxData = [
  { value: '2Types', label: 'More than one type of garage' },
  { value: 'Attchd', label: 'Attached to home' },
  { value: 'Basment', label: 'Basement Garage' },
  {
    value: 'BuiltIn',
    label: 'Built-In (Garage part of house - typically has room above garage)',
  },
  { value: 'CarPort', label: 'Car Port' },
  { value: 'Detchd', label: 'Detached from home' },
  { value: 'NA', label: 'No Garage' },
];

export const GarageFinishOptions: ComboboxData = [
  { value: 'Fin', label: 'Finished' },
  { value: 'RFn', label: 'Rough Finished' },
  { value: 'Unf', label: 'Unfinished' },
  { value: 'NA', label: 'No Garage' },
];

export const PavedDriveOptions: ComboboxData = [
  { value: 'Y', label: 'Paved' },
  { value: 'P', label: 'Partial Pavement' },
  { value: 'N', label: 'Dirt/Gravel' },
];

export const DEFAULT_VALUES: HousePredictionFormValues = {
  MSSubClass: '50',
  MSZoning: 'RL',
  LotFrontage: 70,
  LotArea: 10000,
  Street: 'Pave',
  LotShape: 'Reg',
  LandContour: 'Lvl',
  Utilities: 'AllPub',
  LotConfig: 'Inside',
  LandSlope: 'Gtl',
  Neighborhood: 'NridgHt',
  Condition1: 'Norm',
  Condition2: 'Norm',
  BldgType: '1Fam',
  HouseStyle: '1.5Fin',
  OverallQual: 8,
  OverallCond: 5,
  RoofStyle: 'Gable',
  RoofMatl: 'CompShg',
  Exterior1st: 'VinylSd',
  Exterior2nd: 'VinylSd',
  MasVnrType: 'None',
  MasVnrArea: 0,
  ExterQual: 'TA',
  ExterCond: 'TA',
  Foundation: 'PConc',
  BsmtQual: 'Gd',
  BsmtCond: 'TA',
  BsmtExposure: 'No',
  BsmtFinType1: 'GLQ',
  BsmtFinType2: 'Unf',
  BsmtUnfSF: 900,
  Heating: 'GasA',
  HeatingQC: 'Gd',
  CentralAir: 'Y',
  Electrical: 'SBrkr',
  LowQualFinSF: 0,
  BedroomAbvGr: 3,
  KitchenAbvGr: 1,
  KitchenQual: 'Gd',
  TotRmsAbvGrd: 7,
  Functional: 'Typ',
  Fireplaces: 1,
  FireplaceQu: 'TA',
  GarageType: 'Attchd',
  GarageFinish: 'Fin',
  GarageCars: 1,
  GarageQual: 'TA',
  PavedDrive: 'Y',
  PoolArea: 0,
  PoolQC: 'NA',
  MiscVal: 0,
  YearBuilt: 2007,
  YearRemodAdd: 2007, // TODO add note that if no remodel, then same as built
  TotalSF: 2000,
  TotalArea: 2000,
  TotalBaths: 2.5,
  TotalPorchSF: 200,
};
