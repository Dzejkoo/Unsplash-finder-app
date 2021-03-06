import {
    Gallery
} from "./gallery";

class Models {
    constructor() {
        this.apiUrl = 'https://api.unsplash.com/'
        this.apiKey = 'ujAeYpJ3CH0yUrvTA4u8xlRL2BxqXpY4jj_uEUew8h0'
        this.gallery = new Gallery()
        this.getModelsPhotoFromApi();
    }
    async getModelsPhotoFromApi() {
        const response = await fetch(`${this.apiUrl}/users/domjewel/photos/?client_id=${this.apiKey}`)
        let data = await response.json();
        if (response.status === 200) {
            this.chooseSpecificDimensions(data);
        }
    }
    chooseSpecificDimensions(array) {
        const correctPhoto = array.filter(element => {
            if (element.width < element.height) {
                return element
            }
        });
        const {
            name,
            bio
        } = array[0].user;

        const {
            html
        } = array[0].links


        console.log(name, bio, html)
        this.gallery.setPropertiesPhoto(correctPhoto, name, bio, html)
    }
}
export {
    Models
}