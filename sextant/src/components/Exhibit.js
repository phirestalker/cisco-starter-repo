import React from 'react';
import './Exhibit.css';

export default function Exhibit({name, children}) {
    return (
        <div className="Exhibit">
            <div className="Exhibit-header">{name}</div>
            <div className="Exhibit-children">
                {children}
            </div>
        </div>
    );
    
}

