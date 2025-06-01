import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DynamicForm from './DynamicForm';

const Display = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    // Handler for DynamicForm submission
    const handleFormSubmit = (formData) => {
        dispatch({
            type: 'ADD_DATA',
            payload: {
                name: formData.name,
                age: formData.age,
                email: formData.email,
                comments: formData.comments
            }
        });
    };

    return (
        <div className="display-container">
            <div className="display-body">
                {data.map((item, idx) => (
                    <div className="display-item" key={idx} style={{
                        marginBottom: '1.5rem',
                        padding: '1rem',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        background: '#fafafa'
                    }}>
                        {Object.entries(item).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {String(value)}
                            </div>
                        ))}
                    </div>
                ))}
                {/* Replace old form with DynamicForm */}
                <DynamicForm onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
}

export default Display;