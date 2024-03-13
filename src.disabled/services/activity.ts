import axios from 'axios';
import { InitialReply } from '../templates/activityTemplate/suggestionsSection/index';

const trimUrl = (url?: string): string => {
  return url?.replace(/\/+$/, '') || '';
};

export const fetchSuggestions = (activityId: number, locale: string) => {
  return axios.get(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions?activity.id=${activityId}&_locale=${locale}`);
};

export const fetchComments = (suggestionId: number) => {
  return axios.get(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/${suggestionId}`);
};

export const sendNewSuggestion = (
  newSuggestion: any,
  activityId: number,
  attachedFile: File | null,
  locale: string,
) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify({ ...newSuggestion, activity: activityId, locale }));
  if (attachedFile) {
    formData.append('files.files', attachedFile);
  }
  return axios.post(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/new`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const sendNewReply = (newReply: InitialReply, suggestionId: number) =>
  axios.post(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/${suggestionId}/comment`, newReply);

export const sendSuggestionLike = (suggestionId: number, userId: string) => {
  return axios.post(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/${suggestionId}/like`, {
    user: userId,
  });
};

export const sendSuggestionUnlike = (suggestionId: number, userId: string) => {
  return axios.post(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/${suggestionId}/unlike`, {
    user: userId,
  });
};

export const fetchActivities = (activityIds: string[], locale: string) => {
  const query = activityIds.map((id) => `id_in=${id}`).join('&');
  return axios.get(`${trimUrl(process.env.GATSBY_API_URL)}/activities?${query}&_locale=${locale}`);
};
