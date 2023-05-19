import React from 'react';
import { Link } from 'react-router-dom';
import SendMail from '../sendMail/SendMail';

const Navbar = () => {
  return (
    <div>
      <span>
        <ul>
            <li>
                <Link to='/inbox' >Inbox</Link>
            </li>
            <li>
                <Link to='/sent'>Sent</Link>
            </li>
            <li>
                <Link to='/draft'>Drafts</Link>
            </li>
            <li>
                <Link to='/trash'>Trash</Link>
            </li>
            <li>
                <Link to='/compose'>Compose</Link>
            </li>
            <li>
                <button>signout</button>
            </li>

        </ul>

        
      </span>
      <span>
      
      </span>
    </div>
  );
}

export default Navbar;
