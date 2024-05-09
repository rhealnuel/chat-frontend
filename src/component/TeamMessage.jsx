import React from 'react';
import { MessageSimple, useMessageContext } from 'stream-chat-react';

const TeamMessage = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <MessageSimple
            message={message}
            onThreadSelect={handleOpenThread}
        />
    )
}

export default TeamMessage;