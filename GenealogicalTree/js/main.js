var block = document.getElementById("block");

function createFamilyTreeText(block, obj) {
    block.appendChild(createFamilyTree(obj));
}

function createFamilyTree(obj) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.innerHTML = obj.name;
    if (Array.isArray(obj.children)) {
        for (var i = 0; i < obj.children.length; i++) {
            var child = createFamilyTree(obj.children[i]);
            li.appendChild(child);
            console.log(li.appendChild(child));
        }
    }
    ul.appendChild(li);
    return ul;
}

createFamilyTreeText(block, familyTreeObj);
