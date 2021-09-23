import './src/styles/global.css';

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // If query parameter "tip" exists, we don't want to scroll anywhere 
  // because activity-page does its own scrolling 
  if (!location.search.includes('tip=')) {
    const currentPosition = getSavedScrollPosition(location);

    window.scrollTo(...(currentPosition || [0, 0]));
  }

  return false;
};
