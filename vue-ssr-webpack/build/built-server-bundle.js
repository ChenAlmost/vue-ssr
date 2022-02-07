const { createBundleRenderer } = require('vue-server-renderer')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  template, // (optional) page template
  clientManifest // (optional) client build manifest
})

// inside a server handler...
server.get('*', (req, res) => {
  const context = { url: req.url }
  // No need to pass an app here because it is auto-created by
  // executing the bundle. Now our server is decoupled from our Vue app!
  renderer.renderToString(context, (err, html) => {
    // handle error...
    res.end(html)
  })
})