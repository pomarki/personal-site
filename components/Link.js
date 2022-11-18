class Link {
  constructor(props, onClick) {
    this.title = props.rusTitle;
    this._id = props.id;
    this.onClick = onClick;
  }
  _getTemplate() {
    const linkElement = document
      .getElementById("link")
      .content.querySelector(".main__title-container")
      .cloneNode(true);
    return linkElement;
  }
  setEventListeners() {
    this._link.addEventListener("click", () => this.onClick(this._id));
  }

  generateLink() {
    this._link = this._getTemplate();
    this._link.querySelector(".main__title").textContent = this.title;
    this.setEventListeners()
    return this._link;
  }
}

export { Link };
