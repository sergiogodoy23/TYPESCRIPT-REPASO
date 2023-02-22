
export const TiposBasicos = () => {

  let nombre: string  = 'sergio';
  const edad: number = 35;
  const estarActivo: boolean = false;
  
  const poderes: string[] = []; //'Velocidad', 'Volar', 'Respirar en el agua'
  


  return (
    <>
      <h3>tipos basicos</h3>
        { nombre }, { edad }, { (estarActivo) ? 'activo' : 'no activo' }
        <br/>
        { poderes.join(', ')}
    </>
  )
}
