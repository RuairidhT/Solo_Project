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

        let tableBody = document.getElementById("tabBod");
        let contInner;

        let container = document.createElement("tr");
        tableBody.appendChild(container);

        for (let exer of exerciseInfo) {
            let tableBody = document.getElementById("tabBod");
            let contInner;

            let container = document.createElement("tr");
            tableBody.appendChild(container);

            for (let data of exer) {
                contInner = document.createElement("td");
                if (data.toString().includes("https://")) {

                    var newString = data.replace("watch?v=", "embed/");
                    console.log(newString);
                    data = "<iframe width='220' height='145' src=" + newString + " allowfullscreen='allowfullscreen'></iframe>";

                    // data = "<a href=" + data + ">Tutorial</a>";
                } else {

                }
                contInner.innerHTML = data;
                container.appendChild(contInner);
            }

            contInner = document.createElement("td");

            let modifyBtn = "<button class='btn btn-primary' onclick='openForm()'>Modify</button>";

            contInner.innerHTML = modifyBtn;

            container.appendChild(contInner);
        }

    });
}


// function buildTable(tableData) {

//     let tableBody = document.getElementById("tabBod");
//     let contInner;

//     let container = document.createElement("tr");
//     tableBody.appendChild(container);

//     for (let data of tableData) {
//         contInner = document.createElement("td");
//         if (data.toString().includes("https://")) {

//             var newString = data.replace("watch?v=", "embed/");
//             console.log(newString);
//             data = "<iframe width='220' height='145' src=" + newString + " allowfullscreen='allowfullscreen'></iframe>";

//             // data = "<a href=" + data + ">Tutorial</a>";
//         } else {

//         }
//         contInner.innerHTML = data;
//         container.appendChild(contInner);
//     }

//     contInner = document.createElement("td");

//     let modifyBtn = "<button class='btn btn-primary' onclick='openForm()'>Modify</button>";

//     contInner.innerHTML = modifyBtn;

//     container.appendChild(contInner);

// }


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