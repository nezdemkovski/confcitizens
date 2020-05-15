const AlgoliaLogo = require('./assets/algolia.svg') as string;

const Footer = () => (
  <footer className="text-center">
    <p>
      <a
        href="https://github.com/yakovlevyuri/confcitizens"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        GitHub
      </a>
      {' • '}
      <a
        href="https://twitter.com/yakovlevyuri"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Twitter
      </a>
      {' • '}
      Initially based on data from{' '}
      <a
        href="https://github.com/karlhorky/awesome-speakers"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Awesome Speakers
      </a>
    </p>

    <AlgoliaLogo />
  </footer>
);

export default Footer;
