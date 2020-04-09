const covid19ImpactEstimator = (data) => {
  const input = data;
  const { reportedCases } = data;
  const imapactCurrentlyInfected = reportedCases * 10;
  const severeCurrentlyInfected = reportedCases * 50;
  const impactinfectionsByRequestedTime =
    imapactCurrentlyInfected * Math.pow(2, 10);
  const severeinfectionsByRequestedTime =
    severeCurrentlyInfected * Math.pow(2, 10);
  return {
    data: input,
    impact: {
      currentlyInfected: imapactCurrentlyInfected,
      infectionsByRequestedTime: impactinfectionsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: severeinfectionsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
