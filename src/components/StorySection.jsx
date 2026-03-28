import './StorySection.css';

function StorySection({ label, heading, body, image, bg, isHero, imageLeft }) {
  return (
    <section
      className={[
        'story-section',
        isHero ? 'story-section--hero' : '',
        imageLeft ? 'story-section--flip' : '',
        !image ? 'story-section--text-only' : '',
      ].filter(Boolean).join(' ')}
      style={{ backgroundColor: bg || 'var(--stone)' }}
    >
      <div className={`story-text${isHero ? '' : ' reveal'}`}>
        {label && <span className="story-label">{label}</span>}
        {isHero
          ? <h1 className="story-heading">{heading}</h1>
          : <h2 className="story-heading">{heading}</h2>
        }
        {body && <p className="story-body">{body}</p>}
      </div>
      {image && (
        <div className="story-image">
          <img src={image} alt={heading} />
        </div>
      )}
    </section>
  );
}

export default StorySection;
