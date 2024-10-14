import Button from "@/src/components/button/Button";

function getMedia(media) {
  if (!media) {
    return;
  }

  if (media.image) {
    return (
      <div className="card-image">
        <img src={media.image.src} alt={media.image.alt} />
      </div>
    );
  }

  if (media.icon) {
    return (
      <div className="card-icon">
        <span className="material-icons">{media.icon}</span>
      </div>
    );
  }

  return null;
}

function getDescription(text) {
  if (!text || text === "") {
    return;
  }

  return (
    <main className="card-body">
      <p className="card-body-text">{text}</p>
    </main>
  );
}

function getActions(action) {
  if (!action) {
    return;
  }

  return (
    <footer className="card-footer">
      <Button text={action} />
    </footer>
  );
}

function getTitles(title, subtitle) {
  if (title && !subtitle) {
    return <h3 className="card-header-title">{title}</h3>;
  }

  if (!title && subtitle) {
    return <h4 className="card-header-subtitle">{subtitle}</h4>;
  }

  if (title && subtitle) {
    return (
      <div>
        <h3 className="card-header-title">{title}</h3>
        <h4 className="card-header-subtitle">{subtitle}</h4>
      </div>
    );
  }

  return;
}

export default function Card({ title, text, subtitle, media = {}, action }) {
  return (
    <div className="card">
      <header className="card-header">
        {getMedia(media)}
        {getTitles(title, subtitle)}
      </header>
      {getDescription(text)}
      {getActions(action)}
    </div>
  );
}
