Package.describe({
  name: 'lsgoulart:reveal-js',
  summary: 'Reveal.js - HTML Presentation Framework',
  version: '3.1.1',
  git: 'https://github.com/lsgoulart/meteor-reveal-js.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1');
  api.addFiles([
	'reveal.js/css/theme/beige.css',
	'reveal.js/css/theme/black.css',
	'reveal.js/css/theme/blood.css',
	'reveal.js/css/theme/league.css',
	'reveal.js/css/theme/moon.css',
	'reveal.js/css/theme/night.css',
	'reveal.js/css/theme/serif.css',
	'reveal.js/css/theme/simple.css',
	'reveal.js/css/theme/sky.css',
	'reveal.js/css/theme/solarized.css',
	'reveal.js/css/theme/white.css',
	'reveal.js/lib/css/zenburn.css',
	'reveal.js/lib/font/league-gothic/league-gothic.css',
	'reveal.js/lib/font/source-sans-pro/source-sans-pro.css',
], 'client', { isAssets: true });

  api.addFiles([
	'reveal.js/js/reveal.js',
	'reveal.js/css/reveal.css'
  ], 'client');

  api.export('Reveal', 'client');
});
