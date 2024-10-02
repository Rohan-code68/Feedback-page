
const ratingsKey = 'ratingFeed';

export const getLocalStorageRating = ()=>{
  const rawRating = localStorage.getItem(ratingsKey);

      if(!rawRating)  return[];
      return JSON.parse(rawRating)
}

export const setLocalStorageRating = (task)=>{
    return  localStorage.setItem(ratingsKey,JSON.stringify(task));
}

// export default LocalStorage