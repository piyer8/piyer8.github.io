import { useState } from 'react';
import './PasswordGate.css';

const PASSWORD = 'arizona';

function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem('pg_unlocked') === 'true'
  );
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem('pg_unlocked', 'true');
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
    }
  };

  if (unlocked) return children;

  return (
    <div className="pg-backdrop">
      <form className="pg-form" onSubmit={submit}>
        <span className="pg-label">Enter password</span>
        <input
          className={`pg-input${error ? ' pg-input--error' : ''}`}
          type="password"
          value={value}
          autoFocus
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          placeholder="••••••••"
        />
        <button className="pg-btn" type="submit">Enter →</button>
        {error && <span className="pg-error">Incorrect password</span>}
      </form>
    </div>
  );
}

export default PasswordGate;
