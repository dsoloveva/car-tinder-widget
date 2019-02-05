const initialState = [
  { img: 'birds.jpg', tags: ['birds'] },
  { img: 'cats.jpg', tags: ['cats', 'birds'] },
  { img: 'coffee.jpg', tags: ['coffee'] },
  { img: 'cycling.jpg', tags: ['cycling', 'birds'] }
];

export default (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}