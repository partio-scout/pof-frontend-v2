import axios from 'axios';

export const fetchSuggestions = (activityId: number) => {
  return axios.get(`${process.env.API_URL}activities/${activityId}`);
};

export const fetchComments = (suggestionId: number) => {
  return axios.get(`${process.env.API_URL}suggestions/${suggestionId}`);
};

export const sendNewSuggestion = (newSuggestion, activityId: number) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify({ ...newSuggestion, activity: activityId }));
  return axios.post(`${process.env.API_URL}suggestions/new`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const sendNewReply = (newReply, suggestionId: number) =>
  axios.post(`${process.env.API_URL}suggestions/${suggestionId}/comment`, newReply);

export const sendSuggestionLike = (suggestionId: number, userId: string) => {
  console.log('service: ', suggestionId, userId);
  return axios.post(`${process.env.API_URL}suggestions/${suggestionId}/like`, {
    user: userId,
  });
};

export const sendSuggestionUnlike = (suggestionId: number, userId: string) => {
  console.log('service: ', suggestionId, userId);
  return axios.post(`${process.env.API_URL}suggestions/${suggestionId}/unlike`, {
    user: userId,
  });
};
