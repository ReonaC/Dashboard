class AffordableRentalHousingDevelopments{
        constructor(CommunityAreaName,CommunityAreaNumber,PropertyType,PropertyName,Address,ZipCode,PhoneNumber,ManagementCompany,Units,XCoordinate,YCoordinate,Latitude,Longitude,Location){
                this.CommunityAreaName = CommunityAreaName;
                this.CommunityAreaNumber = CommunityAreaNumber;
				this.PropertyType = PropertyType;
				this.PropertyName = PropertyName;
				this.Address = Address;
				this.ZipCode = ZipCode;
				this.Units = Units;
				this.PhoneNumber = PhoneNumber;
                this.ManagementCompany = ManagementCompany;
                this.Units = Units;
                this.XCoordinate = XCoordinate;
				this.YCoordinate = YCoordinate;
				this.Latitude = Latitude;
                this.Longitude = Longitude;
				this.Location = Location;
                              
        }
}

class BuildingPermits{
	constructor(PERMIT_NUMBER,PERMIT_TYPE,ISSUE_DATE,ESTIMATED_COST,AMOUNT_WAIVED,AMOUNT_PAID,TOTAL_FEE,STREET_NUMBER,STREET_DIRECTION,STREET_NAME,SUFFIX,WORK_DESCRIPTION,CONTRACTOR_1_TYPE,CONTRACTOR_1_NAME,CONTRACTOR_1_ADDRESS,CONTRACTOR_1_CITY,CONTRACTOR_1_STATE,CONTRACTOR_1_PHONE,CONTRACTOR_2_TYPE,CONTRACTOR_2_NAME,CONTRACTOR_2_ADDRESS,CONTRACTOR_2_PHONE,CONTRACTOR_3_TYPE,CONTRACTOR_3_NAME,CONTRACTOR_3_ADDRESS,CONTRACTOR_3_CITY,CONTRACTOR_3_STATE,CONTRACTOR_3_ZIPCODE,CONTRACTOR_3_PHONE,LATITUDE,LONGITUDE,LOCATION){
		this.PERMIT_NUMBER = PERMITNUMBER;
		this.PERMIT_TYPE =  PERMIT_TYPE;
		this.ISSUE_DATE = ISSUE_DATE;
		this.ESTIMATED_COST = ESTIMATED_COST;
		this.AMOUNT_WAIVED = AMOUNT_WAIVED;
		this.AMOUNT_PAID = AMOUNT_PAID;
		this.TOTAL_FEE = TOTAL_FEE;
		this.STREET_NUMBER = STREET_NUMBER;
		this.STREET_DIRECTION = STREET_DIRECTION;
		this.STREET_NAME = STREET_NAME;
		this.SUFFIX = SUFFIX;
		this.WORK_DESCRIPTION = WORK_DESCRIPTION;
		this.CONTRACTOR_1_TYPE = CONTRACTOR_1_TYPE;
		this.CONTRACTOR_1_NAME = CONTRACTOR_1_NAME;
		this.CONTRACTOR_1_ADDRESS =  CONTRACTOR_1_ADDRESS;
		this.CONTRACTOR_1_CITY = CONTRACTOR_1_CITY;
		this.CONTRACTOR_1_STATE = CONTRACTOR_1_STATE;
		this.CONTRACTOR_1_ZIPCODE = CONTRACTOR_1_ZIPCODE;
		this.CONTRACTOR_1_PHONE = CONTRACTOR_1_PHONE;
		this.CONTRACTOR_2_TYPE = CONTRACTOR_2_TYPE;
		this.CONTRACTOR_2_NAME = CONTRACTOR_2_NAME;
		this.CONTRACTOR_2_ADDRESS = CONTRACTOR_2_ADDRESS;
		this.CONTRACTOR_2_CITY = CONTRACTOR_2_CITY;
		this.CONTRACTOR_2_STATE = CONTRACTOR_2_STATE;
		this.CONTRACTOR_2_ZIPCODE = CONTRACTOR_2_ZIPCODE;
		this.CONTRACTOR_2_PHONE = CONTRACTOR_2_PHONE;
		this.CONTRACTOR_3_TYPE = CONTRACTOR_3_TYPE;
		this.CONTRACTOR_3_NAME =  CONTRACTOR_3_NAME;
		this.CONTRACTOR_3_ADDRESS = CONTRACTOR_3_ADDRESS;
		this.CONTRACTOR_3_CITY = CONTRACTOR_3_CITY;
		this.CONTRACTOR_3_STATE = CONTRACTOR_3_STATE;
		this.CONTRACTOR_3_ZIPCODE = CONTRACTOR_3_ZIPCODE;
		this.CONTRACTOR_3_PHONE = CONTRACTOR_3_PHONE;
		this.LATITUDE = LATITUDE;
		this.LONGITUDE = LONGITUDE;
		this.LOCATION = LOCATION;
	}
}


class BuildingViolations{
	constructor(VIOLATION_ID,VIOLATION_LAST_MODIFIED_DATE,VIOLATION_DATE,VIOLATION_CODE,VIOLATION_STATUS,VIOLATION_STATUS_DATE,VIOLATION_DESCRIPTION,VIOLATION_LOCATION,VIOLATION_INSPECTOR_COMMENTS,VIOLATION_ORDINANCE,INSPECTOR_ID,INSPECTION_NUMBER,INSPECTION_STATUS,INSPECTION_WAIVED,INSPECTION_CATEGORY,DEPARTMENT_BUREAU,ADDRESS,STREET_NUMBER,STREET_DIRECTION,STREET_NAME,STREET_TYPE,PROPERTY_GROUP,SSA,LATITUDE,LONGITUDE,LOCATION){
		this.VIOLATION_ID = VIOLATION_ID;
		this.VIOLATION_LAST_MODIFIED_DATE = VIOLATION_LAST_MODIFIED_DATE;
		this.VIOLATION_DATE = VIOLATION_DATE;
		this.VIOLATION_CODE = VIOLATION_CODE;
		this.VIOLATION_STATUS = VIOLATION_STATUS;
		this.VIOLATION_STATUS_DATE = VIOLATION_STATUS_DATE;
		this.VIOLATION_DESCRIPTION = VIOLATION_DESCRIPTION;
		this.VIOLATION_LOCATION = VIOLATION_LOCATION;
		this.VIOLATION_INSPECTOR_COMMENTS = VIOLATION_INSPECTOR_COMMENTS;
		this.VIOLATION_ORDINANCE = VIOLATION_ORDINANCE;
		this.INSPECTOR_ID = INSPECTOR_ID;
		this.INSPECTION_NUMBER = INSPECTION_NUMBER;
		this.INSPECTION_STATUS = INSPECTION_STATUS;
		this.INSPECTION_WAIVED = INSPECTION_WAIVED;
		this.INSPECTION_CATEGORY =  INSPECTION_CATEGORY;
		this.DEPARTMENT_BUREAU = DEPARTMENT_BUREAU;
		this.ADDRESS = ADDRESS;
		this.STREET_NUMBER = STREET_NUMBER;
		this.STREET_DIRECTION = STREET_DIRECTION;
		this.STREET_NAME = STREET_NAME;
		this.STREET_TYPE = STREET_TYPE;
		this.PROPERTY_GROUP = PROPERTY_GROUP;
		this.SSA = SSA;
		this.LATITUDE = LATITUDE;
		this.LONGITUDE = LONGITUDE;
		this.LOCATION = LOCATION;
	}
}

class VacantProperties{
        constructor(FourteenDigitPINNumber,StreetNumber,Dir,StreetName,Type,SqFt,Ward,CommunityArea,ZoningClassification,TIFDistrict,Location){
                this.FourteenDigitPINNumber = FourteenDigitPINNumber;
                this.StreetNumber = StreetNumber;
				this.Dir = Dir;
				this.StreetName = StreetName;
                this.Type = Type;
                this.SqFt = SqFt;
                this.Ward = Ward;
				this.CommunityArea = Location;
                this.ZoningClassification = ZoningClassification;
                this.TIFDistrict = TIFDistrict;
                this.Location = Location;         
        }
}

class AbandonedBuildings{
        constructor(Docket_Number,Violation_Number,Issued_Date,Issuing_Department,Last_Hearing_Date,Property_Address,Violation_Type,EntityorPerson,Disposition_Description){
                this.Docket_Number = Docket_Number;
                this.Violation_Number = Violation_Number;
				this.Issued_Date = Issued_Date;
				this.Issuing_Department = Issuing_Department;
                this.Last_Hearing_Date = Last_Hearing_Date;
                this.Property_Address = Property_Address;
                this.Violation_Type = Violation_Type;
				this.EntityorPerson = EntityorPerson;
                this.Disposition_Description = Disposition_Description;       
        }
}
