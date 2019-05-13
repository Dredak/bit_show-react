class Show {
    constructor(id, name, img, rating) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.rating = rating;
    }
    getData() {
        return `${this.id} ${this.name} ${this.rating}`
    }
}

export default Show;