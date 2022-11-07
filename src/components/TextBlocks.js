import { TextField } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import "./TextBlocks.css";


function TextBlocks() {

    const [firstText, setFirstText] = useState(`Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis

    Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque
                            
    Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra`);

    const [secondText, setSecondText] = useState(`Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis

    Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque
                            
    Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra`);


    function firstHandleChange(event) {
        setFirstText(event.target.value);
    }

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        if (data !== firstText) setFirstText(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(firstText));
    }, [firstText]);


    function secondHandleChange(event) {
        setSecondText(event.target.value);
    }

    useEffect(() => {
        const data = window.localStorage.getItem('MY_SECOND_STATE');
        if (data !== secondText) setSecondText(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('MY_SECOND_STATE', JSON.stringify(secondText));
    }, [secondText]);

    return (

        <div className="text-blocks">

            <div className="field-box">
                <div className="text-heading">
                    <span>Text Box</span>
                </div>
                <div className="text-area">
                    <TextField
                        variant="standard"
                        multiline
                        rows={10}
                        rowsMax={12}
                        fullWidth='true'
                        margin='normal'
                        value={firstText}
                        onChange={firstHandleChange}

                    />
                </div>
            </div>

            <div className="field-box">
                <div className="text-heading">
                    <span>Text Box</span>
                </div>
                <div className="text-area">
                    <TextField
                        variant="standard"
                        multiline
                        rows={10}
                        rowsMax={12}
                        fullWidth='true'
                        margin='normal'
                        value={secondText}
                        onChange={secondHandleChange}

                    />
                </div>
            </div>

        </div>
    );
};



export default TextBlocks;