export const SecondComponent = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-[#B7CD7F]">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <h1 className="text-center text-4xl md:text-5xl mb-10 font-bold">
          ¿Qué es IndiezCh?
        </h1>

        {/* Contenedor imagen + texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Imagen a la izquierda */}
          <img
            src="https://preview.redd.it/sz1cbp1r6uuz.jpg?width=320&crop=smart&auto=webp&s=dc78c72aa1f1eb2623636b28d5856e6cf0b9c5c5"
            alt="IndiezCh"
            className="w-full md:w-1/3 h-auto object-cover rounded-lg"
          />

          {/* Texto a la derecha */}
          <p className="text-left text-lg md:text-xl max-w-3xl">
            IndiezCh es una plataforma dedicada a promover y difundir la música indie chilena. 
            Nuestro objetivo es brindar un espacio donde los artistas emergentes puedan compartir 
            su talento y conectar con una audiencia apasionada por la música independiente. 
            A través de reseñas, entrevistas y listas de reproducción curadas, buscamos destacar 
            la diversidad y riqueza del panorama musical indie en Chile.
          </p>

        </div>
      </div>
    </div>
  )
}
