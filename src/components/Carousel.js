function Carousel() {

    let carouselImage = {
        height: "40vw",
        objectFit: 'cover'
    }

  return (
    <>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="d-block w-100" alt="..." style={carouselImage} />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" className="d-block w-100" style={carouselImage} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" style={carouselImage} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true">
      <span className="visually-hidden">Previous</span>
    </span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true">
      <span className="visually-hidden">Next</span>
    </span>
  </button>
</div>

    </>
  );
}

export default Carousel;
