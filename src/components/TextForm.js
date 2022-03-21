import React, { useState } from 'react'
import '../css/TextForm.css';

export default function TextForm(props) {
    document.title="TextUtils - Form";
    const checkText = () => {
        if (text.length === 0) {
            props.showAlert("Please Enter Text", "danger");
            return false;
        }
        return true;
    }
    const UpClick = () => {
        if (checkText()) {
            setText(text.toUpperCase())
            props.showAlert("Converted To Uppercase", "success");
        }

    }
    const handleChangeClick = (event) => {
        setText(event.target.value);
    }
    const LowerClick = () => {
        if (checkText()) {
            setText(text.toLowerCase());
            props.showAlert("Converted To Lowercase", "success");
        }
    }
    const CapitalizeClick = () => {
        if (checkText()) {
            var str = text.toLowerCase().split(" ");
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
            }
            setText(str.join(" "));
            props.showAlert("Converted To Capitalize Word", "success");

        }
    }
    const ClearClick = () => {
        if (checkText()) {
            setText("");
            props.showAlert("Cleared Text", "success");
        }
    }
    const removeExtraSpace = () => {
        if (checkText()) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed Extra Spaces", "success");
        }
    }
    const CopyClick = () => {
        if (checkText()) {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied To Clipboard", "success");
        }
    }

    const [text, setText] = useState("");
    const countWord = () => {
        return text.replace(/[\t\n\r]/gm, " ").split(' ')
            .filter((n) => n !== '').length;
    }
    return (
        <>
            <div className='container'>
                <form>
                    <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter Text Here' className="form-control" onChange={handleChangeClick} value={text} rows="8" id="textArea" />
                    </div>
                </form>
                <button className="btn btn-primary mx-2" onClick={UpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={LowerClick}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={CapitalizeClick}>Capitalize</button>
                <button className="btn btn-primary mx-2" onClick={ClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={CopyClick}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Text Summary</h1>
                <p> {text.split('\n').length} lines, {countWord()} words and {text.length} characters</p>
            </div>
        </>
    )
}
