let list = {
    today: ['Shower'],
    thisWeek: {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
    },
    soon:['Get a web dev job', 'Singer 911'],
    completed: ['Cuddle','Work at a coffee shop', 'Clean up app design', 'Buy plane tickets', 'Get Baked Alaska']
};

//TODO pull list object from database
makeList(list, 'todo');

//Creates ul from list object
//for every item:
//  Clear div
//  Create html element 'ul'/'li'
//  append child item

function makeList (object, target) {
    document.getElementById(target).innerHTML = '';
    for (let prop in object){
        let listHeading = document.createElement('ul');
        let heading = document.createTextNode(prop);
        let listDiv = document.createElement('div');
        listDiv.id = prop;
        listHeading.appendChild(heading);
        listHeading.appendChild(listDiv);

        const targetElement = document.getElementById(target);
        targetElement.appendChild(listHeading);

        try {
            for (let el of object[prop]) {
                let listItem = document.createElement('li');
                let item = document.createTextNode(el);
                listItem.appendChild(item);
                let removeButton = document.createElement('button');
                removeButton.id = prop + "-" + el;
                removeButton.className = 'remove';
                removeButton.innerText = '\u2715';
                listItem.appendChild(removeButton);
                if (prop != 'completed') {
                    let completeButton = document.createElement('button');
                    completeButton.id = prop + "-" + el;
                    completeButton.className = 'complete';
                    completeButton.innerText = '\u2713';
                    listItem.appendChild(completeButton);
                }
    
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
        catch {
            makeList(object[prop], listDiv.id);
        }
    }
}

function addItem(property, listItem) {
    if (list[property]) {
        list[property].push(listItem);
        makeList(list, 'todo');
    }
    else if (list.thisWeek[property]) {
        list.thisWeek[property].push(listItem);
        makeList(list, 'todo');
    }
}

function removeItem(property, item) {
    if (list[property]) {
        const prop = list[property];
        const i = prop.indexOf(item);
        if (i > -1) {
            prop.splice(i, 1);
            makeList(list, 'todo');
        }
    }
    else if (list.thisWeek[property]) {
        const prop = list.thisWeek[property];
        const i = prop.indexOf(item);
        if (i > -1) {
            prop.splice(i, 1);
            makeList(list, 'todo');
        }
    }
}

// Event delegation
document.addEventListener('click', event => {
    if (event.target.matches('.remove')) {
        const item = event.target.id.split('-');
        removeItem(item[0], item[1]);
    }

    if (event.target.matches('.complete')) {
        const item = event.target.id.split('-');
        addItem('completed', item[1]);
        removeItem(item[0], item[1]);
    }

    if (event.target.matches('.add')) {
        const item = event.target.id.split('-');
        let selection = item[1];
        let listItem = document.getElementById('input-' + item[1]).value;
        if (listItem) addItem(selection, listItem);
    }
}, false);

document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === 'NumpadEnter')) {
        const item = event.target.id.split('-');
        if (item[0] === 'input') {
            let selection = item[1];
            let listItem = document.getElementById('input-' + item[1]).value;
            if (listItem) addItem(selection, listItem);
        }
    }
}, false);