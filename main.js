
let today = {
    incomplete:['Relax'],
    complete: ['Work at a coffee shop']
};
let thisWeek = {
    incomplete:['Unpack', 'Clean your room'],
    complete: ['Nothing of importance']
};
let soon = {
    incomplete:['BS Degree', '???', 'Singer 911'],
    complete: ['Move']
};

function makeList(array) {
    var list = document.createElement('ul');

    for (let i of array) {
        // Create the list item:
        let item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(i));

        // Add it to the list:
        list.appendChild(item);
    };

    // Finally, return the constructed list:
    return list;
};
function addItem() {
    var value = document.getElementById('item').value;
    if (value) {
        today.incomplete.push(value);
        console.log(today.incomplete);
    }
}

document.getElementById('today').appendChild(makeList(today.incomplete)); //TODO: refactor into a createCard function
document.getElementById('today').appendChild(makeList(today.complete));

document.getElementById('this week').appendChild(makeList(thisWeek.incomplete));
document.getElementById('this week').appendChild(makeList(thisWeek.complete));

document.getElementById('soon').appendChild(makeList(soon.incomplete));
document.getElementById('soon').appendChild(makeList(soon.complete));

document.getElementById('add').addEventListener('click', addItem);//TODO: prevent from reseting page