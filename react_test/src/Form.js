import logo from './logo.svg';
import './Form.css';
import { useState } from 'react';

const Form = () => {

const [email, setEmail] = useState(''),
[password, setPassword] = useState(''),
[emailEmpty, setEmailEmpty] = useState(false),
[passwordEmpty, setPasswordEmpty] = useState(false),
[emailError, setEmailError] = useState('E-mail не может быть пустым'),
[passwordError, setPasswordError] = useState('Пароль не может быть пустым')

  return (
    <div>
      <form>
      <label>
        Имя:
        <input type="text" name="name" />
      </label>
      <label>
        Фамилия:
        <input type="text" name="name" />
      </label>
      <label>
        E-mail:
        <input type="text" name="name" />
      </label>
      <label>
        Номер телефона:
        <input type="text" name="name" />
      </label>
      <label>
        Дата рождения:
        <input type="text" name="name" />
      </label>
      <label>
        Сообщение:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Отправить" />
    </form>
    </div>
  );
}

export default Form;
