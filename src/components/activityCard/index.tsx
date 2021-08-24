import React from 'react';

const ActivityCard = ({ activity }) => (
  <div className="bg-gray-light border-yellow-300 border-2 rounded-xl p-4">
    {console.log(activity)}
    <h4>{activity.title}</h4>
  </div>
);

export default ActivityCard;
