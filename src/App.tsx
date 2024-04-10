import ModelEditor from "./components/EditForm/ModelEditor";

ModelEditor; // Путь к компоненту ModelEditor

const App = () => {
    const params = [
        { id: 1, name: "Param1", type: "text" },
        { id: 2, name: "Param2", type: "text" },
    ];

    const initialModel = {
        paramValues: [
            { paramId: 1, value: "Initial Value 1" },
            { paramId: 2, value: "Initial Value 2" },
        ],
    };

    return (
        <div>
            <ModelEditor params={params} model={initialModel} />
        </div>
    );
};

export default App;
