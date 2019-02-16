let today = {
    uncomplete:['Relax'],
    complete: ['Work at a coffee shop']
};
let thisWeek = {
    uncomplete:['Unpack', 'Clean your room'],
    complete: ['Nothing of importance']
};
let soon = {
    uncomplete:['BS Degree', '???', 'Singer 911'],
    complete: ['Move']
};

function makeUl(array) {
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
document.getElementById('today').appendChild(makeUl(today.uncomplete));
document.getElementById('today').appendChild(makeUl(today.complete));

document.getElementById('this week').appendChild(makeUl(thisWeek.uncomplete));
document.getElementById('this week').appendChild(makeUl(thisWeek.complete));

document.getElementById('soon').appendChild(makeUl(soon.uncomplete));
document.getElementById('soon').appendChild(makeUl(soon.complete));