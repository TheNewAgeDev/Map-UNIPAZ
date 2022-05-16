import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

const CODE = `
<iframe width='100%' height='100%' src='https://unimapz.surge.sh/map'></iframe>
`

const HTML = Prism.highlight(CODE, Prism.languages.html, 'html')

const Code = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: HTML
    }}
    />
  )
}

export default Code
