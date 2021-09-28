module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  packageOptions: {
    origin: 'https://pkg.snowpack.dev',
    source: 'remote',
  },
};
