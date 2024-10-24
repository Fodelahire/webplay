'use client'
import React, { useState } from 'react';

import styles from '@/styles/jobform/page.module.scss';
import SelectField from './components/SelectField';
import TextArea from './components/TextArea';
import RadioButtonGroup from './components/RadioButton';
import InputField from './components/InputField';
import SalaryInput from './components/SalaryInput';
import DatePicker from './components/DatePicker';
import FileUpload from './components/FileUpload';


const JobForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [aboutRole, setAboutRole] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [workPermit, setWorkPermit] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [applicationCloseDate, setApplicationCloseDate] = useState('');
  const [applicationMethod, setApplicationMethod] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [companyEmail, setCompanyEmail] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCompanyLogo(e.target.files[0]);
    }
  };

  return (
    <form className={styles.jobForm}>
      <h2>Lorem ipsum lorem ipsum lorem</h2>
      <p>Lorem ipsu oorem ipsum lorem ipsum lorem ipsdumo</p>

      <div className={styles.formSection}>
        <SelectField
          label="Job title*"
          options={['Select Title', 'Developer', 'Designer', 'Manager']}
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <TextArea
          label="About the role*"
          placeholder="Type out the job description and requirements here"
          value={aboutRole}
          onChange={(e) => setAboutRole(e.target.value)}
        />

        <RadioButtonGroup
          label="Job type*"
          options={[
            { value: 'full-time', label: 'Full Time' },
            { value: 'part-time', label: 'Part Time' },
            { value: 'contract', label: 'Contract' },
            { value: 'intern', label: 'Intern' },
            { value: 'temporary', label: 'Temporary' },
            { value: 'volunteer', label: 'Volunteer' },
            { value: 'other', label: 'Other' },
          ]}
          selectedValue={jobType}
          onChange={setJobType}
        />

        <RadioButtonGroup
          label="Experience Level*"
          options={[
            { value: 'entry', label: 'Entry-Level' },
            { value: 'mid', label: 'Mid-Level' },
            { value: 'senior', label: 'Senior' },
            { value: 'manager', label: 'Manager' },
            { value: 'director', label: 'Director' },
            { value: 'executive', label: 'Executive' },
          ]}
          selectedValue={experienceLevel}
          onChange={setExperienceLevel}
        />

        <InputField
          type="text"
          placeholder="Worldwide"
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <SelectField
          label="Timezone"
          options={['Select Timezone', 'PST', 'EST', 'CST', 'GMT', 'CET']}
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />

        <RadioButtonGroup
          label="Work permits"
          options={[
            { value: 'none', label: 'No specific working permits' },
            { value: 'specific', label: 'Must be eligible to work in' },
          ]}
          selectedValue={workPermit}
          onChange={setWorkPermit}
        />

        <SalaryInput
          minSalary={salaryMin}
          maxSalary={salaryMax}
          currency={currency}
          currencyOptions={['USD', 'EUR', 'GBP']}
          onMinChange={(e) => setSalaryMin(e.target.value)}
          onMaxChange={(e) => setSalaryMax(e.target.value)}
          onCurrencyChange={(e) => setCurrency(e.target.value)}
        />

        <DatePicker
          label="Applications close on*"
          value={applicationCloseDate}
          onChange={(e) => setApplicationCloseDate(e.target.value)}
        />

        <InputField
          type="email"
          placeholder="Enter an email or application link"
          label="Application method*"
          value={applicationMethod}
          onChange={(e) => setApplicationMethod(e.target.value)}
        />
      </div>

      <h2>Lorem ipsum lorem ipsum lorem</h2>
      <p>Lorem ipsu oorem ipsum lorem ipsum lorem ipsdumo</p>

      <div className={styles.formSection}>
        <InputField
          type="text"
          placeholder="Company Name"
          label="Company name*"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <InputField
          type="text"
          placeholder="www.yourwebsite.com"
          label="Website*"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <FileUpload
          label="Company logo"
          onChange={handleFileChange}
        />

        <InputField
          type="email"
          placeholder="Company Email"
          label="Company Email*"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
      </div>
    </form>
  );
};

export default JobForm;