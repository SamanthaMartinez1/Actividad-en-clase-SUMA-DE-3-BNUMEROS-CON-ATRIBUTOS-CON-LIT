import { LitElement, html, css } from 'lit';

export class SaluNombre extends LitElement {
  static properties = {
    nombre: { type: String }
  };

  constructor() {
    super();
    this.nombre = 'Usuario'; 
  }

  render() {
    return html`
      <p>Hola, soy ${this.nombre}</p>
    `;
  }
}

customElements.define('salu-nombre', SaluNombre);