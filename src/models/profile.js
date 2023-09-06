import img from '../assets/profile.png'

class Profile {
  constructor({ name = '', website = '', imgUrl = '' }) {
    this.name = name
    this.website = website
    this.imgUrl = imgUrl
  }
}

export default new Profile({
  name: 'Sara Doe',
  website: 'Someweb.com',
  imgUrl: img,
})
