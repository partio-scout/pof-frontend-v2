import axios, { AxiosResponse } from 'axios';
import { InitialReply } from '../templates/activityTemplate/suggestionsSection/index';
import { SuggestionFromRest } from '../templates/activityTemplate/suggestionsSection/suggestions';

const trimUrl = (url?: string): string => {
  return url?.replace(/\/+$/, '') || '';
};

export const fetchSuggestions = (activityId: number) => {
  console.log('url', `${trimUrl(process.env.GATSBY_API_URL)}/api/activities?${activityId}&populate=*`);

  return axios.get(`${trimUrl(process.env.GATSBY_API_URL)}/api/activities/${activityId}?populate=*`);
};

export const fetchComments = (suggestionId: number[]) => {
  const filters = suggestionId.map((id) => `filters[id][$in]=${id}`).join('&');
  return axios.get(`${trimUrl(process.env.GATSBY_API_URL)}/api/suggestions?${filters}&populate=*`);
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

export const sendSuggestionLike = (suggestionId: number, userId: string): Promise<AxiosResponse<SuggestionFromRest | string>> => {
  return axios.post(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/${suggestionId}/like`, {
    user: userId,
  });
};

export const sendSuggestionUnlike = (suggestionId: number, userId: string): Promise<AxiosResponse<SuggestionFromRest | string>> => {
  return axios.post(`${trimUrl(process.env.GATSBY_API_URL)}/suggestions/${suggestionId}/unlike`, {
    user: userId,
  });
};

export const fetchActivities = (activityIds: number[]) => {
  const query = activityIds.map((id) => `filters[id][$in]=${id}`).join('&');
  return axios.get(`${trimUrl(process.env.GATSBY_API_URL)}/api/activities?${query}&populate[activity_group][populate][logo][populate]=%2A&populate[activity_group]=%2A&populate[age_group]=%2A&populate[educational_objectives]=%2A&populate[leader_skills]=%2A&populate[files]=%2A&populate[preparation_duration]=%2A&populate[group_sizes]=%2A&populate[skill_areas]=%2A&populate[duration]=%2A&populate[locations]=%2A&populate[suggestions][populate]=%2A&populate[logo]=%2A&populate[main_image]=%2A&populate[name]=%2A&populate[description]=%2A&populate[content]=%2A`);
};
