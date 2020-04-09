const covid19ImpactEstimator = (data) => {
  const input = data;
  const { reportedCases } = data;

  const imapactCurrentlyInfected = Math.trunc(reportedCases * 10);
  const severeCurrentlyInfected = Math.trunc(reportedCases * 50);
  const impactinfectionsByRequestedTime = Math.trunc(
    imapactCurrentlyInfected * 1024
  );
  const severeinfectionsByRequestedTime = Math.trunc(
    severeCurrentlyInfected * 1024
  );

  return {
    data: input,
    estimate: {
      impact: {
        currentlyInfected: imapactCurrentlyInfected,
        infectionsByRequestedTime: impactinfectionsByRequestedTime
      },
      severeImpact: {
        currentlyInfected: severeCurrentlyInfected,
        infectionsByRequestedTime: severeinfectionsByRequestedTime
      }
    }
  };
};

export default covid19ImpactEstimator;
