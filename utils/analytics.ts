import ReactGA from 'react-ga';

import { GA_TRACKING_CODE } from '@config';

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_CODE);
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`); // tslint:disable-line:no-console

  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
  category: string = '',
  action: string = '',
  label: string = '',
) => {
  if (window.GA_INITIALIZED && category && action) {
    console.log(
      `Logging event with category "${category}", action "${action}" and label "${label}"`,
    );
    ReactGA.event({ category, action, label });
  }
};

export const logException = (
  description: string = '',
  fatal: boolean = false,
) => {
  if (window.GA_INITIALIZED && description) {
    ReactGA.exception({ description, fatal });
  }
};
