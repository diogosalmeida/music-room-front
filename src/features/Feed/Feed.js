import './Feed.css';
function Feed() {
  return (
    <div className="content">
      <h2 className="content-title">Feed</h2>
      <div id="feed">
        <div>
          <strong>Brunão</strong>
          <br />
          Musica boa
        </div>
        <hr />
        <div>
          <strong>Vivi</strong>
          <br />
          Toca barões
        </div>
        <hr />
        <div>
          <strong>Diogo Almeida</strong>
          <br />
          Disney
        </div>
        <hr />
        <div>
          <strong>Diogo Almeida</strong>
          <br />
          Disney
        </div>
        <hr />
        <div>
          <strong>Diogo Almeida</strong>
          <br />
          Disney
        </div>
        <hr />
        <div>
          <strong>Diogo Almeida</strong>
          <br />
          Disney
        </div>
        <hr />
        <div>
          <strong>Diogo Almeida</strong>
          <br />
          Disney
        </div>
      </div>

      <div className="text-center mt-20">
        <textarea
          defaultValue="Curti demais esse som que ta rolando ai hemmmm"
          className="form-control"
        ></textarea>
        <br />
        <button className="btn btn-sm">Enviar</button>
      </div>
    </div>
  );
}

export default Feed;
