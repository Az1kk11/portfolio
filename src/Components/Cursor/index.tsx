import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={7}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            showSystemCursor
            innerStyle={{
                backgroundColor: '#0072ff'
            }}
            outerStyle={{
                border: '1.5px solid #0072ff'
            }}
            clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'li'
    ]}
        />
    )
}

export default Cursor