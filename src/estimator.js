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
  const input = {
    data: {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: getPeriodType('days'),
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    }
  };
  const { reportedCases } = data;

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

export default covid19ImpactEstimator;
