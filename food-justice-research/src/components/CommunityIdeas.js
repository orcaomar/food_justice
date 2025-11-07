import React from 'react';
import '../index.css';
import headerBackground from '../assets/community-ideas/lNM99SIW9C84CO5V14Lr7nmp1s.jpg';
import ideaImage from '../assets/community-ideas/Sd001QxeO4hwIqVmW0kIJSxl5cU.jpg';

const CommunityIdeas = () => {
  return (
    <div style={{ backgroundColor: '#faf8ea' }}>
      <div style={{
        position: 'relative',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '77px', fontFamily: 'Urbanist, sans-serif' }}>Community Ideas</h1>
          <p style={{ fontSize: '22px', fontFamily: 'Urbanist, sans-serif' }}>A collection of local residents’ ideas for creating a just and sustainable food system in their communities</p>
        </div>
      </div>
      <div style={{ padding: '45px 40px', backgroundColor: '#b5c99a' }}>
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Inter Tight, sans-serif' }}>
          The following ideas were generated during community conversations about how to create a just and sustainable food system in Flemingdon Park and Thorncliffe Park. These ideas are supported by data from a neighbourhood survey of over 400 local residents.
        </p>
      </div>
      <div style={{ padding: '0 40px 100px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', maxWidth: '1000px', width: '100%' }}>
          {/* Repeat this block for each idea */}
          <div style={{ flex: '1 0 0px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <img src={ideaImage} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                <div style={{ flex: '1 0 0px' }}>
                  <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '18px' }}>Expand access to affordable, healthy, and culturally appropriate food</h3>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '18px', marginTop: '20px' }}>
                Residents shared a number of ideas for how to expand access to affordable, healthy, and culturally appropriate food, from community gardens and farmers' markets to subsidized produce box programs. They also suggested that there may be a role for apps that reduce food waste by connecting consumers with discounted food.
              </p>
            </div>
          </div>
          {/* End of block */}
        </div>
      </div>
    </div>
  );
};

export default CommunityIdeas;
