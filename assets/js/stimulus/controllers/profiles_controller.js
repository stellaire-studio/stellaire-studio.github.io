export default class extends Stimulus.Controller {
  static targets = ["profileCard", "profileDiagramCircle"];

  selectProfile(event) {
    event.stopPropagation();

    this.currentProfileId = event.currentTarget.dataset.profileId;

    this.#showProfileCard()
    this.#highlightProfileDiagramCircle()
  }

  #showProfileCard() {
    this.profileCardTargets.forEach(card => {
      card.classList.add("hidden");
    });

    this.currentProfileCard.classList.remove("hidden");
  }

  #highlightProfileDiagramCircle() {
    this.#resetAllProfileDiagramCircles();
    this.#highlightCurrentProfileDiagramCircle();
  }

  #resetAllProfileDiagramCircles() {
    this.profileDiagramCircleTargets.forEach(circle => {
      circle.classList.add(circle.dataset.baseClass);

      const cofounderLabel = circle.querySelector(this.profileDiagramCircleFounderLabelSelector);
      const stellaireLabel = circle.querySelector(this.profileDiagramCircleStellaireLabelSelector);

      if (cofounderLabel) cofounderLabel.classList.add(cofounderLabel.dataset.labelHiddenClass);
      if (stellaireLabel) stellaireLabel.classList.remove(stellaireLabel.dataset.labelHiddenClass);

      const selectedClasses = circle.dataset.selectedClass.split(' ');

      selectedClasses.forEach(className => {
        if (className) circle.classList.remove(className);
      });
    });
  }

  #highlightCurrentProfileDiagramCircle() {
    const selectedCircle = this.currentProfileDiagramCircle;

    const cofounderLabel = selectedCircle.querySelector(this.profileDiagramCircleFounderLabelSelector);
    const stellaireLabel = selectedCircle.querySelector(this.profileDiagramCircleStellaireLabelSelector);

    if (cofounderLabel) cofounderLabel.classList.remove(cofounderLabel.dataset.labelHiddenClass);
    if (stellaireLabel) stellaireLabel.classList.add(stellaireLabel.dataset.labelHiddenClass);

    const selectedClasses = selectedCircle.dataset.selectedClass.split(' ');

    selectedClasses.forEach(className => {
      if (className) selectedCircle.classList.add(className);
    });

    const baseClasses = selectedCircle.dataset.baseClass.split(' ');

    baseClasses.forEach(className => {
      if (className) selectedCircle.classList.remove(className);
    });
  }

  #currentProfileId = null;
  get currentProfileId() {
    return this.#currentProfileId;
  }

  set currentProfileId(profileId) {
    this.#currentProfileId = profileId;
  }

  get currentProfileDiagramCircle() {
    return this.profileDiagramCircleTargets.find(circle => circle.dataset.profileId === this.currentProfileId);
  }

  get currentProfileCard() {
    return this.profileCardTargets.find(card => card.dataset.profileId === this.currentProfileId);
  }

  get currentProfileDiagramCircleFounderLabel() {
    return this.currentProfileDiagramCircle.querySelector(this.profileDiagramCircleFounderLabelSelector);
  }

  get currentProfileDiagramCircleStellaireLabel() {
    return this.currentProfileDiagramCircle.querySelector(this.profileDiagramCircleStellaireLabelSelector);
  }

  get profileDiagramCircleFounderLabelSelector() {
    return "[data-label-founder]";
  }

  get profileDiagramCircleStellaireLabelSelector() {
    return "[data-label-stellaire]";
  }
}
