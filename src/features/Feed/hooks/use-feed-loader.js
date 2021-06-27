import useSWR from 'swr';

import fetcher from '../../../util/fetcher/fetcher';
import {
  FEED_API_REFRESH_RATE,
  getFeedAPIUrl,
} from '../helpers/feed-api.helper';

/**
 * Loads feed list
 *
 * @param {{sorted?: boolean, refresh?: boolean}} options
 * @returns {{feed: [{id: string, createdAt: string, message: string, userInfo: { name: string }}], error: any, loading: boolean}}
 */
export function useFeedLoader(userId, options = {}) {
  const { data, error } = useSWR(getFeedAPIUrl(userId), fetcher, {
    refreshInterval: options.refresh ? FEED_API_REFRESH_RATE : 0,
  });
  let feed = Array.isArray(data) ? data : [];
  if (options.sorted) {
    feed = feed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return {
    error,
    feed,
    loading: !error && !data,
  };
}
