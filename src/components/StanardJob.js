const StandardJob = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default StandardJob;
