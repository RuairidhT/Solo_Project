function populateTable() {

    makeRequest("http://34.89.83.113:9000/exercises").then((data) => {
        console.log(data);

        let exData = JSON.parse(data);

        let exerciseInfo = [];
        let exercisesInfo;

        for (let ex of exData) { // Each owner
            exercisesInfo = [];

            exercisesInfo.push(ex.id);
            exercisesInfo.push(ex.name);
            exercisesInfo.push(ex.muscleGroup);
            exercisesInfo.push(ex.description);
            exercisesInfo.push(ex.tutorial);

            exerciseInfo.push(exercisesInfo);
        }

        for (let exer of exerciseInfo) {
            let tableBody = document.getElementById("tabBod");
            let contInner;

            let container = document.createElement("tr");
            tableBody.appendChild(container);

            for (let data of exer) {
                contInner = document.createElement("td");
                if (data.toString().includes("https://")) {

                    var newString = data.replace("watch?v=", "embed/");
                    data = "<iframe width='220' height='145' src=" + newString + " allowfullscreen='allowfullscreen'></iframe>";

                    // data = "<a href=" + data + ">Tutorial</a>";
                } else {

                }
                contInner.innerHTML = data;
                container.appendChild(contInner);
            }

            contInner = document.createElement("td");

            let modifyBtn = `<button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter" onclick='populateModal("${exer[0]}","${exer[1]}","${exer[2]}","${exer[3]}","${exer[4]}")'>Modify</button>`;

            contInner.innerHTML = modifyBtn;

            container.appendChild(contInner);
        }

    });
}

function eClicked(form) {

    let formObject = {};
    for (let element of form.elements) {
        if (element.value) {
            formObject[element.id] = element.value;
        }
    };

    return false;
}

function populateModal(id, name, mGroup, description, tutorial) {

    document.getElementById('inputID').value = id;
    document.getElementById('inputName').value = name;
    document.getElementById('inputGroup').value = mGroup;
    document.getElementById('inputDesc').value = description;
    document.getElementById('inputTutorial').value = tutorial;
}

function updateExercise(form) {

    let formObject = {};
    for (let element of form.elements) {
        if (element.value) {
            formObject[element.name] = element.value;
        }
    };

    console.log(formObject);


    return false;

}


function deleteExercise() {

    var id = document.getElementById("inputID").value;

    console.log(id + " deleted");

}