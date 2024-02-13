export const seoUtils = () => {
    const convertSEO = (keyword) => {
        function eliminaracento(letra) {
            switch (letra) {
              case 'á':
                return 'a'
              case 'é':
                return 'e'
              case 'í':
                return 'i'
              case 'ó':
                return 'o'
              case 'ú':
                return 'u'
              case 'ñ':
                return 'n'
              default:
                return letra
            }
          }

        function eliminarcaracteres(texto) {
            let newtext = ''
            for (const i in texto) {
              newtext += eliminaracento(texto[i])
            }
            return newtext
          }

        if (keyword)
          return (
            (
              eliminarcaracteres(keyword)
                .replace(/[-\s]+/g, '-') // convert spaces to hyphens
                .replace(/[^-\w\s]/g, '') // remove unneeded chars
                .replace(/^\s+|\s+$/g, '') + ''
            ).toLowerCase()
          ) // trim leading/trailing spaces
      };
    const getId = (locaId) => {
      return locaId.split(':').pop().split('.')[0];
    }
    return {
      convertSEO,
      getId
    } 
}