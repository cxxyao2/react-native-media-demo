import Search from "@/search/[query]";

const homeSharpIcon = require('@/assets/icons/home-sharp.png');
const homeOutlineIcon = require('@/assets/icons/home-outline.png');
const informationOutlineIcon = require('@/assets/icons/information-outline.png');
const informationSharpIcon = require('@/assets/icons/information-sharp.png');
const closeIcon = require('@/assets/icons/close.png');
const saveIcon = require('@/assets/icons/save.png');
const undoIcon = require('@/assets/icons/undo.png');
const bookmarkIcon = require('@/assets/icons/bookmark.png');
const plusIcon = require('@/assets/icons/plus.png');
const profileIcon = require('@/assets/icons/profile.png');
const eyeIcon = require('@/assets/icons/eye.png');
const eyeHideIcon = require('@/assets/icons/eyehide.png');
const searchIcon = require('@/assets/icons/search.png');

const logoWhiteImage = require('@/assets/images/logo-white.jpg');
const logoBlackImage = require('@/assets/images/logo-black.png');
const cardsImage = require('@/assets/images/night-scape.jpg');
const pathImage = require('@/assets/images/arrow.png');
const avatarImage = require('@/assets/images/avatar.jpg');


const images = {
  logoWhite: logoWhiteImage,
  logoBlack: logoBlackImage,
  cards: cardsImage,
  path: pathImage,
  avatar: avatarImage
};


const icons = {
  homeSharp: homeSharpIcon,
  homeOutline: homeOutlineIcon,
  informationOutline: informationOutlineIcon,
  informationSharp: informationSharpIcon,
  close: closeIcon,
  save: saveIcon,
  undo: undoIcon,
  bookmark: bookmarkIcon,
  plus: plusIcon,
  profile: profileIcon,
  eye: eyeIcon,
  eyeHide: eyeHideIcon,
  Search: searchIcon
};

export { images, icons }