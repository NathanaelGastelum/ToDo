let list = {
    complete: ['Work at a coffee shop', 'Clean up app design'],
    today: ['Shower', 'Buy plane tickets'],
    thisWeek: [
        ['Sunday']
        ['Monday']
        ['Tuesday']
        ['Wednesday']
        ['Thursday']
        ['Friday', 'Baked Alaska', 'Play Soma']
        ['Saturday','Bike ride in the morning']], 
    soon:['Get a web dev job', 'Singer 911']
};


    var slides = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"]
    var str = '<ul>'

    slides.forEach(function(slide) {
    str += '<li>'+ slide + '</li>';
    }); 

    str += '</ul>';
    document.getElementById("today").innerHTML = str;
