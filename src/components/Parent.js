import { useContext } from 'react';

import Child from './Child';
import { UserContext, ChannelContext } from '../App';

const Parent = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            <h2>Use context - {user} - {channel}</h2>
            <Child />
        </div>
    );
}

export default Parent;