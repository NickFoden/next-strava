import fetch from "node-fetch";

export default async (req, res) => {
  const { stravaUserId, token } = req.body;
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(
    `https://www.strava.com/api/v3/athletes/${stravaUserId}/stats`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => res.status(200).json({ data: result }))
    .catch((error) => res.status(500).json({ error }));
};
