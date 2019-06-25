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
    for (let value in object){
        let listHeading = document.createElement('ul');
        let heading = document.createTextNode(value);
        listHeading.appendChild(heading);

        const targetElement = document.getElementById('todo');
        targetElement.appendChild(listHeading);

        for (let el of object[value]){
            let listItem = document.createElement('li');
            let item = document.createTextNode(el);
            listItem.appendChild(item);

            listHeading.appendChild(listItem);
        }
    }
}

removeItem("today", "Shower");

makeList(list);

document.getElementById('input').addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === 'NumpadEnter') && listItem) {
        let listItem = this.value;
        let selection = document.getElementById('listSelect').value;
        if (listItem) addItem(selection, listItem);
    }
  });

document.getElementById('addbutton').addEventListener('click', function() {
    let listItem = document.getElementById('input').value;
    let selection = document.getElementById('listSelect').value;
    if (listItem) addItem(selection, listItem);
});

function addItem(selection, listItem) {
        list[selection].push(listItem);

        document.getElementById('input').value = '';
        document.getElementById('listSelect').value = '';
        makeList(list);
}

function removeItem(property, item) {
    const prop = list[property];
    const i = prop.indexOf(item);
    prop.splice(i, 1);
}