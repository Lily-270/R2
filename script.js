var button = document.querySelector("button");
var input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);
var count = 0;
var li = document.createElement('li');
while (count < 1) {
    input.addEventListener("change", function buttonClicked() {
        li.innerText = input.value;
        document.body.appendChild(li);
        if (li.innerText = input.value) {
            var h4=document.createElement('h4');
            h4.innerText="Check if done:";
            document.body.appendChild(h4);
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            document.body.appendChild(checkbox);
        }
        li = document.createElement('li');
    });
    count++;
};



