const covid19ImpactEstimator = (data) => {
  debugger;
  const input = data;
  const { reportedCases } = data;
  const repcase = 2747;
  const imapactCurrentlyInfected = reportedCases * 10;
  const severeCurrentlyInfected = reportedCases * 50;
  const impactinfectionsByRequestedTime = imapactCurrentlyInfected * 1024;
  const severeinfectionsByRequestedTime = severeCurrentlyInfected * 1024;

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

// export default covid19ImpactEstimator;
