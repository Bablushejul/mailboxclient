import React from 'react';

const SendMail = () => {
  return (
    <div>
    <form>
        <div>
          <label>
            To
            <div>
            <input type='email' />
            </div>
          </label>
        </div>
        <div>
          <label>
            Subject
            <div>
            <input type='text' />
            </div>
          </label>
        </div>
        <div>
          <label>
            Message
            <div>
            <input type='text' />
            </div>
          </label>
        </div>
        <div>
          <button>Send</button>
        </div>
    </form>
    </div>
  );
}

export default SendMail;
