import { LIKE, DISLIKE, PROCESS } from '../constants/actions';

const imagesCount = 6;

const getRandomImages = (n) => {
  const array = [
    { img: "birds.jpg", tags: ["birds", "family"] },
    { img: "cats.jpg", tags: ["cats"] },
    { img: "coffee.jpg", tags: ["restaurants", "beer"] },
    { img: "cycling.jpg", tags: ["sport", "sporty", "nature"]},
    { img: "dogs.jpg", tags: ["dogs"] },
    { img: "family.jpg", tags: ["family", "nature"] },
    { img: "fastfood.jpg", tags: ["fastfood", "cola"] },
    { img: "fitness.jpg", tags: ["sport", "sporty"] },
    { img: "healthfood.jpg", tags: ["homefood", "restaurants"] },
    { img: "listenmusic.jpg", tags: ["pop", "casual"] },
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
  const s = array.sort(() => 0.5 - Math.random());
  return s.slice(0, n);
};

const initialState = getRandomImages(imagesCount);

export default (state = initialState, action) => {
  switch(action.type) {
    case LIKE:
      return state.map(item => ({
        ...item,
        status: action.item === item.img ? 'like' : item.status,
      }));
    case DISLIKE:
      return state.map(item => ({
        ...item,
        status: action.item === item.img ? 'dislike' : item.status,
      }));
    case PROCESS:
      return state.filter(item => action.item !== item.img);
    default: 
      return state;
  }
}