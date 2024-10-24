import React, { useState } from 'react';

import styles from '@/styles/jobform/page.module.scss';
import SelectField from './components/SelectField';
import TextArea from './components/TextArea';
import InputField from './components/InputField';
import RangeInput from './components/RangeInput';

const JobForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [aboutRole, setAboutRole] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [location, setLocation] = useState('');
  const [method, setMethod] = useState('');
  const [workPermit, setWorkPermit] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [applicationMethod, setApplicationMethod] = useState('');

  return (
    <form className={styles.jobForm}>
      <h2>Lorem ipsum lorem ipsum lorem</h2>
      <p>Lorem ipsum lorem ipsum lorem ipsum ipsum lorem</p>

      <SelectField
        label="JOB TITLE"
        options={['Select Title', 'Developer', 'Designer', 'Manager']}
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />

      <TextArea
        label="About the role"
        placeholder="Type a job description here..."
        value={aboutRole}
        onChange={(e) => setAboutRole(e.target.value)}
      />

      <SelectField
        label="JOB TYPE"
        options={['Full Time', 'Part Time', 'Contract', 'Internship']}
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
      />

      <SelectField
        label="EXPERIENCE LEVEL"
        options={['Entry-level', 'Mid-level', 'Senior', 'Executive']}
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
      />

      <InputField
        type="text"
        placeholder="Location"
        label="LOCATION"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <SelectField
        label="METHOD"
        options={['Remote', 'In-person', 'Hybrid']}
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      />

      <SelectField
        label="WORK PERMIT"
        options={['No specific requirements', 'Requires local permit']}
        value={workPermit}
        onChange={(e) => setWorkPermit(e.target.value)}
      />

      <RangeInput
        label="SALARY"
        minValue={salaryMin}
        maxValue={salaryMax}
        currencyOptions={['USD', 'EUR', 'GBP']}
        selectedCurrency={currency}
        onMinChange={(e) => setSalaryMin(e.target.value)}
        onMaxChange={(e) => setSalaryMax(e.target.value)}
        onCurrencyChange={(e) => setCurrency(e.target.value)}
      />

      <InputField
        type="email"
        placeholder="example@mail.com"
        label="APPLICATION METHOD"
        value={applicationMethod}
        onChange={(e) => setApplicationMethod(e.target.value)}
      />
    </form>
  );
};

export default JobForm;
