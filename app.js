let count800 = 0;
let count1300 = 0;

document.getElementById('btn800').addEventListener('click', function() {
    count800++;
    document.getElementById('count800').textContent = count800;
});

document.getElementById('btn1300').addEventListener('click', function() {
    count1300++;
    document.getElementById('count1300').textContent = count1300;
});

document.getElementById('reset').addEventListener('click', function() {
    count800 = 0;
    count1300 = 0;
    document.getElementById('count800').textContent = count800;
    document.getElementById('count1300').textContent = count1300;
});