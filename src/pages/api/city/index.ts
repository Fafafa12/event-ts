import nc from "next-connect";
import onError from "../../../../middlewares/errors";

import { getCities, getOneCity, createCity, updateCity, deleteCity } from "../../../../controllers/CityController";

// initiale next-connect with error middleware
const handler = nc({ onError });

handler.get(getCities);
handler.get(getOneCity);
handler.post(createCity);
handler.put(updateCity);
handler.delete(deleteCity);

export default handler;