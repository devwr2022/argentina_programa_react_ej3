

import './App.css';




const user = {
  Nombre:"Iphone 15",
  Descripción:"Telefono iphone con camara y wifi",
  Precio:"$1000",
  SKU:"-",
  Cantidad_disponible:"10",
};

export default function App() {
  return (
    <> <div class="datos">
      <h2>Nombre: {user.Nombre}</h2>
      <h2>Descripción: {user.Descripción}</h2>
      <h2>Precio: {user.Precio}</h2>
      <h2>SKU: {user.SKU}</h2>
      <h2>Cantidad: {user.Cantidad_disponible}</h2>
      </div>
    </>
  );
}



