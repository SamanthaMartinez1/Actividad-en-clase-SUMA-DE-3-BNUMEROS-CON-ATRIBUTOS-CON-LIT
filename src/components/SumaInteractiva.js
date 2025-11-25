import { LitElement, html, css } from 'lit';

export class SumaInteractiva extends LitElement {
  static properties = {
    numero1: { type: Number },
    numero2: { type: Number },
    numero3: { type: Number },
    resultado: { type: Number }
  };

  constructor() {
    super();
    this.numero1 = 0;
    this.numero2 = 0;
    this.numero3 = 0;
    this.resultado = 0; // Inicializamos el resultado
  }

  static styles = css`
    div {
      margin-top: 20px;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
      display: inline-block; /* Para que el div no ocupe todo el ancho */
    }
    input {
      margin: 5px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 60px;
      text-align: center;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-left: 10px;
    }
    button:hover {
      background-color: #45a049;
    }
    p {
      font-size: 1.2em;
      font-weight: bold;
      color: #333;
    }
  `;

  // Maneja el cambio en los inputs
  _handleChange(event) {
    const { name, value } = event.target;
    // Convertimos el valor a número, si no es un número válido se usa el 0
    this[name] = parseFloat(value) || 0;
  }

  // Calcula la suma al hacer clic en el botón
  _calcularSuma() {
    this.resultado = this.numero1 + this.numero2 + this.numero3;
  }

  render() {
    return html`
      <div>
        <input 
          type="number" 
          name="numero1" 
          .value=${this.numero1} 
          @input=${this._handleChange}
        />
        +
        <input 
          type="number" 
          name="numero2" 
          .value=${this.numero2} 
          @input=${this._handleChange}
        />
        +
        <input 
          type="number" 
          name="numero3" 
          .value=${this.numero3} 
          @input=${this._handleChange}
        />
        <button @click=${this._calcularSuma}>Calcular Suma</button>
        <p>Resultado: ${this.resultado}</p>
      </div>
    `;
  }
}

customElements.define('suma-interactiva', SumaInteractiva);