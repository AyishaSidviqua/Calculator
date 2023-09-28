import React from "react";
import "../Calculator/Calculator.scss"
import { Button } from "primereact/button"
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const Calculator: React.FC = () => {
    return (
        <div className="container-head">
            <div>
                <div className="grid">
                    <div className="col">
                        <Button
                            label="1"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="2"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="3"
                        >
                        </Button>
                    </div>
                </div>
                <div className="grid">
                    <div className="col">
                        <Button
                            label="4"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="2"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="5"
                        >
                        </Button>
                    </div>
                </div>
                <div className="grid">
                    <div className="col">
                        <Button
                            label="6"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="7"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="8"
                        >
                        </Button>
                    </div>
                </div>
                <div className="grid">
                    <div className="col">
                        <Button
                            label="1"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="9"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="0"
                        >
                        </Button>
                    </div>
                </div>
                <div className="grid">
                    <div className="col">
                        <Button
                            label="+"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="2"
                        >
                        </Button>
                    </div>
                    <div className="col">
                        <Button
                            label="3"
                        >
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculator