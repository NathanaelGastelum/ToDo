let list = {
    today: ['Shower'],
    thisWeek: [],
    soon:['Get a web dev job', 'Singer 911'],
    completed: ['Cuddle','Work at a coffee shop', 'Clean up app design', 'Buy plane tickets', 'Get Baked Alaska']
};

makeList(list);

//Creates ul from list object
//for every item:
//  Clear div
//  Create html element 'ul'/'li'
//  append child item

function makeList (object) {
    //TODO add new item input to list cards
    document.getElementById('todo').innerHTML = '';
    for (let prop in object){
        let listHeading = document.createElement('ul');
        let heading = document.createTextNode(prop);
        listHeading.appendChild(heading);

        const targetElement = document.getElementById('todo');
        targetElement.appendChild(listHeading);

        for (let el of object[prop]) {
            let listItem = document.createElement('li');
            let item = document.createTextNode(el);
            listItem.appendChild(item);
            let button = document.createElement('button');
            button.id = prop + "-" + el;
            button.className = 'remove';
            button.innerText = "X";
            listItem.appendChild(button);

            listHeading.appendChild(listItem);
        }
        let input = document.createElement('input');
        input.id = 'input-' + prop;
        input.type = 'text';
        input.placeholder = 'New Item'
        listHeading.appendChild(input);

        let addButton = document.createElement('button');
        addButton.id = 'button-' + prop;
        addButton.className = 'add';
        addButton.innerText = "+";
        listHeading.appendChild(addButton);
    }
}

function addItem(selection, listItem) {
    list[selection].push(listItem);
    makeList(list);
}

function removeItem(property, item) {
    const prop = list[property];
    const i = prop.indexOf(item);
    if (i > -1) {
        prop.splice(i, 1);
        makeList(list);
    }
}

document.addEventListener('click', event => {
    if (event.target.matches('.remove')) {
        const item = event.target.id.split('-');
        removeItem(item[0], item[1]);
    }

    if (event.target.matches('.add')) {
        const item = event.target.id.split('-');
        let selection = item[1];
        let listItem = document.getElementById('input-' + item[1]).value;
        if (listItem) addItem(selection, listItem);
    }
}, false);

document.addEventListener('keydown', function (event) {
    if ((event.key === 'Enter' || event.key === 'NumpadEnter')) {
        const item = event.target.id.split('-');
        if (item[0] === 'input') {
            let selection = item[1];
            let listItem = document.getElementById('input-' + item[1]).value;
            if (listItem) addItem(selection, listItem);
        }
    }
}, false);