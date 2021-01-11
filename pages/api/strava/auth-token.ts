import fetch from "node-fetch";

export default async (req, res) => {
  const { code } = req.body;
  const CLIENT_ID = process.env.STRAVA_CLIENT_ID;
  const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
  try {
    const R = await fetch(
      `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&grant_type=authorization_code`,
      {
        method: "POST",
      }
    );
    const result = await R.json();
    res.status(200).json({ data: result });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

// Sample response:

// {
//     "token_type": "Bearer",
//     "expires_at": 1562908002,
//     "expires_in": 21600,
//     "refresh_token": "REFRESHTOKEN",
//     "access_token": "ACCESSTOKEN",
//     "athlete": {
//         "id": 123456,
//         "username": "MeowTheCat",
//         "resource_state": 2,
//         "firstname": "Meow",
//         "lastname": "TheCat",
//         "city": "",
//         "state": "",
//         "country": null,
//         ...
//     }
// }
