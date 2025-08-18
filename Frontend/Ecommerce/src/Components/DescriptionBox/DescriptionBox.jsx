import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>   
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>This is a modern and easy-to-use online shopping website designed to offer a smooth and enjoyable shopping experience. Visitors can explore a wide range of products under different categories such as Men, Women, and Kids. Each section is organized with attractive banners and a clean layout to help users find what they need quickly.</p>
        <p>An e-commerce website has several useful applications in our daily lives. It allows people to shop online from anywhere and at any time, offering great convenience. Users can browse a wide range of products in different categories, all displayed clearly with images, prices, and descriptions. It also provides home delivery services, so customers can receive their orders without stepping out. Secure payment options like cards, UPI, or cash on delivery make transactions easy and safe. </p> 
      </div>
    </div>
  )
}

export default DescriptionBox
