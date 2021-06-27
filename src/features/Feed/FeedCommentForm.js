import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useAuth from '../../hooks/auth/use-auth';
import Loading from '../../components/Loading/Loading';
import { useAddNewFeedComment } from './hooks/use-add-new-feed-comment';

function FeedCommentForm() {
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const { loading, data, error, saveComment } = useAddNewFeedComment(user.id);
  const isValid = comment && comment.length <= 125;

  const handleSubmit = async () => {
    if (!isValid) return;

    saveComment(comment);
  };

  useEffect(() => {
    if (data) {
      setComment('');
    }
    if (error) {
      toast.error(error);
    }
  }, [data, error]);

  return (
    <div className="text-center mt-20">
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Curti demais esse som que ta rolando ai hemmmm"
        className="form-control"
        maxLength={125}
      />
      <br />
      {!loading ? (
        <button
          className="btn btn-primary btn-sm"
          disabled={!isValid}
          onClick={handleSubmit}
        >
          Enviar
        </button>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default FeedCommentForm;
