import Image from "next/image"

const Collage = ({ images }) => (
  <div className={`collage ${images.length === 3 ? "collage--flipped" : ""}`}>
    {images.map(img => (
      <div className="collage__image-holder" key={img}>
        <Image src={img} alt="" />
      </div>
    ))}

    {images.length !== 3 && (
      <div className="icon">
        <svg width="231" height="240" viewBox="0 0 231 240">
          <path
            d="M95.2664 240L98.6387 148.333L20.2336 197.5L0 162.5L82.6204 120L0 77.5L20.2336 42.5L98.6387 91.6667L95.2664 0H135.734L132.361 91.6667L210.766 42.5L231 77.5L148.38 120L231 162.5L210.766 197.5L132.361 148.333L135.734 240H95.2664Z"
            fill="#ECC462"
          />
        </svg>
      </div>
    )}
  </div>
)

export default Collage
