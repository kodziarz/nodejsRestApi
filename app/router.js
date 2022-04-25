const path = require("path")
const fs = require("fs")
// załącz controller, utils , tablicę zwierząt

//const utils = require("./utils")
//const controller = require("./controller")

//const viewsPath = path.join(__dirname, "views")
const DataManager = require("./DataManager")
const Task = require("./Task")
const dataManager = new DataManager()


const router = async (request, response) => {

    let requestPromise = new Promise((resolve, reject) => {
        let body = "";

        request.on("data", function (data) {
            console.log("data: " + data)
            body += data.toString();
        })

        request.on("end", function (data) {
            if (body != undefined) {
                let obj = JSON.parse(body)
                resolve(obj)
            } else {
                resolve(null)
            }

        })
    })

    switch (request.method) {
        case "GET":
            switch (true) {
                case request.url == "/api/tasks":
                    response.end(JSON.stringify(dataManager.getTasks()))
                    //dataManager.getTasks()
                    break
                case request.url.match("/\/api\/tasks\/([0-9]+)/"):
                    let id = request.url.split("/")[3]
                    request.end(JSON.parse(dataManager.getTask(id)))
                    break
            }


        case "POST":

            switch (true) {
                case request.url == "/api/tasks":
                    //console.log("otzymana promisa: ", await requestPromise);
                    response.end(JSON.stringify(
                        dataManager.addTask(
                            new Task(await requestPromise))))
                    break
            }

            break;
        case "PATCH":

            break

    }
}

module.exports = router
