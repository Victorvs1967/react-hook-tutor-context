import { UserContext, ChannelContext } from '../App';

const Child = () => (
    <div>
        <UserContext.Consumer>
            { user => {
                return (
                <ChannelContext.Consumer>
                    {channel => {
                        return (
                            <>
                                <h2>Child Component with context value - {user}</h2>
                                <h3>Channel is - {channel}</h3>
                            </>
                        )}}
                </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    </div>
);

export default Child;