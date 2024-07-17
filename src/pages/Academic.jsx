import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Academic.css';

const Academic = () => {
  const UG = [
    'B.E-Computer Science and Engineering',
    'B.E-Electronics and Communication Engineering',
    'B.E-Electrical and Electronics Engineering',
    'B.E-Mechanical Engineering',
    'B.Tech-Computer Science and Business Systems',
    'B.Tech-Information Technology',
    'B.Tech-Artificial Intelligence and Data Science',
    'B.Tech-Artificial Intelligence and Machine Learning'
  ];

  const PG = [
    'ME-Computer Science and Engineering',
    'ME-Communication Systems',
    'Master of Business Administration (MBA)'
  ];

  const HS = ['Humanities and Science'];

  return (
    <div className="academics">
      <h1>Departments</h1>
      <div className="dept-container">
        <div className='dept' style={{ flex: '1.5' }}>
          <ul>
            <h3>Undergraduate</h3>
            {UG.map(ug => (
              <li key={ug}>
                <Link to={`/departments/${ug}`}>{ug}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='dept' style={{ flex: '1.2' }}>
          <ul>
            <h3>Postgraduate</h3>
            {PG.map(pg => (
              <li key={pg}>
                <Link to={`/departments/${pg}`}>{pg}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='dept'>
          <ul>
            <h3>Humanities and Science</h3>
            {HS.map(hs => (
              <li key={hs}>
                <Link to={`/departments/${hs}`}>{hs}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Academic;
