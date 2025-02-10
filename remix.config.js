// remix.config.js
module.exports = {
    mode: 'production',
    assetsBuildDirectory: 'build/client',
    basename: '/',
    future: {
      v3_fetcherPersist: true, // Opt-in to the new fetcher persistence behavior
      v3_relativeSplatPath: true, // Opt-in to the new relative splat path behavior
      v3_throwAbortReason: true, // Opt-in to the new error format for aborted requests
      v3_routeConfig: false,
      v3_singleFetch: true, // Opt-in to the single fetch behavior
      v3_lazyRouteDiscovery: true, // Opt-in to the lazy route discovery behavior
      unstable_optimizeDeps: false,
    },
    isSpaMode: false,
    publicPath: '/',
    entry: {
      module: 'entryServer', // Make sure this matches your actual server entry
    },
    routes: {
      // Define your routes here. Example:
      '/': require.resolve('./routes/home/route.js'),
    },
  };