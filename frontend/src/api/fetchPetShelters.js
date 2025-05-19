/** @format */

export const fetchPetShelters = async () => {
	try {
		const res = await fetch("https://data.brla.gov/resource/3t7g-ia4h.json");
		const data = await res.json();

		const formatted = (data || [])
			.filter((item) => item.the_geom && item.the_geom.coordinates)
			.map((item, i) => ({
				id: `pet-${i}`,
				name: item.business_name || "Pet Facility",
				address: item.full_address || "",
				phone: item.phone_number || "",
				website: item.website || "",
				latitude: parseFloat(item.the_geom.coordinates[1]),
				longitude: parseFloat(item.the_geom.coordinates[0]),
				type: "Pet Shelter",
				details: "Pet preparedness location",
			}));

		return formatted;
	} catch (err) {
		console.error("Error fetching pet shelter data:", err);
		return [];
	}
};
