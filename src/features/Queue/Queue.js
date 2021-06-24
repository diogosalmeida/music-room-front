import './Queue.css';

function Queue() {
  return (
    <div className="content">
      <form className="form-inline">
        <label className="required">Link Video</label>
        <input
          type="text"
          className="form-control"
          placeholder="Link do video"
          id="if-0-full-name"
          required="required"
        ></input>
        <button className="btn btn-sm">Enviar</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th className="text-right">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td className="text-right">25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Queue;
