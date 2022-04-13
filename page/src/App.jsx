const App = () => {
  return (
    <div>
      <div>
        <strong>Se estan probando los Iframes del mapa igual puedes </strong><a href='/map'>Entrar al Mapa :D</a>
        <br />
        Si todo sale bien, este apartado se convertira en la pagina principal del mapa, para dar una induccion al usuario :$
      </div>

      <iframe src='/map' width={700} height={500} />
    </div>
  )
}

export default App
