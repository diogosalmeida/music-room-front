import React, { useState } from 'react';

function Queue() {
    const listLinks = []
    let [link, setLink] = useState();



    return (
        <div className="content">
            <form className="form-inline">
                <label className="required">Link Video</label>
                <input type="text" className="form-control" placeholder="Link do video" id="if-0-full-name" required="required"></input>
                <button className="btn btn-sm" onClick={() => setLink(link = "Diogo",
                    listLinks.push(link))}>Enviar</button>
            </form>


            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th className="text-right">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td className="text-right">25</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Jane</td>
                        <td>Violet</td>
                        <td className="text-right">27</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Jack</td>
                        <td>Gates</td>
                        <td className="text-right">33</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Queue;