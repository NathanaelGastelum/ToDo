
var testArray = ['testing', 'testing', 123,];

arrayPrint(testArray);

function arrayPrint(array) {
    for (var index of array) {
        document.writeln(index);
    }
}