let list = {
    completed: ['Cuddle','Work at a coffee shop', 'Clean up app design', 'Buy plane tickets', 'Get Baked Alaska'],
    today: ['Shower'],
    thisWeek: [],
        // sunday: [],
        // monday: [],
        // tuesday: [],
        // wednesday: [],
        // thursday: [],
        // friday: ['Play Soma'],
        // saturday: ['Bike ride in the morning']
    soon:['Get a web dev job', 'Singer 911']
};

//iterate through list
//for every item:
//  Create html element 'li'
//  append child item

function makeList (object) {
    for (let value in object){
        let listHeading = document.createElement('ul');
        let heading = document.createTextNode(value);
        listHeading.appendChild(heading);

        const targetElement = document.getElementById('today');
        targetElement.appendChild(listHeading);

        for (let el of object[value]){
            let listItem = document.createElement('li');
            let item = document.createTextNode(el);
            listItem.appendChild(item);

            listHeading.appendChild(listItem);
        }
    }
}

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
    try {
        list[selection].push(listItem);

        document.getElementById('input').value = '';
        document.getElementById('listSelect').value = '';
        makeList(list[selection],selection);
    }
    catch {
        list.thisWeek[selection].push(listItem);

        document.getElementById('input').value = '';
        document.getElementById('listSelect').value = '';
        makeList(list.thisWeek[selection],selection);
    }
}

// makeList(list.today,'today');
// makeList(list.thisWeek.sunday,'sunday'); 
// makeList(list.thisWeek.monday,'monday');
// makeList(list.thisWeek.tuesday,'tuesday');
// makeList(list.thisWeek.wednesday,'wednesday');
// makeList(list.thisWeek.thursday,'thursday');
// makeList(list.thisWeek.friday,'friday');
// makeList(list.thisWeek.saturday,'saturday');
// makeList(list.soon,'soon');
// makeList(list.completed,'completed');

//TODO Generate the entire nested list from the list object rather than seperate function calls with each object property as the heading