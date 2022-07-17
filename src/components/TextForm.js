import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted To Uppercase', 'success');
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted To Lowercase', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showAlert('Text Cleared', 'success');
  };
  const handleCapitalize = () => {
    let wordsArray = text.toLowerCase().trim().split(' ');
    let capsArray = [];

    wordsArray.forEach((word) => {
      capsArray.push(word[0].toUpperCase() + word.slice(1));
    });

    setText(capsArray.join(' '));
    props.showAlert('Captialized', 'success');
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      props.showAlert('Speaking.....', 'success');

      window.speechSynthesis.speak(msg);
    } else {
      alert("Sorry, your browser doesn't support text to speech!");
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === 'light' ? 'dark' : 'light'
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control`}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            id="myBox"
            rows="8"
            value={text}
            placeholder="Enter Text Here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowwerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpeak}>
          Speak
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === 'light' ? 'dark' : 'light'
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').length} Words And {text.length} Characters
        </p>
        <p> {0.008 * text.split(' ').length} Mintues Read </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Start Typing To View Preview'}</p>
      </div>
    </>
  );
}
