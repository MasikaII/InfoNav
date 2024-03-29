import { useState } from 'react'


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


return (
  <div className='sign-in-container'>
    <form onSubmit={signIn}>
      <h1>Log In</h1>
      <input type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      ></input>
      <input type="password" placeholder="Enter your password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
      <button type="submit">Log in</button>
    </form>
  </div>
);
};

export default Signin