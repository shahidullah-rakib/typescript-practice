//numeric enum
enum RequestType {
    ReadData = 1,
    SaveData = 4,
    DeleteData = 9,
}
console.log(RequestType)

//string enum
enum RequestTypeString {
    ReadData = "Read Data",
    SaveData = "Save Data",
    DeleteData = "Delete Data",
}
console.log(RequestTypeString.ReadData)
console.log(RequestTypeString["DeleteData"])

//string and number or heterogenous enum
enum RequestTypeStringNumber {
    id = 101,
    ReadData = "Read Data",
    SaveData = "Save Data",
    DeleteData = "Delete Data",
}
console.log(RequestTypeStringNumber)
