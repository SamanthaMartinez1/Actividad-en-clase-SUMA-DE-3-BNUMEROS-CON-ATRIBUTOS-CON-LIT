
import { LitElement, html, css } from "lit";

export class SumarNumeros extends LitElement {
  static properties = {
    numero1: { type: Number }, 
    numero2: { type: Number },
    numero3: { type: Number },
  };

  

  render() {
    const suma = this.numero1 + this.numero2 + this.numero3;
    return html`
      <div>
        <p>la suma de ${this.numero1} y ${this.numero2} y ${this.numero3} es: ${suma}</p>
      </div>
    `;
  }
}

customElements.define("sumar-numeros", SumarNumeros);
