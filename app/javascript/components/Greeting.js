import React, { useEffect, useState } from 'react';

function Greeting() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/greetings/random_greeting')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.greeting);
      })
  }, [])

  return (
      <h1>This is a random greeting: {message}</h1>
    );
}

export default Greeting;