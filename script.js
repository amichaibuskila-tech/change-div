const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');


function switchToTab1() {
    content1.classList.remove('hide');
    content2.classList.add('hide');
}

function switchToTab2() {
    content2.classList.remove('hide');
    content1.classList.add('hide');
}