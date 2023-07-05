import React, {useContext, useEffect} from "react";
import {DataContext} from "../../DataContext";

const SettingsCategory = ({setCategory}) => {
    const {data, setData} = useContext(DataContext);

    const categoryURL = "https://opentdb.com/api_category.php";

    useEffect(() => {
        fetch(categoryURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => setData(data.trivia_categories))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {!data && <div>Loading data</div>}
            {data && (
                <select
                    name="category"
                    id="category"
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="" disabled hidden>
                        Choose category
                    </option>
                    {data.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            )}
        </>
    );
};

export default SettingsCategory;