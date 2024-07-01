// Event Capturing :-

// let grandparent = document.getElementById('grandparent');
// grandparent.addEventListener('click', function () {
//     console.log('Grandparent clicked (capturing phase)');
// }, true);

// let parent = document.getElementById('parent');
// parent.addEventListener('click', function () {
//     console.log('Parent clicked (capturing phase)');
// }, true);

// let child = document.getElementById('child');
// child.addEventListener('click', function () {
//     console.log('Child clicked (capturing phase)');
// }, true)


// Event Bubbling :- 

// let grandparent = document.getElementById('grandparent');
// grandparent.addEventListener('click', function () {
//     console.log('Grandparent clicked (capturing phase)');
// });

// let parent = document.getElementById('parent');
// parent.addEventListener('click', function () {
//     console.log('Parent clicked (capturing phase)');
// });

// let child = document.getElementById('child');
// child.addEventListener('click', function () {
//     console.log('Child clicked (capturing phase)');
// });


// Target Phase :-

// let child = document.getElementById('child');
// child.addEventListener('click', function () {
//     console.log('Child clicked (target phase)');
// });



// Combining all phases :-

// Capturing phase :- 
document.getElementById('grandparent').addEventListener('click', function () {
    console.log('Grandparent clicked (capturing phase)');
}, true);

document.getElementById('parent').addEventListener('click', function () {
    console.log('Parent clicked (capturing phase)');
}, true);

document.getElementById('child').addEventListener('click', function () {
    console.log('Child clicked (capturing phase)');
}, true);

// Bubbling phase :-

document.getElementById('grandparent').addEventListener('click', function () {
    console.log('Grandparent clicked (capturing phase)');
});

document.getElementById('parent').addEventListener('click', function () {
    console.log('Parent clicked (capturing phase)');
});

document.getElementById('child').addEventListener('click', function () {
    console.log('Child clicked (capturing phase)');
});