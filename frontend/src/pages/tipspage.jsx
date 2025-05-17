const TipsPage = () => {
  return (
    <div className="container my-4">
      <h1 className="text-primary mb-4 fw-bold">Hurricane Prep Tips</h1>

      <ul className="list-group mb-5">
        <li className="list-group-item">💧 Stock up on water — one gallon per person per day</li>
        <li className="list-group-item">🔦 Charge your devices (and bring the battery packs!)</li>
        <li className="list-group-item">📻 Have a weather radio or app for alerts</li>
        <li className="list-group-item">🐾 Don’t forget food and meds for pets</li>
        <li className="list-group-item">🧻 Toilet paper. Enough said.</li>
      </ul>

      <h2 className="text-accent mb-3f fw-bold">FAQs</h2>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Where do I find the nearest shelter?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Use the map on the homepage or search by parish. You can also download a CSV in the admin dashboard if you’re feeling nostalgic.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="faqTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Do I need to bring ID to a shelter?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, bring some form of ID and any medication or documents you may need. And snacks. Always bring snacks.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="faqThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Are pets allowed in emergency shelters?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Some shelters are pet-friendly — check the shelter card or call ahead. Don’t let Fluffy get left behind.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsPage;
