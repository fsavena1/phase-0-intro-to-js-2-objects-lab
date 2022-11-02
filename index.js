// Write your solution in this file!
const employee = {
    name: "value",
    streetAddress: "value2",
};

function updateEmployeeWithKeyAndValue (obj, key, value) {
    const newEmployee = {... employee};

    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue( obj, key, value) {  
    obj[key] = value;

    return employee;
};

const Employee =  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
    
function deleteFromEmployeeByKey(employee, key, value) { 
    const newEmployee = { ...employee};

    newEmployee[key] = value;

    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey( employee, key, value) {
    employee[key] = value;

    return employee;
};