// from new branch
import React from 'react';
import './Team.css';
import TeamPhoto from '../Assets/teamphoto2.png';

const Team = () => {
  const councilMembers = [
    '1', '2', '3', '4', '5', '6'
  ];
  const executiveMember = [
    'Akshit', 'Shashwat', 'Aayush', 'Ritwija', 'Amritansh', 'Pranjal', 'Aman'
  ]

  const executiveMembers = [
    'Pranjal', 'Vidhi', 'Arpit', 'Vidushi', 'Manav', 'Suvrat', 'Yatharth'
  ];

  const otherMembers = [
    'Manas', 'Arnav', 'Aparna', 'Nikhilesh', 'Harshit', 'Shashank', 'Ankush'
  ];

  return (
    <div className='team'>
      <div className='team-header'>
        OUR TEAM
      </div>
      <div className='team-line'></div>

      <div className='team-section'>
        <div className='team-subheader'>COUNCIL</div>
        <div className='team-line2'></div>
        <div className='team-center'>
            <div className='team-rotate'>COUNCIL</div>
            <div className='team-rotate2'>COUNCIL</div>
        </div>
            <div className='team-line3'></div>
        <div className='team-line4'></div>
        <div className='team-rotate-line'></div>
        <div className='team-rotate-line2'></div>
        <div className='team-rotate-line3'></div>
        <div className='team-rotate-line4'></div>

        
      </div>
        <div className='team-images'>
          {councilMembers.map((member, index) => (
            <div className='team-image' key={index}>
              <img src={TeamPhoto} alt='team photo' />
            </div>
          ))}
        </div>

      <div className='team-section'>
        <div className='team-subheader2'>EXECUTIVES</div>
        <div className='team-line5'></div>
        <div className='team-names'>
            <ul>
                {executiveMember.map((member, index)=>(
                    <li key={index}>{member}</li>
                ))
                }
            </ul>
          <ul>
            {executiveMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
          <ul>
            {otherMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
