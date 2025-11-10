import React from 'react';
import ChallengePage from '../components/ChallengePage';
import { increasingFoodInsecurityData } from '../data/IncreasingFoodInsecurityData';

const IncreasingFoodInsecurity = () => {
  return <ChallengePage data={increasingFoodInsecurityData} />;
};

export default IncreasingFoodInsecurity;
