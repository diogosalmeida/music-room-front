import './App.css';
import Feed from './components/feed/Feed';
import Queue from './components/queue/Queue';
import Iframe from './components/iframe/Iframe';


function App() {

  const sobre = "Um pouco sobre mim"

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <div className="w-500 mw-full">
              <div className="card">
                <img src="https://sm.ign.com/ign_br/screenshot/default/agos_ye78.jpg" className="img-fluid" alt="" />
                <div className="content">
                  <h2 className="content-title">
                    {sobre}
                  </h2>
                  <p>
                  This textarea is read-only, so it can not be edited by the user. It can only be read.
                  </p>
                </div>
                <hr />
              </div>
            </div>

          </div>
          <div className="col-sm">
            <Feed />
          </div>
          <div className="col-sm">
            <Queue />
            <Iframe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
