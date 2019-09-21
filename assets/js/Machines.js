function populateTable() {

    makeRequest("http://34.89.83.113:9000/machines").then((data) => {
        console.log(data);

        let machData = JSON.parse(data);

        let machineInfo = [];
        let machinesInfo;

        for (let mach of machData) {
            machinesInfo = [];

            machinesInfo.push(mach.id);
            machinesInfo.push(mach.name);
            machinesInfo.push(mach.description);

            machineInfo.push(machinesInfo);
        }

        for (let machine of machineInfo) {
            let tableBody = document.getElementById("tableBod");
            let contInner;

            let container = document.createElement("tr");
            tableBody.appendChild(container);

            for (let data of machine) {
                contInner = document.createElement("td");
                if (data == machine[1]) {
                    data = `<button type="button" class="link" data-toggle="modal" data-target=".bd-example-modal-xl" onclick='getExercises("${machine[0]}","${machine[1]}")'>${machine[1]}</button>`;
                }
                contInner.innerHTML = data;
                container.appendChild(contInner);
            }

            contInner = document.createElement("td");

            let modifyBtn = `<button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter" onclick='populateModal("${machine[0]}","${machine[1]}","${machine[2]}")'>Modify</button>`;

            contInner.innerHTML = modifyBtn;

            container.appendChild(contInner);
        }

    });
}

function populateModal(id, name, description) {

    document.getElementById('inputID').value = id;
    document.getElementById('inputName').value = name;
    document.getElementById('inputDesc').value = description;
}


function updateMachine(form) {

    let formObject = {};
    let id = 0;
    for (let element of form.elements) {
        if (element.name === "id") {
            id = element.value;
        } else {
            formObject[element.name] = element.value;
        }
    };

    makeRequest("http://34.89.83.113:9000/machines/" + id, formObject, "PUT")
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

function deleteMachine() {

    var id = document.getElementById("inputID").value;

    makeRequest("http://34.89.83.113:9000/machines/", id, type = "DELETE")
        .then((data) => {
            console.log("Deleted" + data);
            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        });
}

function addMachine(data) {

    var formDataObj = {};

    for (let element of data) {
        if (element.name) {
            formDataObj[element.name] = element.value;
        }
    }

    makeRequest("http://34.89.83.113:9000/machines/", formDataObj, type = "POST")
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

        td = tr[i].getElementsByTagName("td");

        if (td.length > 0) { // to avoid th

            if (td[0].innerHTML.toUpperCase().indexOf(filter) > -1 || td[1].innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }

        }
    }
}

function getExercises(id, machineName) {
    $("#tabBod").empty();
    makeRequest("http://34.89.83.113:9000/machine-exercise/", id)
        .then((data) => {
            console.log("got it!" + data);

            modalheader.innerText = machineName;

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
                    }
                    contInner.innerHTML = data;
                    container.appendChild(contInner);
                }
                contInner = document.createElement("td");

                let modifyBtn = `<button class="deleteButton" onclick='deleteExerMach("${exer[0]}")'>x</button>`;

                contInner.innerHTML = modifyBtn;

                container.appendChild(contInner);
            }

        })
        .catch((data) => {
            console.log("It failed!" + data);
        });
}


function deleteExerMach(id) {

    makeRequest("http://34.89.83.113:9000/exerciseMachine/", id, type = "DELETE")
        .then((data) => {
            console.log("Deleted" + data);

            $("a[data-target=#myExtraLargeModalLabel]").click(function(ev) {
                ev.preventDefault();
                var target = $(this).attr("href");

                // load the url and show modal on success
                $("#myExtraLargeModalLabel .modal-body").load(target, function() {
                    $("#myExtraLargeModalLabel").modal("show");
                });
            });

        })
        .catch((data) => {
            console.log("It failed!" + data);
        });

}