export const menuDisplayHandler = (state, cb) => {
  !state ? cb(true) : cb(false);
};
