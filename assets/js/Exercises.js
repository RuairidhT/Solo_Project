function populateTable() {

    makeRequest("http://34.89.83.113:9000/exercises").then((data) => {
        console.log(data);

        let exData = JSON.parse(data);

        let exerciseInfo = [];
        let exercisesInfo;

        for (let ex of exData) {
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
    let id = 0;
    for (let element of form.elements) {
        if (element.name === "id") {
            id = element.value;
        } else {
            formObject[element.name] = element.value;
        }
    };

    makeRequest("http://34.89.83.113:9000/exercises/" + id, formObject, "PUT")
        .then((data) => {
            console.log("it Worked!" + data);

            $('#updateFunctionality').modal('hide');
            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        });


    return false;

}


function deleteExercise() {

    var id = document.getElementById("inputID").value;

    makeRequest("http://34.89.83.113:9000/exercises/", id, type = "DELETE")
        .then((data) => {
            console.log("Deleted" + data);
            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        });

}

function addExercise(data) {

    var formDataObj = {};

    for (let element of data) {
        if (element.name) {
            formDataObj[element.name] = element.value;
        }
    }

    makeRequest("http://34.89.83.113:9000/exercises/", formDataObj, type = "POST")
        .then((data) => {
            console.log("it Worked!" + data);

            $('#exampleModalCenter').modal('hide');
            $('.modal').on('hidden.bs.modal', function() {
                $(this).find('form')[0].reset();
            });

            window.location.href = window.location.href;
        })
        .catch((data) => {
            console.log("It failed!" + data);
        })

    console.log(formDataObj);



    return false;
}


function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBod");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}