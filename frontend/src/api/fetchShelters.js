/** @format */

export const fetchShelters = async () => {
	try {
		const res = await fetch("http://localhost:8000/api/shelters.php");
		const json = await res.json();

		console.log("Raw GeoJSON:", json);

		const features = json.features || [];

		const formatted = features.map((feature, i) => {
			const coords = feature.geometry?.coordinates || [0, 0];
			const props = feature.properties || {};

			return {
				id: `local-${i}`,
				name: props.name || "Unnamed Shelter",
				address: props.address || "",
				phone: props.phone || "",
				website: props.website || "",
				latitude: coords[1], // GeoJSON is [lng, lat]
				longitude: coords[0],
				type: props.pet_policy?.toLowerCase().includes("pet")
					? "Pet Shelter"
					: "General Shelter",
				details: props.details || "",
				image: props.image || "/default-shelter.png",
			};
		});

		console.log("Formatted shelters:", formatted);
		return formatted;
	} catch (err) {
		console.error("Error fetching shelter data:", err);
		return [];
	}
};
