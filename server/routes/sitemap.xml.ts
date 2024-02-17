import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import usuarios from '../../data/usuarios.json'

export default defineEventHandler(async (event) => {
  const convertSEO = (keyword: string) => {
    function eliminaracento(letra: string) {
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

    function eliminarcaracteres(texto: string) {
        let newtext = ''
        const chars: string[] = texto.split('');
        for (const i in chars) {
          newtext += eliminaracento(chars[i])
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
  }
  console.log('usuario 1');
  console.log(usuarios[0])
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://main--subexpuesta.netlify.app'
  })
  for (const doc of docs) {    
    const isLoca = doc._path?.includes('localizaciones')
    let titulo = ""
    let tituloSEO: string | undefined = ""!
    let urlSitemap = doc._path
    if (isLoca) {
      titulo = doc.titulo!
      tituloSEO = convertSEO(titulo)
      urlSitemap += "/"+tituloSEO
    }
    sitemap.write({
      url: urlSitemap
    })
  }
  for (const usuario of usuarios) {    
    let urlSitemap = "/usuario/"+usuario.username
    
    sitemap.write({
      url: urlSitemap
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
