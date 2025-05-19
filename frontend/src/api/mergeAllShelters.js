/** @format */

import { fetchShelters } from "./fetchShelters";
import { fetchPetShelters } from "./fetchPetShelters";

export const fetchAndNormalizeShelters = async () => {
	try {
		const [generalShelters, petShelters] = await Promise.all([
			fetchShelters(),
			fetchPetShelters(),
		]);

		return [...generalShelters, ...petShelters];
	} catch (err) {
		console.error("Error merging shelters:", err);
		return [];
	}
};
