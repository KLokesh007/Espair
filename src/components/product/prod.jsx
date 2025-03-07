"use client"

import { useRef, useState, useEffect } from "react"
import "./product.css"

const ProductShowcase = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const products = [
    {
      id: 1,
      image: "/placeholder.svg?height=250&width=200",
      title: "Air purifier for vehicles",
      model: "TEQOYA Nomad",
      price: "€169",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=250&width=200",
      title: "Air purifier for bedrooms",
      model: "TEQOYA T200",
      price: "€319",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=250&width=200",
      title: "Air purifier for large rooms",
      model: "TEQOYA T450",
      price: "€459",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=250&width=200",
      title: "Dual technology air purifier",
      model: "TEQOYA E500",
      price: "€649",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=250&width=200",
      title: "Connected air monitor",
      model: "TEQOYA S1",
      price: "€149",
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Check on initial load
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const checkScroll = () => {
      const container = scrollContainerRef.current
      if (!container) return

      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      // Initial check
      checkScroll()
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll)
      }
    }
  }, [isMobile])

  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <section className="product-showcase1">
      <div className="product-navigation-container1">
        {isMobile && (
          <button
            className={`nav-arrow nav-arrow-left ${!showLeftArrow ? "hidden" : ""}`}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            &#10094;
          </button>
        )}

        <div className="product-container1" ref={scrollContainerRef}>
          {products.map((product) => (
            <div className="product-card1" key={product.id}>
              <div className="product-image1">
                <img src={product.image || "/placeholder.svg"} alt={product.title} />
              </div>
              <div className="product-info1">
                <h3 className="product-title1">{product.title}</h3>
                <p className="product-model1">{product.model}</p>
                <p className="product-price1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <button
            className={`nav-arrow nav-arrow-right ${!showRightArrow ? "hidden" : ""}`}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            &#10095;
          </button>
        )}
      </div>
    </section>
  )
}

export default ProductShowcase

