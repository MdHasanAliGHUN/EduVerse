import React from "react";
import { GoDotFill } from "react-icons/go";
const TargetAudience = ({ targetAudience }) => {
  return (
    <div className="space-y-3">
      {targetAudience.map((targetAudienceItem, index) => (
        <div key={index} className="flex items-center gap-1">
            <GoDotFill/>
          <p className="text-gray-700 font-light">{targetAudienceItem}</p>
        </div>
      ))}
    </div>
  );
};

export default TargetAudience;
