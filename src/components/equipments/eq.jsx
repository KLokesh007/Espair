"use client"
import "./equip.css"

const Equipments = () => {
  // Add click handlers for the discover buttons
  const handleDiscover = (product) => {
    console.log(`Discovering ${product}`)
    // Here you would typically navigate to a product page or open a modal
    // window.location.href = `/products/${product.toLowerCase()}`;
  }

  return (
    <div className="equipments-container">
      <div className="equipments-header">
        <h1 className="equipments-title">Air Equipments</h1>
        <p className="equipments-subtitle">permanent and lasting air purification</p>
      </div>

      <div className="equipments-products">
        <div className="equipments-card">
          <div className="equipments-image nomad-image2"></div>
          <div className="equipments-info">
            <h2 className="equipments-product-title">TEQOYA Nomad</h2>
            <p className="equipments-product-subtitle">for your vehicles</p>
            <button className="equipments-button" onClick={() => handleDiscover("TEQOYA Nomad")}>
              DISCOVER
            </button>
          </div>
        </div>

        <div className="equipments-card">
          <div className="equipments-image t200-image2"></div>
          <div className="equipments-info">
            <h2 className="equipments-product-title">TEQOYA T200</h2>
            <p className="equipments-product-subtitle">for your bedroom</p>
            <button className="equipments-button" onClick={() => handleDiscover("TEQOYA T200")}>
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equipments;
