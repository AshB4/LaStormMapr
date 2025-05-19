/** @format */

export const fetchStormAlerts = async () => {
	try {
		const res = await fetch("https://api.weather.gov/alerts/active?area=LA");
		const data = await res.json();

		const alerts = (data.features || []).map((item, index) => ({
			id: item.id || `storm-${index}`,
			event: item.properties.event,
			headline: item.properties.headline,
			description: item.properties.description,
			areaDesc: item.properties.areaDesc,
			severity: item.properties.severity,
			certainty: item.properties.certainty,
			urgency: item.properties.urgency,
			geometry: item.geometry, 
		}));

		return alerts;
	} catch (err) {
		console.error("Error fetching storm alerts:", err);
		return [];
	}
};
