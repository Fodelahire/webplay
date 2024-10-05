import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeadset, faChartLine, faUsers, faLaptopCode, faBullhorn, faCoins, faPaintBrush, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

interface JobCategory {
  id: number;
  title: string;
  openPositions: number;
  icon: IconDefinition; 
}

export const jobCategories: JobCategory[] = [
  { id: 1, title: 'Customer Service', openPositions: 6, icon: faHeadset },
  { id: 2, title: 'Business Development', openPositions: 2, icon: faChartLine },
  { id: 3, title: 'Human Resources', openPositions: 4, icon: faUsers },
  { id: 4, title: 'IT', openPositions: 14, icon: faLaptopCode },
  { id: 5, title: 'Marketing', openPositions: 5, icon: faBullhorn },
  { id: 6, title: 'Finance', openPositions: 3, icon: faCoins },
  { id: 7, title: 'Design', openPositions: 8, icon: faPaintBrush },
  { id: 8, title: 'Legal', openPositions: 1, icon: faBalanceScale },
];
