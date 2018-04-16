import { renderToString } from 'react-dom/server'

const DEV = process.env.NODE_ENV === 'development'
const assetManifest = JSON.parse(process.env.REACT_APP_ASSET_MANIFEST || '{}')
const bundleUrl = DEV ? '/static/js/bundle.js' : `/${assetManifest['main.js']}`

export default (component, { sheet, response, status = 200, initialState = null }) => {
  const bodyHTML = renderToString(component)

  response.send(`
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="/static/css/main.css" media="all" rel="stylesheet" />
        <script>
          window.__store_initial_state__ = ${JSON.stringify(initialState)}
        </script>
        ${sheet.getStyleTags()}

        <link rel="manifest" href="/manifest.json">
        <link rel="shortcut icon" href="/favicon.ico">
        <title>Clone Messenger</title>
      </head>
      <body>
        <div id="root">${bodyHTML}</div>
        <script type="application/javascript" src="${bundleUrl}"></script>
      </body>
  </html>
  `
  )
}
