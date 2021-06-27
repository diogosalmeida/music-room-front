import axios from 'axios';
import { useEffect, useState } from 'react';

import { getFeedAPIUrl, updateFeed } from '../helpers/feed-api.helper';

export function useAddNewFeedComment(userId) {
  // setup url
  const feedUrl = getFeedAPIUrl(userId);
  // hook state setup
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // not comment, then ensure default state
    if (!comment) {
      return;
    }

    // start loading!
    const saveComment = async () => {
      // start loading
      setLoading(true);
      // send the actual request
      try {
        const data = await axios.post(feedUrl, { comment });
        // update the data afterwords
        setLoading(false);
        setData(data);
        setComment(null);
      } catch (e) {
        // handle the error
        setError(e.message);
        setLoading(false);
      }

      await updateFeed(userId);
    };
    saveComment();
  }, [feedUrl, userId, comment]);

  return { loading, data, error, saveComment: value => setComment(value) };
}
