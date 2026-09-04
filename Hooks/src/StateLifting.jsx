import React, { useState } from 'react'
import Card from './components/Card'

const StateLifting = () => {
    const [name, setName] = useState("");
    return (
        <>
            <div className='flex item-center justifi-center gap-10'>
                <Card title="Cart1" name={name} setName={setName} />
                <Card title="Cart2" name={name} setName={setName} />
                <p>This is in parent compponent :{name}</p>
            </div>
        </>
    )
}

export default StateLifting