import JobCard from "./JobCard";

import { descriptions } from "../descriptions";

const Resume = ({ value }) => {
  return (
    <div role="tabpanel">
      {descriptions.map((job) => {
        return <JobCard data={job} value={value} />;
      })}
    </div>
  );
};

export default Resume;
