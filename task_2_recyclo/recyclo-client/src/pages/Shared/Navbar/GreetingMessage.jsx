import { useState, useEffect }from 'react';

const GreetingMessage = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        // Get the current hour
        const currentHour = new Date().getHours();
    
        // Define the conditions for different times of the day
        if (currentHour >= 5 && currentHour < 12) {
          setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
          setGreeting('Good Afternoon');
        } else {
          setGreeting('Good Night');
        }
      }, []); // Run the effect only once when the component mounts

    return (
        <div>
            <h1 className='text-xs'>{greeting}</h1>
        </div>
    );
};

export default GreetingMessage;