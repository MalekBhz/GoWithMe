const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const cities_list = (async () => {
  const where = encodeURIComponent(
    JSON.stringify({
      name: {
        $exists: true,
      },
    })
  );
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Francecities_City?limit=10&order=name&keys=name,population,country,cityId,location&where=${where}`,
    {
      headers: {
        "X-Parse-Application-Id": "ETzLfNcBCceSxwWDNjsArvkBr5zPz5zHwpwO71Cw", // This is your app's application id
        "X-Parse-REST-API-Key": "fOqxt0CthSu1qf8EESBuQol6w7yov84ftu61VQHk", // This is your app's REST API key
      },
    }
  );
  const data = await response.json(); // Here you have the data that you need
  //console.log(JSON.stringify(data, null, 2));
})();
