type Job = {
  id: number;
  title: string;
  employmentType: string;
  location: string;
  salaryRange: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Product Designer',
    employmentType: 'Full Time',
    location: 'San Diego, CA',
    salaryRange: '$50,000-$70,000',
  },
  {
    id: 2,
    title: 'Software Engineer',
    employmentType: 'Full Time',
    location: 'Austin, TX',
    salaryRange: '$80,000-$120,000',
  },
  {
    id: 3,
    title: 'Project Manager',
    employmentType: 'Contract',
    location: 'Remote',
    salaryRange: '$40,000-$60,000',
  },
  {
    id: 4,
    title: 'Data Scientist',
    employmentType: 'Full Time',
    location: 'New York, NY',
    salaryRange: '$90,000-$130,000',
  },
  {
    id: 5,
    title: 'Frontend Developer',
    employmentType: 'Full Time',
    location: 'San Francisco, CA',
    salaryRange: '$85,000-$110,000',
  },
  {
    id: 6,
    title: 'Backend Developer',
    employmentType: 'Full Time',
    location: 'Chicago, IL',
    salaryRange: '$80,000-$105,000',
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    employmentType: 'Full Time',
    location: 'Seattle, WA',
    salaryRange: '$95,000-$125,000',
  },
  {
    id: 8,
    title: 'Graphic Designer',
    employmentType: 'Part Time',
    location: 'Los Angeles, CA',
    salaryRange: '$40,000-$55,000',
  },
  {
    id: 9,
    title: 'Marketing Specialist',
    employmentType: 'Contract',
    location: 'Boston, MA',
    salaryRange: '$45,000-$65,000',
  },
];
