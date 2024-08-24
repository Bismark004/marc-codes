
import React from 'react';
import TypingEffect from 'react-typing-effect';

const TypingEffectComponent = () => {
  return (
    <div>
      <TypingEffect
        text={['a Software Engineer', 'a Technical Writer', 'a Fullstack Developer']}
        speed={100} 
        eraseDelay={1000} 
        eraseSpeed={50} 
        typingDelay={500} 
        textStyle={{ color: 'blue'}}
      />
    </div>
  );
};

export default TypingEffectComponent;
