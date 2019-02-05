const imagesCount = 6;

const initialState = [
  { img: "birds.jpg", tags: ["birds", "family"] },
  { img: "cats.jpg", tags: ["cats"] },
  { img: "coffee.jpg", tags: ["restaurants", "beer"] },
  { img: "cycling.jpg", tags: ["sport", "sporty", "nature"]},
  { img: "dogs.jpg", tags: ["dogs"] },
  { img: "family.jpg", tags: ["family", "nature"] },
  { img: "fastfood.jpg", tags: ["fastfood", "cola"] },
  { img: "fitness.jpg", tags: ["sport", "sporty"] },
  { img: "healthfood.jpg", tags: ["homefood", "restaurants"] },
  { img: "listenmusic", tags: ["pop", "casual"] },
  { img: "pizza.jpg", tags: ["fastfood"] },
  { img: "plants.jpg", tags: ["nature"] },
  { img: "reading.jpg", tags: ["reading", "casual"] },
  { img: "running.jpg", tags: ["sport", "sporty", "running"] },
  { img: "seafood.jpg", tags: ["restaurants", "travel"] },
  { img: "serfing.jpg", tags: ["travel", "sporty"] },
  { img: "snowboarding.jpg", tags: ["sport", "sporty", "nature"] },
  { img: "swimming.jpg", tags: ["swimming", "adventure"] },
  { img: "travel.jpg", tags: ["travel" ]},
  { img: "walking.jpg", tags: ["nature", "family", "mountains"] },
  { img: "winter.jpg", tags: ["mountains", "nature"] }
];

const getRandomImages = (array, n) => {
  const s = array.sort(() => 0.5 - Math.random());
  return s.slice(0, n);
};

export default (state = getRandomImages(initialState, imagesCount), action) => {
  switch(action.type) {
    default: 
      return state;
  }
}