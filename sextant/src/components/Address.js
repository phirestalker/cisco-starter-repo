import React from 'react';
import { useState } from 'react';
import './Address.css'

export default function Address({ipType = 4}) {
    
    const [ipAddress, setIpAddress] = useState('');
    const url = (ipType === 4 ? 'https://api.ipify.org?format=json' : 'https://api64.ipify.org?format=json')

    fetch(url)
        .then((response) => response.json())
        .then((data) => setIpAddress(data.ip));
    return (
        <span className='Exhibit-item'>{ipAddress}</span>
    );

}

