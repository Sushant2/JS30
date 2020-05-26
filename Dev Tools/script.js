const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("hello");
    

    // Interpolated
    var haha = '😂😂😂'
    console.log("hello i am %s string!", '😀😀😀');
    console.log(`hello i am ${haha} string!`); // in es6
    

    // Styled
    console.log('%c i am some rich text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');
    

    // warning!
    console.warn("Ohh no");
    
    
    
    // Error :|
    
    console.error("shit");
    // Info
    console.info('This is info!');


    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'that is wrong')
    // clearing
    console.clear();


    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    console.clear();


    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(` ${dog.name} is ${dog.age} years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('sushant');
    console.count('anuj');
    console.count('anuj');
    console.count('sushant');
    console.count('sushant');
    console.count('anuj');
    console.count('sushant');
    console.count('anuj');
    console.count('sushant');
    console.count('anuj');


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/Sushant2')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data.bio);
        });

    // table

    console.table(dogs);