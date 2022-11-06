import { TextField } from "@material-ui/core";
import React from "react";
import "./inputArea.css";


class MyForm1 extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        return (
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
                        defaultValue=
{`Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis

Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque
                        
Varius vel pharetra vel turpis nunc eget lorem dolor sed viverra`}
                        margin='normal'
                    />
                </div>
            </div>
        );
    };
}


export default MyForm1;