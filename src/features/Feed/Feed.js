import './Feed.css';

import getTimeDifference from '../../util/time-difference/time-difference.helper';
import useAuth from '../../hooks/auth/use-auth';
import FeedCommentForm from './FeedCommentForm';
import Loading from '../../components/Loading/Loading';
import { useFeedLoader } from './hooks/use-feed-loader';

function renderList(feed, error) {
  return (
    <div className="feed">
      {error ? (
        <p>Parece que algo deu errado :-(</p>
      ) : (
        feed.map(item => (
          <div key={item.id}>
            <strong>{item.userInfo.name}</strong>
            <span className="time float-right font-size-12 font-italic text-muted">
              {getTimeDifference(item.createdAt)}
            </span>
            <br />
            {item.message}
          </div>
        ))
      )}
    </div>
  );
}

function Feed() {
  // TODO: use routes to get either the authenticated user o the user from url
  const { user } = useAuth();
  const { feed, loading, error } = useFeedLoader(user.id, {
    sorted: true,
    refresh: true,
  });

  return (
    <div className="content">
      <h2 className="content-title">Feed</h2>
      {loading ? <Loading /> : renderList(feed, error)}

      {error || loading ? null : <FeedCommentForm />}
    </div>
  );
}

export default Feed;
