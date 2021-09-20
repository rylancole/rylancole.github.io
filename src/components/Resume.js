import JobCard from "./job/JobCard";
import SchoolCard from "./school/SchoolCard";

import { descriptions } from "../descriptions";

const Resume = ({ isDesktop, value }) => {
  return (
    <div role="tabpanel">
      <SchoolCard isDesktop={isDesktop} value={value} />
      {descriptions.map((job) => {
        return <JobCard isDesktop={isDesktop} data={job} value={value} />;
      })}
    </div>
  );
};

export default Resume;
