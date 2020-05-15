import { NextApiRequest, NextApiResponse } from 'next';

import { getTwitterBearer } from '@config';

type Response =
  | {
      id: number;
      profileBackgroundColor: string | null;
      profileBackgroundImageUrl: string | null;
      profileBackgroundImageUrlHttps: string | null;
      profileImageUrl: string | null;
      profileImageUrlHttps: {
        normal: string | null;
        large: string | null;
      };
    }
  | {
      error: string;
    };

interface TwitterApiResponse {
  id: number;
  id_str: string;
  name?: string;
  screen_name?: string;
  profile_background_color: string;
  profile_background_image_url?: string;
  profile_background_image_url_https?: string;
  profile_background_tile: boolean;
  profile_image_url?: string;
  profile_image_url_https?: string;
  profile_link_color?: string;
  profile_sidebar_border_color?: string;
  profile_sidebar_fill_color?: string;
  profile_text_color?: string;
  profile_use_background_image: boolean;
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  if (req.query.username) {
    const token = await getTwitterBearer();

    const data = await fetch(
      `https://api.twitter.com/1.1/users/show.json?screen_name=${req.query.username}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    ).then((resp) => resp.json() as Promise<TwitterApiResponse>);

    return res.json({
      id: data.id,
      profileBackgroundColor: data.profile_background_color ?? null,
      profileBackgroundImageUrl: data.profile_background_image_url ?? null,
      profileBackgroundImageUrlHttps:
        data.profile_background_image_url_https ?? null,
      profileImageUrl: data.profile_image_url ?? null,
      profileImageUrlHttps: {
        normal: data.profile_image_url_https ?? null,
        large:
          data.profile_image_url_https?.replace('normal', '400x400') ?? null,
      },
    });
  }

  res.status(500).json({ error: 'Provide username' });
};
