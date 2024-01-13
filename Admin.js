// You can add functionality to the admin button here

document.getElementById('admin-btn').addEventListener('click', function() {
    alert('Admin settings clicked!');
    // Add your admin settings logic here
});

function changeText() {
    var newText = document.getElementById('change-text-input').value;
    document.getElementById('main-text').innerText = newText;
}
