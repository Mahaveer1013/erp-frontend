import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Academic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DepartmentsData = {
    'B.E-Computer Science and Engineering': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/BE-CSE/cse-banner-img.jpg'>`,

        'About the Department': `<img src='https://panimalar.ac.in/assets/images/BE-CSE/about1.png' style='border-radius:0px;'>
                                 <p>The Computer Science and Engineering Department offers the following programs.</p>
                                 <p>B.E - Computer Science and Engineering ( 4 Years)</p>
                                  <p>M.E. - Computer Science and Engineering ( 2 Years)</p>\n
                                  <p>Ph.D - Computer Science and Engineering ( Full time / Part time).</p>
                                  <p style='text-align:left;'>The Computer Science and Engineering Department offers both Undergraduate and Postgraduate programs. It provides an excellent ambiance for students to learn and acquire the necessary skills required by the IT Industry. Technological innovation is so rapid in this field that continuous education is essential to enhance the skill set of students keeping in pace with the current trends. The department has experienced faculty members who are fully committed to teaching and research.
                                  <p style='text-align:left;'>The students have access to well equipped, state-of-the-art laboratories. A wide range of activities undertaken in the department allow the students to gain contemporary knowledge of the basic problems in the IT industry. The advance curriculum requires the students to take up a broad spectrum of courses with special emphasis on desired areas of specialization. Hence, the department has brought out exceptional engineers in the past and will continue to do in the years to come. The Department maintains an excellent interaction with IT industry and organizes regular guest lectures by experts, industrial visits, internships etc. and stands for industry - Institute collaboration.</p>
                                  `,

        'Vision and Mission': `<fieldset><legend><img src='https://cdn-icons-png.flaticon.com/512/1356/1356663.png' id='vision'></legend><h2 style='display:inline;'><center>VISION</center></h2><p>To provide an academically conducive environment for individuals to develop as technologically superior, socially conscious and nationally responsible citizens.</p></fieldset>
        <fieldset><legend><img src='https://cdn-icons-png.flaticon.com/512/1628/1628441.png' id='vision'></legend><h2 style='display:inline;'><center>MISSION</center></h2><p><b>M1:</b> To develop our department as a center of excellence, imparting quality education, generating competent and skilled manpower.</b></p>
<p><b>M2:</b> To prepare our students with high degree of credibility, integrity, ethical standards and social concern.</p>
<p><b>M3:</b> To train our students to devise and implement novel systems, based on Education and Research.</p></fieldset>`,

        'HOD Profile':
            `<img src='https://panimalar.ac.in/assets/images/BE-CSE/HOD.png' class='hod-img'>
                     <h2 class='blue'>Dr.L.JABASHEELA , M.E .,Ph.D.,</h2><h4 class='yellow'>Professor & Head Department of Computer Science and Engineering</h4>With over 25 years of dedicated experience in academia and research, Dr. L. Jabasheela has established herself as a distinguished figure in the fields of Image Mining and Data Analytics. She holds a plethora of professional certifications, including Microsoft Certified Professional (MCP) and Microsoft Certified Systems Engineer (MCSE), as well as certification in Robotic Process Automation (RPA) from UiPath,<br> underscoring her extensive expertise and commitment to staying at the forefront of technological advancements.
                    <h2 class='blue'>Awards and Recognition</h2>Dr. L. Jabasheela outstanding contributions have earned her numerous accolades. She is the recipient of the CSI TechNext Award for Contemporary Book Publication, a testament to the impact and relevance of her literary contributions. Additionally, she has been recognized as the Best Mentor by NPTEL for her exemplary guidance in the Internet of Things (IoT) course, highlighting her dedication to nurturing the next generation of technologists and researchers.In 2020, her team triumphed in the National Product Development Hackathon conducted by the Computer Society of India (CSI), securing the first prize. This achievement underscores her leadership and innovative thinking in tackling complex problems and developing practical solutions.`,

        'Faculty List': `<table border='1'><tr><th >S.No.</th><th >Name of the Faculty</th><th>Designation</th></tr>
        <tr><td>1.</td><td >Dr. JABASHEELA L</td><td>Professor & Head</td></tr>
        <tr><td>2.</td><td>Dr. KAVITHA SUBRAMANI</td><td>Professor</td></tr>
        <tr><td>3.</td><td>Dr. SUBEDHA V</td><td>Professor</td></tr>
        <tr><td>4.</td><td>Dr. RAJENDIRAN M</td><td>Professor</td></tr>
        <tr><td>5.</td><td>Dr. VALARMATHI K</td><td>Professor</td></tr>
        <tr><td>6.</td><td >Dr. UMARANI SRIKANTH G</td><td>Professor</td></tr>
        <tr><td>7.</td><td>Dr. KATHIRVEL A</td><td>Professor</td></tr>
        <tr><td>8.</td><td>Dr. JOSPHINE LEELA R</td><td>Professor</td></tr>
        <tr><td>9.</td><td>Dr. SENTHIL KUMAR G</td><td>Professor</td></tr>
        <tr><td>10.</td><td>Dr. VINMATHI  M S</td><td>Professor</td></tr></table>`,

        'Course Material': `<table border='1'><tr><th>YR/SEM</th><th >SUBJECT CODE</th><th>SUBJECT TITLE</th><th>GOOGLE SITES</th></tr>
        <tr><td rowspan='8' style='text-align:start;'>II YR/ III SEM</td><td >23MA1301</td><td>Discrete Mathematics</td><td><a>https://sites.google.com/view/r2023pecdm/home</a></td></tr>
        <tr><td>23CS1301</td><td>Digital Principles and Computer Architecture</td><td><a>https://sites.google.com/view/23cs1301-dpca/home</a></td></tr>
        <tr><td>23CS1302</td><td>Data Structures</td><td><a>https://sites.google.com/view/23cs1302-datastructures/home</a></td></tr>
        <tr><td>23CS1303</td><td>Database Management Systems</td><td><a>https://sites.google.com/view/23cs1303dbms/home</a></td></tr>
        <tr><td>23IT1301</td><td>Object Oriented Programming</td><td><a>https://sites.google.com/view/23it1301-oops/home</a></td></tr> 
        <tr><td>23CS1311</td><td>Data Structures Laboratory</td><td><a>https://sites.google.com/view/23cs1311-data-structures-lab/home</a></td></tr>
        <tr><td>23CS1312</td><td>Database Management Systems Laboratory</td><td><a>https://sites.google.com/view/23cs1312dbmslab/syllabus</a></td></tr>
        <tr border='1'><td>23IT1311</td><td>Object Oriented Programming Laboratory</td><td><a>https://sites.google.com/view/23it1311-oopslab/home</a></td></tr>
        
        <tr><td rowspan='8'>II YR/ III SEM</td><td >23MA1301</td><td>Discrete Mathematics</td><td><a>https://sites.google.com/view/r2023pecdm/home</a></td></tr>
        <tr><td>23CS1301</td><td>Digital Principles and Computer Architecture</td><td><a>https://sites.google.com/view/23cs1301-dpca/home</a></td></tr>
        <tr><td>23CS1302</td><td>Data Structures</td><td><a>https://sites.google.com/view/23cs1302-datastructures/home</a></td></tr>
        <tr><td>23CS1303</td><td>Database Management Systems</td><td><a>https://sites.google.com/view/23cs1303dbms/home</a></td></tr>
        <tr><td>23IT1301</td><td>Object Oriented Programming</td><td><a>https://sites.google.com/view/23it1301-oops/home</a></td></tr> 
        <tr><td>23CS1311</td><td>Data Structures Laboratory</td><td><a>https://sites.google.com/view/23cs1311-data-structures-lab/home</a></td></tr>
        <tr><td>23CS1312</td><td>Database Management Systems Laboratory</td><td><a>https://sites.google.com/view/23cs1312dbmslab/syllabus</a></td></tr>
        <tr><td>23IT1311</td><td>Object Oriented Programming Laboratory</td><td><a>https://sites.google.com/view/23it1311-oopslab/home</a></td></tr></table>`,
    },
    'B.E-Electronics and Communication Engineering': {

        'main img': `<img src='https://panimalar.ac.in/assets/images/be-ece/ece-banner.jpg'>`,
        'Vision and Mission': 'Details for Electronics and Communication - Vision and Mission',
        'HOD Profile': 'Details for Electronics and Communication - HOD Profile',
        'Faculty List': 'Details for Electronics and Communication - Faculty List',
        'Course Material': 'Details for Electronics and Communication - Course Material',
        'About the Department': 'Details for Electronics and Communication - About the Department',
    },
    'B.E-Electrical and Electronics Engineering': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/be-eee/eee-banner-image-1.jpg'>`,
        'Vision and Mission': 'Details for Electrical and Electronics - Vision and Mission',
        'HOD Profile': 'Details for Electrical and Electronics - HOD Profile',
        'Faculty List': 'Details for Electrical and Electronics - Faculty List',
        'Course Material': 'Details for Electrical and Electronics - Course Material',
        'About the Department': 'Details for Electrical and Electronics - About the Department',
    },
    'B.E-Mechanical Engineering': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/be-mech/mechanical-banner.jpg'>`,
        'Vision and Mission': 'Details for Mechanical - Vision and Mission',
        'HOD Profile': 'Details for Mechanical - HOD Profile',
        'Faculty List': 'Details for Mechanical - Faculty List',
        'Course Material': 'Details for Mechanical - Course Material',
        'About the Department': 'Details for Mechanical - About the Department',
    },
    'B.Tech-Computer Science and Business Systems': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/btech-csbs/computer-science-and-business.jpg'>`,
        'Vision and Mission': 'Details for Computer Science and Business - Vision and Mission',
        'HOD Profile': 'Details for Computer Science and Business - HOD Profile',
        'Faculty List': 'Details for Computer Science and Business - Faculty List',
        'Course Material': 'Details for Computer Science and Business - Course Material',
        'About the Department': 'Details for Computer Science and Business - About the Department',
    },
    'B.Tech-Information Technology': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/btech-aiml/artificial-intelligence-machine-learning-banner.jpg'>`,
        'Vision and Mission': 'Details for Information Technology - Vision and Mission',
        'HOD Profile': 'Details for Information Technology - HOD Profile',
        'Faculty List': 'Details for Information Technology - Faculty List',
        'Course Material': 'Details for Information Technology - Course Material',
        'About the Department': 'Details for Information Technology - About the Department',
    },
    'B.Tech-Artificial Intelligence and Data Science': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/btech-aids/artificial-intelligence-data-science-banner.jpg'>`,
        'Vision and Mission': 'Details for Artificial Intelligence - Vision and Mission',
        'HOD Profile': 'Details for Artificial Intelligence - HOD Profile',
        'Faculty List': 'Details for Artificial Intelligence - Faculty List',
        'Course Material': 'Details for Artificial Intelligence - Course Material',
        'About the Department': 'Details for Artificial Intelligence - About the Department',
    },
    'B.Tech-Artificial Intelligence and Machine Learning': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/btech-aiml/artificial-intelligence-machine-learning-banner.jpg'>`,
        'Vision and Mission': 'Details for Machine Learning - Vision and Mission',
        'HOD Profile': 'Details for Machine Learning - HOD Profile',
        'Faculty List': 'Details for Machine Learning - Faculty List',
        'Course Material': 'Details for Machine Learning - Course Material',
        'About the Department': 'Details for Machine Learning - About the Department',
    },
    'ME-Computer Science and Engineering': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/me-cse/m.e-cs-banner.jpg'>`,
        'Vision and Mission': 'Details for ME-Computer Science and Engineering - Vision and Mission',
        'HOD Profile': 'Details for ME-Computer Science and Engineering - HOD Profile',
        'Faculty List': 'Details for ME-Computer Science and Engineering - Faculty List',
        'Course Material': 'Details for ME-Computer Science and Engineering - Course Material',
        'About the Department': 'Details for ME-Computer Science and Engineering - About the Department',
    },
    'ME-Communication Systems': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/me-comsys/m.e-communication-system-banner.jpg'>`,
        'Vision and Mission': 'Details for ME-Communication Systems - Vision and Mission',
        'HOD Profile': 'Details for ME-Communication Systems - HOD Profile',
        'Faculty List': 'Details for ME-Communication Systems - Faculty List',
        'Course Material': 'Details for ME-Communication Systems - Course Material',
        'About the Department': 'Details for ME-Communication Systems - About the Department',
    },
    'Master of Business Administration (MBA)': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/me-comsys/m.e-communication-system-banner.jpg'>`,
        'Vision and Mission': 'Details for Master of Business Administration - Vision and Mission',
        'HOD Profile': 'Details for Master of Business Administration - HOD Profile',
        'Faculty List': 'Details for Master of Business Administration - Faculty List',
        'Course Material': 'Details for Master of Business Administration - Course Material',
        'About the Department': 'Details for Master of Business Administration - About the Department',
    },
    'Humanities and Science': {
        'main img': `<img src='https://panimalar.ac.in/assets/images/humanities/humanities-banner-1.jpg'>`,
        'Vision and Mission': 'Details for Humanities and Science - Vision and Mission',
        'HOD Profile': 'Details for Humanities and Science - HOD Profile',
        'Faculty List': 'Details for Humanities and Science - Faculty List',
        'Course Material': 'Details for Humanities and Science - Course Material',
        'About the Department': 'Details for Humanities and Science - About the Department',
    }
};

const DepartmentDetailPage = () => {
    const { departmentName } = useParams();
    const [currentContent, setCurrentContent] = useState('About the Department'); // Set default content here

    useEffect(() => {
        // Effect to reset currentContent when departmentName changes
        setCurrentContent('About the Department');
    }, [departmentName]);

    const handleItemClick = (event, content) => {
        setCurrentContent(content);

        // Remove active class from all li elements
        const navItems = document.querySelectorAll('.nav ul li');
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the clicked li element
        event.target.classList.add('active');
    };

    return (
        <div>
            <div className="department-detail-container">
            <div style={{width:'100%',height:'100%'}} dangerouslySetInnerHTML={{ __html: DepartmentsData[departmentName]['main img'] }} />
                <h2 id='dept-name'>{departmentName}</h2>
                
            </div>
            <center>
                <div className="department-detail-content">
                    <div className="nav">
                        <ul>
                            <li onClick={(event) => handleItemClick(event, 'Vision and Mission')}><FontAwesomeIcon icon="fa-solid fa-eye" />Vision and Mission</li>
                            <li onClick={(event) => handleItemClick(event, 'HOD Profile')}><FontAwesomeIcon icon="fa-solid fa-user" />HOD Profile</li>
                            <li onClick={(event) => handleItemClick(event, 'Faculty List')}><FontAwesomeIcon icon="fa-regular fa-user" />Faculty List</li>
                            <li onClick={(event) => handleItemClick(event, 'Course Material')}><FontAwesomeIcon icon="fa-solid fa-newspaper" />Course Material</li>
                            <li onClick={(event) => handleItemClick(event, 'About the Department')} className="active"><FontAwesomeIcon icon="fa-solid fa-file-lines" />About the Department</li>
                        </ul>
                    </div>
                    <div className="content">
                        
                        <h2 className="blue">{currentContent}</h2>
                        {currentContent && DepartmentsData[departmentName][currentContent] && (
                            <div>
                                <span className='descriptionData' dangerouslySetInnerHTML={{ __html: DepartmentsData[departmentName][currentContent] }} />
                            </div>
                        )}
                    </div>
                </div>
            </center>
        </div>
    );
};

export default DepartmentDetailPage;
