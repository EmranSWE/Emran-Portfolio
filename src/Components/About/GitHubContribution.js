import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContribution = () => {

    return (
        <div>
            <GitHubCalendar username="EmranSWE" blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}  />
        </div>
    );
};

export default GitHubContribution;