import React, { useState } from "react";

import styles from "./ModelEditor.module.css";

interface Param {
    id: number;
    name: string;
    type: string;
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

const ModelEditor: React.FC<Props> = ({ params, model }) => {
    const [paramValues, setParamValues] = useState<ParamValue[]>(
        model.paramValues
    );

    const handleParamChange = (paramId: number, value: string) => {
        const updatedValues = paramValues.map((param) =>
            param.paramId === paramId ? { ...param, value } : param
        );
        setParamValues(updatedValues);
    };

    const getModel = () => {
        return { paramValues };
    };

    return (
        <div className={styles["editor"]}>
            <h2>Model Editor</h2>
            {params.map((param) => (
                <div key={param.id}>
                    <label>{param.name}:</label>
                    <input
                        type="text"
                        value={
                            paramValues.find((pv) => pv.paramId === param.id)
                                ?.value || ""
                        }
                        onChange={(e) =>
                            handleParamChange(param.id, e.target.value)
                        }
                    />
                </div>
            ))}
            <button onClick={() => console.log(getModel())}>Get Model</button>
        </div>
    );
};

export default ModelEditor;
