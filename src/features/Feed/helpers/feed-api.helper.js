import { mutate } from 'swr';

export function getFeedAPIUrl(userId) {
  return `https://5e76ad67e3fd85001601f470.mockapi.io/user/${userId}/feed`;
}

export const FEED_API_REFRESH_RATE = 15000 * 60;

export function updateFeed(userId) {
  return mutate(getFeedAPIUrl(userId));
}
