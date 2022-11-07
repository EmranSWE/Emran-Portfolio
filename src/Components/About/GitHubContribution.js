import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContribution = () => {
    // const selectLastHalfYear = contributions => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 5;
    //     return contributions.filter(day => {
    //       const date = new Date(day.date);
    //       const monthOfDay = date.getMonth();
    //       return (
    //         date.getFullYear() === currentYear &&
    //         monthOfDay > currentMonth - shownMonths &&
    //         monthOfDay <= currentMonth
    //       );
    //     });
    //   };
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