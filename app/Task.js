class Task {
    id
    title
    description
    completed

    constructor(valuesObject) {
        //this.id = valuesObject.id
        this.title = valuesObject.title != undefined ? valuesObject.title : console.error("W konstruktorze obiektu klasu Task nie ma pola title")
        this.description = valuesObject.description != undefined ? valuesObject.description : console.error("W konstruktorze obiektu klasu Task nie ma pola description")
        this.completed = valuesObject.completed != undefined ? valuesObject.completed : console.error("W konstruktorze obiektu klasu Task nie ma pola completed")
    }

}

module.exports = Task