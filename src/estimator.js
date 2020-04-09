const getPeriodType = (periodType) => {
  const getPeriod = periodType.toLowerCase();
  const periodOfTime = 1;
  switch (getPeriod) {
    case 'days':
      return periodOfTime;
    case 'weeks':
      return periodOfTime * 7;
    case 'months':
      return periodOfTime * 30;
    default:
      return periodOfTime;
  }
};

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
