import useSWR from 'swr';

import fetch from '../libs/fetch';

const useTwitterImage = (username: string) => {
  return useSWR(`/api/twitter?username=${username}`, fetch);
};

export default useTwitterImage;
