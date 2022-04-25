const Task = require("./Task.js")
class DataManager {

    #tasks = {}

    constructor() {

    }

    addTask = (task) => {
        if (task instanceof Task) {
            this.#tasks[this.#generateId()]
            return task
        } else {
            console.error("no niestety parametr w DataManager.addTask() nei jest klasy Taks.")
            return { status: "not ok" }
        }
    }

    getTasks = () => {
        return this.#tasks
    }

    getTask = (id) => {
        if (Object.keys(this.#tasks).includes(id)) {
            return this.#tasks[id]
        } else {
            return { status: "not ok" }
        }
    }

    #generateId = () => {
        return Object.keys(this.#tasks).length
    }
}

module.exports = DataManager