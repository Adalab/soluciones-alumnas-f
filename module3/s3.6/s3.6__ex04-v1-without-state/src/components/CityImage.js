import React from 'react';
import './CityImage.css'

class CityImage extends React.Component {
  constructor(props){
    super(props)

    //Bind my methods
    this.updatePicture = this.updatePicture.bind(this)
  }

  //Attributes of my Class
  myImages = {
    'Buenos Aires' : 'https://images.clarin.com/2018/03/26/Hy3jn0UqG_1256x620__1.jpg',
    'Sydney': 'https://www.travelsecurity.cl/Portals/0/EasyDNNnews/89/sydney.jpg',
    'Praga': 'https://cdn.civitatis.com/republica-checa/praga/galeria/plaza-ciudad-vieja.jpg',
    'Boston': 'https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/TextwithImage-Banners/GettyImages-688776752.jpg/_jcr_content/renditions/cq5dam.web.900.550.jpeg',
    'Tokyo': 'https://globalxnetwork.com/wp-content/uploads/2015/06/tokyo1.jpg' 
  }
  
  //Methods of my Class
  updatePicture(){
    const myCityFromProps = this.props.city;
    const myLink = this.myImages[myCityFromProps];
    return myLink
  }

	render() {
    const {city} = this.props;
    console.log(city)
		// return <img src="myImages[myCity]" alt="" />;
    return(
      <div>
        <img className="city-image" src={this.updatePicture()} alt="imagen"/>
        <h3 className="result-title">City selected: {city}</h3>
      </div>
    )
	}
}

export default CityImage;
