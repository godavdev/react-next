"use client"
import React, { useState } from 'react'

const Post = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>
                {counter}
            </button>
        </div>
    )
}

export default Post