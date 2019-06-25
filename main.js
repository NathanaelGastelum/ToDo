let list = {
    today: ['Shower'],
    thisWeek: [],
    soon:['Get a web dev job', 'Singer 911'],
    completed: ['Cuddle','Work at a coffee shop', 'Clean up app design', 'Buy plane tickets', 'Get Baked Alaska']
};

//Creates ul from list object
//for every item:
//  Clear div
//  Create html element 'ul'/'li'
//  append child item

function makeList (object) {
    //TODO have makeList accept arguments for getElementById()
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
    }
}

makeList(list);

function addItem(selection, listItem) {
    list[selection].push(listItem);

    document.getElementById('input').value = '';
    document.getElementById('listSelect').value = '';
    makeList(list);
}

function removeItem(property, item) {
    const prop = list[property];
    const i = prop.indexOf(item);
    if (i > -1) {
        console.log(i);
        prop.splice(i, 1);
        makeList(list);
    }
}

document.addEventListener('click', function(event) {
    if (event.target.matches('.remove')) {
        const item = event.target.id.split('-');
        removeItem(item[0], item[1]);
    }

    if (event.target.matches('.add')) {
        let listItem = document.getElementById('input').value;
        let selection = document.getElementById('listSelect').value;
        if (listItem) addItem(selection, listItem);
    }
}, false);