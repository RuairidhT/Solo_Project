function makeRequest(http, param, type = "GET") {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onload = (data) => {

            if (xhr.status === 200 || xhr.status === 201) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        };

        if (type.toUpperCase() === "POST" || type.toUpperCase() === "PUT") {
            xhr.open(type.toUpperCase(), http);

            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify(param));
        } else {
            if (param == null) {
                xhr.open(type.toUpperCase(), http);
            } else {
                xhr.open(type.toUpperCase(), http + param);
            }
            xhr.send();
        }
    });
}