// SAMPLE
this.manifest = {
    "name": "Quick Pastefire",
    "icon": "icon128.png",
    "settings": [
	{
		"tab": i18n.get("information"),
		"group": i18n.get("login"),
		"name": "email",
		"type": "text",
		"label": i18n.get("email"),
	},
	{
		"tab": i18n.get("information"),
		"group": i18n.get("login"),
		"name": "password",
		"type": "text",
		"label": i18n.get("password"),
		"masked": true
	}
]};