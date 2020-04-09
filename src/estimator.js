const covid19ImpactEstimator = (data) => {
  const input = data;
  const { reportedCases } = data;
  //const currentlyInfected = reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * Math(2, 10);
  return {
    data: input,
    impact: {
      currentlyInfected: reportedCases * 10,
      infectionsByRequestedTime: currentlyInfected * Math(2, 10)
    },
    severeImpact: {
      currentlyInfected: reportedCases * 50,
      infectionsByRequestedTime: currentlyInfected * Math(2, 10)
    }
  };
};

export default covid19ImpactEstimator;
