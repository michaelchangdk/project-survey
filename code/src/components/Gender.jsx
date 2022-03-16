import React from 'react'

const genderArray = [
    {
        text: 'Female',
        id: 'female',
        value: 'Female',
    },
    {
        text: 'Male',
        id: 'male',
        value: 'Male',
    },
    {
        text: 'Non-binary / Do not wish to disclose',
        id: 'neither',
        value: 'Neither',
    },
]

const Gender = (props) => {
    return (
        <div className="page-container">
        <h2>Please select your gender:</h2>
        <div className="grid" role="form">
        {genderArray.map(({ text, id, value }) => (
            <React.Fragment key={id}>
            <div className="column-1">
                <p>{text}</p>
            </div>
            <div className="column-2 radio-container">
                <label>
                <input 
                    id={id}
                    tabIndex="0" 
                    type="radio" 
                    name="gender" 
                    value={value}
                    onChange={(event) => props.askGender(event.target.value)} 
                />
                <span></span>
                </label>
            </div>
            </React.Fragment>
        ))}
        </div>
        </div>
    )
}

export default Gender