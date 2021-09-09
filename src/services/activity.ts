import axios from 'axios';

export const sendNewSuggestion = (newSuggestion, activityId: number) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify({ ...newSuggestion, activity: activityId }));
  return axios.post(`${process.env.API_URL}suggestions/new`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const sendNewReply = (newReply, suggestionId: number) => {
  console.log(newReply, suggestionId);
  return axios.post(`${process.env.API_URL}suggestions/${suggestionId}/comment`, newReply);
};
