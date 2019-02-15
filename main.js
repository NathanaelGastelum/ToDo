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

// Object.keys(thisWeek).forEach(key => {
//     console.log(key) // returns the keys in an object
//     console.log(thisWeek[key])  // returns the appropriate value 
//  });

 function makeUl(card) {
    Object.keys(card).forEach(key => {
        var list = document.createElement('ul');
        list.appendChild(document.createTextNode(key));

        for (i=0; i<key.length; i++) {
            // Create the list item:
            let item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(key[i]));

            // Add it to the list:
            list.appendChild(item);
        };

        // Finally, return the constructed list:
        return list;
    });
 };

document.getElementById('today').appendChild(makeUl(today));
document.getElementById('this week').appendChild(makeUl(thisWeek));
document.getElementById('soon').appendChild(makeUl(soon));