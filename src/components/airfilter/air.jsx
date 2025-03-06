"use client"
import "./air.css"

const airpurifier = () => {
  // Add click handlers for the discover buttons
  const handleDiscover = (product) => {
    console.log(`Discovering ${product}`)
    // Here you would typically navigate to a product page or open a modal
    // window.location.href = `/products/${product.toLowerCase()}`;
  }

  return (
    <div className="airpurifier-container">
      <div className="airpurifier-header">
        <h1 className="airpurifier-title">Full-scale Ionization</h1>
        <p className="airpurifier-subtitle">permanent and lasting air purification</p>
      </div>

      <div className="airpurifier-products">
        <div className="airpurifier-card">
          <div className="airpurifier-image nomad-image1"></div>
          <div className="airpurifier-info">
            <h2 className="airpurifier-product-title">TEQOYA Nomad</h2>
            <p className="airpurifier-product-subtitle">for your vehicles</p>
            <button className="airpurifier-button" onClick={() => handleDiscover("TEQOYA Nomad")}>
              DISCOVER
            </button>
          </div>
        </div>

        <div className="airpurifier-card">
          <div className="airpurifier-image t200-image1"></div>
          <div className="airpurifier-info">
            <h2 className="airpurifier-product-title">TEQOYA T200</h2>
            <p className="airpurifier-product-subtitle">for your bedroom</p>
            <button className="airpurifier-button" onClick={() => handleDiscover("TEQOYA T200")}>
              DISCOVER
            </button>
          </div>
        </div>

        {/* <div className="airpurifier-card">
          <div className="airpurifier-image t450-image1"></div>
          <div className="airpurifier-info">
            <h2 className="airpurifier-product-title">TEQOYA T450</h2>
            <p className="airpurifier-product-subtitle">for your large quiet rooms</p>
            <button className="airpurifier-button" onClick={() => handleDiscover("TEQOYA T450")}>
              DISCOVER
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default airpurifier
