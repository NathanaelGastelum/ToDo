let list = {
    complete: ['Work at a coffee shop', 'Clean up app design', 'Buy plane tickets'],
    today: ['Shower'],
    thisWeek: [
        ['Sunday'],
        ['Monday'],
        ['Tuesday'],
        ['Wednesday'],
        ['Thursday'],
        ['Friday', 'Baked Alaska', 'Play Soma'],
        ['Saturday','Bike ride in the morning']],
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
    resultElement.innerHTML = listItems;
};

makeList(list.today,'today');
makeList(list.thisWeek,'this week'); //TODO Use the first element of the array to sort the 2D array into subcatagories
makeList(list.soon,'soon');
makeList(list.complete,'completed');