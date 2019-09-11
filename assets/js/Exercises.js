var xhr = new XMLHttpRequest();
var json;
var url = "http://34.89.83.113:9000/exercises";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        json = JSON.parse(xhr.responseText);
        handleExercises(json)
    }
}

xhr.send();


function handleExercises(data) {

    let exerciseInfo = [];
    let exercisesInfo;

    for (let ex of data) {// Each owner
        exercisesInfo = [];

        exercisesInfo.push(ex.id);
        exercisesInfo.push(ex.name);
        exercisesInfo.push(ex.muscleGroup);
        exercisesInfo.push(ex.description);
        exercisesInfo.push(ex.tutorial);

        exerciseInfo.push(exercisesInfo);
    }
    console.log(exerciseInfo);

    for (let exer of exerciseInfo) {
        buildTable(exer);
    }

}

function buildTable(tableData) {
    
    let tableBody = document.getElementById("tabBod");
    let container;
    let contInner;

    container = document.createElement("tr");
    tableBody.appendChild(container);

    for (let data of tableData) {
        contInner = document.createElement("td");
        if(data.toString().includes("https://")){
            data = "<a href="+data+">Tutorial</a>";
        }else{

        }
        contInner.innerHTML = data;
        container.appendChild(contInner);
    }

    contInner = document.createElement("td");

    let link = "ViewPetsByOwner.html";

    let modifyBtn = "<button class='btn btn-primary' onclick='openForm()'>Modify</button>";

    contInner.innerHTML = modifyBtn;

    container.appendChild(contInner);

}


function eClicked(form) {

    let formObject = {};
    for (let element of form.elements) {
        if (element.value) {
            formObject[element.id] = element.value;
        }
    };

    console.log(formObject);

    return false;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}