import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterest, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <section className='social'>
      <div className='socBox'>
        <a href="https://www.facebook.com/yourpage">
          <FontAwesomeIcon icon={faFacebookF} style={{ color: 'black' }} />
          <span style={{ color: 'black', marginBottom: '5px' }}>12,740 Likes</span>
        </a>
      </div>
      <div className='socBox'>
        <a href="https://www.pinterest.com/yourpage">
          <FontAwesomeIcon icon={faPinterest} style={{ color: 'black' }} />
          <span style={{ color: 'black', marginBottom: '5px' }}>5,600 Fans</span>
        </a>
      </div>
      <div className='socBox'>
        <a href="https://www.twitter.com/yourpage">
          <FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} />
          <span style={{ color: 'black', marginBottom: '5px' }}>8,700 Followers</span>
        </a>
      </div>
      <div className='socBox'>
        <a href="https://www.instagram.com/yourpage">
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} />
          <span style={{ color: 'black', marginBottom: '5px' }}>22,700 Followers</span>
        </a>
      </div>
      <div className='socBox'>
        <a href="https://www.youtube.com/yourpage">
          <FontAwesomeIcon icon={faYoutube} style={{ color: 'black' }} />
          <span style={{ color: 'black', marginBottom: '5px' }}>2,700 Subscribers</span>
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
