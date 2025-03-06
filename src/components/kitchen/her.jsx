"use client"
import "./her.css"

const kitchen = () => {
  // Add click handlers for the discover buttons
  const handleDiscover = (product) => {
    console.log(`Discovering ${product}`)
    // Here you would typically navigate to a product page or open a modal
    // window.location.href = `/products/${product.toLowerCase()}`;
  }

  return (
    <div className="showcase-container">
      <div className="showcase-header">
        <h1 className="showcase-title">Kitchen Ventilation</h1>
        <p className="showcase-subtitle">permanent and lasting air purification</p>
      </div>

      <div className="products-container">
        <div className="product-card">
          <div className="product-image nomad-image"></div>
          <div className="product-info">
            <h2 className="product-title">TEQOYA Nomad</h2>
            <p className="product-subtitle">for your vehicles</p>
            <button className="discover-button" onClick={() => handleDiscover("TEQOYA Nomad")}>
              DISCOVER
            </button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image t200-image"></div>
          <div className="product-info">
            <h2 className="product-title">TEQOYA T200</h2>
            <p className="product-subtitle">for your bedroom</p>
            <button className="discover-button" onClick={() => handleDiscover("TEQOYA T200")}>
              DISCOVER
            </button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image t450-image"></div>
          <div className="product-info">
            <h2 className="product-title">TEQOYA T450</h2>
            <p className="product-subtitle">for your large quiet rooms</p>
            <button className="discover-button" onClick={() => handleDiscover("TEQOYA T450")}>
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default kitchen

