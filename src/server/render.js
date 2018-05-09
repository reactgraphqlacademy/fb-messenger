import { renderToString } from 'react-dom/server'

export default (component, { response }) => {
  const bodyHTML = renderToString(component)

  response.send(`

  `
  )
}
