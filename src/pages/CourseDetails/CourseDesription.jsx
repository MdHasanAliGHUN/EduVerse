import React from "react";
import LearningList from "./LearningList";
import Requirements from "./Requirements";
import TargetAudience from "./TargetAudience";

const CourseDesription = ({ courseDetails }) => {
  const { aboutCourse, whatYouWillLearn, requirements,targetAudience } = courseDetails;
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="font-bold text-2xl md:text-3xl text-black">About this course</h1>
        <p>{aboutCourse}</p>
      </div>

      <div>
        <h1 className="font-bold text-black mb-3">What you will learn </h1>
        <div>
          <LearningList whatYouWillLearn={whatYouWillLearn} />
        </div>
      </div>

      <div>
        <h1 className="font-bold  text-black mb-3">Requirements</h1>
        <div>
          <Requirements requirements={requirements} />
        </div>
      </div>

      <div>
        <h1 className="font-bold  text-black mb-3">
          Who this course is for{" "}
        </h1>
        <div>
          <TargetAudience targetAudience={targetAudience} />
        </div>
      </div>

    </div>
  );
};

export default CourseDesription;
