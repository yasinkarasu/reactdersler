import React from 'react';

export const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

function Login() {
  //fragment
  return (
    <form>
      <div>
        <p>kullanıcı adı</p>
        <input type="text" name="username" />
      </div>
      <div>
        <p>şifre</p>
        <input type="password" name="password" />
      </div>
      <br />
      <button type="submit">Giriş Yap</button>
      <br /><br />
      <button type="reset">Temizle</button>
    </form>
  );
}

export default Login;