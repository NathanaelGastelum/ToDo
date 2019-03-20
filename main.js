let list = {
    complete: ['Work at a coffee shop', 'Clean up app design', 'Buy plane tickets', 'Get Baked Alaska'],
    today: ['Shower'],
    thisWeek: {
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: ['Play Soma'],
        Saturday: ['Bike ride in the morning']
    },
    soon:['Get a web dev job', 'Singer 911']
};

function makeList(array,element) {
    // Reduce will iterate over all the array items and returns a single value.
    listItems = array.reduce((result, item) => {
        // Add a string to the result for the current item. This syntax is using template literals.
        result += `<li>${item}</li>`;
        
        // Always return the result in the reduce callback, it will be the value or result in the next iteration.
        return result;
    }, ''); // The '' is an empty string, it is the initial value result.

    // Get the element from the DOM in which to display the list, this should be an ul or ol element.
    resultElement = document.getElementById(element);

    // Set the inner HTML
    resultElement.innerHTML = listItems; //TODO innerHTML potentially unsecure
};

document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById('item').value;
    if (value) addItem(value);
});

//TODO Add "Enter" key event listener
// document.getElementById('add').addEventListener('keydown', function() {
//     let value = document.getElementById('item').value;
//     if (value) addItem(value);
// });

function addItem(text) {
    list.today.push(text);
    console.log(list.today);
    makeList(list.today,'today');
}

makeList(list.today,'today');
makeList(list.thisWeek.Sunday,'sunday'); 
makeList(list.thisWeek.Monday,'monday');
makeList(list.thisWeek.Tuesday,'tuesday');
makeList(list.thisWeek.Wednesday,'wednesday');
makeList(list.thisWeek.Thursday,'thursday');
makeList(list.thisWeek.Friday,'friday');
makeList(list.thisWeek.Saturday,'saturday');
makeList(list.soon,'soon');
makeList(list.complete,'completed');

//TODO Generate the entire nested list from the list object rather than seperate function calls with each object property as the heading