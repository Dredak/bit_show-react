class Show {
    constructor({id, name, image, rating}) {
        this.id = id;
        this.name = name;
        this.img = image.medium;
        this.rating = rating.average;
    }
    getData() {
        return `${this.id} ${this.name} ${this.rating}`
    }
}

export default Show;