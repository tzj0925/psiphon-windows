/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */


(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home3': '&#xe602;',
		'icon-cog': '&#xe672;',
		'icon-bubble-heart': '&#xe7e1;',
		'icon-rocket': '&#xe837;',
		'icon-earth': '&#xe884;',
		'icon-network': '&#xe886;',
		'icon-happy': '&#xe889;',
		'icon-smile': '&#xe88a;',
		'icon-sad': '&#xe88d;',
		'icon-dream': '&#xe88f;',
		'icon-happy-grin': '&#xe894;',
		'icon-mad': '&#xe896;',
		'icon-wondering': '&#xe89b;',
		'icon-confused': '&#xe89c;',
		'icon-refresh': '&#xe8d3;',
		'icon-refresh2': '&#xe8d4;',
		'icon-undo2': '&#xe8d8;',
		'icon-redo2': '&#xe8d9;',
		'icon-sync': '&#xe8da;',
		'icon-sync2': '&#xe8dd;',
		'icon-bug': '&#xe90a;',
		'icon-list': '&#xe92c;',
		'icon-check': '&#xe934;',
		'icon-plus': '&#xe936;',
		'icon-chevron-up': '&#xe939;',
		'icon-chevron-down': '&#xe93a;',
		'icon-arrow-right': '&#xe944;',
		'icon-warning': '&#xe955;',
		'icon-notification-circle': '&#xe956;',
		'icon-checkmark-circle': '&#xe959;',
		'icon-chevron-up-circle': '&#xe962;',
		'icon-chevron-down-circle': '&#xe963;',
		'icon-chevron-up-square': '&#xe995;',
		'icon-chevron-down-square': '&#xe996;',
		'icon-check-square': '&#xe999;',
		'icon-cross-square': '&#xe99a;',
		'icon-prohibited': '&#xe99c;',
		'icon-hour-glass': '&#xe979;',
		'icon-spinner6': '&#xe97f;',
		'icon-spinner9': '&#xe982;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
