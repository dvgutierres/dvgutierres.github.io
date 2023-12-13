import backgroundImage from '../images/background.jpg'

export default function Title() {
  return (
    <div>
      <div>
          <img
            src={backgroundImage}
            alt="Background"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', zIndex: '1', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px' }}>
        <h1>Digital Twin Developer</h1>
        <p>Since 2017, I develop Digital Twin technologies for the largest companies in South America</p>
        <p>Explore my portfolio to witness the impact of my work. </p>
        <p>Let's collaborate on shaping the future through the limitless possibilities of Digital Twins.</p>
      </div>
    </div>
  );
}