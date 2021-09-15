import JobCard from "./job/JobCard";
import SchoolCard from "./school/SchoolCard";

import { descriptions } from "../descriptions";

const Resume = ({ value }) => {
  return (
    <div role="tabpanel">
      <SchoolCard value={value} />
      {descriptions.map((job) => {
        return <JobCard data={job} value={value} />;
      })}
    </div>
  );
};

export default Resume;
