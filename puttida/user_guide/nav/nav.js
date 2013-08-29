function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'index.html">User Guide Home</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'toc.html">Table of Contents Page</a></li>' +
		'</ul>' +

		'<h3>Basic Info</h3>' +
		'<ul>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/requirements.html">Server Requirements</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'license.html">License Agreement</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'changelog.html">Change Log</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/credits.html">Credits</a></li>' +
		'</ul>' +

		'<h3>Installation</h3>' +
		'<ul>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'installation/downloads.html">Downloading CodeIgniter</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'installation/index.html">Installation Instructions</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'installation/upgrading.html">Upgrading from a Previous Version</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'installation/troubleshooting.html">Troubleshooting</a></li>' +
		'</ul>' +

		'<h3>Introduction</h3>' +
		'<ul>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/getting_started.html">Getting Started</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/at_a_glance.html">CodeIgniter at a Glance</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/cheatsheets.html">CodeIgniter Cheatsheets</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/features.html">Supported Features</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/appflow.html">Application Flow Chart</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/mvc.html">Model-View-Controller</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'overview/goals.html">Architectural Goals</a></li>' +
		'</ul>' +
		
		'<h3>Tutorial</h3>' +
		'<ul>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'tutorial/index.html">Introduction</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'tutorial/static_pages.html">Static pages</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'tutorial/news_section.html">News section</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'tutorial/create_news_items.html">Create news items</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'tutorial/conclusion.html">Conclusion</a></li>' +
		'</ul>' +
		
		'</td><td class="td_sep" valign="top">' +

		'<h3>General Topics</h3>' +
		'<ul>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/urls.html">CodeIgniter URLs</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/controllers.html">Controllers</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/reserved_names.html">Reserved Names</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/views.html">Views</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/models.html">Models</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/helpers.html">Helpers</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/libraries.html">Using CodeIgniter Libraries</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/creating_libraries.html">Creating Your Own Libraries</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/drivers.html">Using CodeIgniter Drivers</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/creating_drivers.html">Creating Your Own Drivers</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/core_classes.html">Creating Core Classes</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/hooks.html">Hooks - Extending the Core</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/autoloader.html">Auto-loading Resources</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/common_functions.html">Common Functions</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/routing.html">URI Routing</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/errors.html">Error Handling</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/caching.html">Caching</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/profiling.html">Profiling Your Application</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/cli.html">Running via the CLI</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/managing_apps.html">Managing Applications</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/environments.html">Handling Multiple Environments</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/alternative_php.html">Alternative PHP Syntax</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/security.html">Security</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'general/styleguide.html">PHP Style Guide</a></li>' +
			'<li><a href="../../../FormMVC/user_guide/nav/'+base+'doc_style/index.html">Writing Documentation</a></li>' +
		'</ul>' +

		'<h3>Additional Resources</h3>' +
		'<ul>' +
		'<li><a href="http://codeigniter.com/forums/">Community Forums</a></li>' +
		'<li><a href="http://codeigniter.com/wiki/">Community Wiki</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Class Reference</h3>' +
		'<ul>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/benchmark.html">Benchmarking Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/calendar.html">Calendar Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/cart.html">Cart Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/config.html">Config Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/email.html">Email Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/encryption.html">Encryption Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/file_uploading.html">File Uploading Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/form_validation.html">Form Validation Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/ftp.html">FTP Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/table.html">HTML Table Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/image_lib.html">Image Manipulation Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/input.html">Input Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/javascript.html">Javascript Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/loader.html">Loader Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/language.html">Language Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/migration.html">Migration Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/output.html">Output Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/pagination.html">Pagination Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/security.html">Security Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/sessions.html">Session Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/trackback.html">Trackback Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/parser.html">Template Parser Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/typography.html">Typography Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/unit_testing.html">Unit Testing Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/uri.html">URI Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/user_agent.html">User Agent Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/xmlrpc.html">XML-RPC Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/zip.html">Zip Encoding Class</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Driver Reference</h3>' +
		'<ul>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/caching.html">Caching Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'database/index.html">Database Class</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'libraries/javascript.html">Javascript Class</a></li>' +
		'</ul>' +

		'<h3>Helper Reference</h3>' +
		'<ul>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/array_helper.html">Array Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/captcha_helper.html">CAPTCHA Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/cookie_helper.html">Cookie Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/date_helper.html">Date Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/directory_helper.html">Directory Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/download_helper.html">Download Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/email_helper.html">Email Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/file_helper.html">File Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/form_helper.html">Form Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/html_helper.html">HTML Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/inflector_helper.html">Inflector Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/language_helper.html">Language Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/number_helper.html">Number Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/path_helper.html">Path Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/security_helper.html">Security Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/smiley_helper.html">Smiley Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/string_helper.html">String Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/text_helper.html">Text Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/typography_helper.html">Typography Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/url_helper.html">URL Helper</a></li>' +
		'<li><a href="../../../FormMVC/user_guide/nav/'+base+'helpers/xml_helper.html">XML Helper</a></li>' +
		'</ul>' +

		'</td></tr></table>');
}