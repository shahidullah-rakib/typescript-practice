//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["SaveData"] = 4] = "SaveData";
    RequestType[RequestType["DeleteData"] = 9] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string enum
var RequestTypeString;
(function (RequestTypeString) {
    RequestTypeString["ReadData"] = "Read Data";
    RequestTypeString["SaveData"] = "Save Data";
    RequestTypeString["DeleteData"] = "Delete Data";
})(RequestTypeString || (RequestTypeString = {}));
console.log(RequestTypeString.ReadData);
console.log(RequestTypeString["DeleteData"]);
//string and number or heterogenous enum
var RequestTypeStringNumber;
(function (RequestTypeStringNumber) {
    RequestTypeStringNumber[RequestTypeStringNumber["id"] = 101] = "id";
    RequestTypeStringNumber["ReadData"] = "Read Data";
    RequestTypeStringNumber["SaveData"] = "Save Data";
    RequestTypeStringNumber["DeleteData"] = "Delete Data";
})(RequestTypeStringNumber || (RequestTypeStringNumber = {}));
console.log(RequestTypeStringNumber);
