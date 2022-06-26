import './Form.css';
import { useState } from 'react';

const Form = () => {

const [name, setName] = useState(''),
[nameEmpty, setNameEmpty] = useState(false),
[email, setEmail] = useState(''),
[emailEmpty, setEmailEmpty] = useState(false),
[phoneNumber, setPhoneNumber] = useState(''),
[phoneNumberEmpty, setPhoneNumberEmpty] = useState(false),
[dateOfBirth, setDateOfBirth] = useState(''),
[dateOfBirthEmpty, setDateOfBirthEmpty] = useState(false),
[message, setMessage] = useState(''),
[messageEmpty, setMessageEmpty] = useState(false),

[emailError, setEmailError] = useState('E-mail не может быть пустым'),
[nameError, setNameError] = useState('Поле не может быть пустым'),
[phoneNumberError, setPhoneError] = useState('Поле не может быть пустым'),
[dateOfBirthError, setDateOfBirthError] = useState('Поле не может быть пустым')


const regularPhoneNumber = '/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/';

const nameHandler = (e) => {
  setName(e.target.value)

  const re ='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i';
  if(!re.test(String(e.target.value).toLwerCase())) {
    setEmailError('Некорректный E-mail')
  } else {
    setEmailError('');
  }
}

const outOfInputHandler = (e) => {
  switch(e.target.name) {
    case 'name': 
      setNameEmpty(true)
      break
    case 'email': 
      setEmailEmpty(true)
      break
    case 'phoneNumber':
      setPhoneNumberEmpty(true)
      break
    case 'dateOfBirth': 
      setDateOfBirthEmpty(true)
      break
    case 'message': 
      setMessageEmpty(true)
      break
  }
}

  return (
    <div className="form">
      <form>
        <h1>Form</h1>
        <label>
        {(nameEmpty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
          Имя и Фамилия:
          <input onBlur={e => outOfInputHandler(e)} type="text" name="name" value={name} placeholder="Введите свое имя и фамилию..."/>
        </label>
        <label>
          {(emailEmpty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
          E-mail:
          <input onBlur={e => outOfInputHandler(e)} type="text" name="email" placeholder="Введите свой E-mail..."/>
        </label>
        <label>
        {(phoneNumberEmpty && phoneNumberError) && <div style={{color:'red'}}>{phoneNumberError}</div>}
          Номер телефона в формате +7(___)___ ____:
          <input type="tel" name="phoneNumber" pattern={regularPhoneNumber}/>
        </label>
        <label>
        {(dateOfBirthEmpty && dateOfBirthError) && <div style={{color:'red'}}>{dateOfBirthError}</div>}
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
