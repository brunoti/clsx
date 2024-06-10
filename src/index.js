const is = (val, type) => Object.prototype.toString.call(val) === `[object ${type}]`;

function toVal(mix) {
	var k, y, str='';

	if (is(mix, 'String') || is(mix, 'Number')) {
		str += mix;
	} else if (is(mix, 'Array')) {
			var len=mix.length;
			for (k=0; k < len; k++) {
				if (mix[k] && mix[k].valueOf()) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
	} else if (is(mix, 'Object')) {
		for (y in mix) {
			if (mix[y] && mix[y].valueOf()) {
				str && (str += ' ');
				str += y;
			}
		}
	}

	return str;
}

export function clsx() {
	var i=0, tmp, x, str='', len=arguments.length;
	for (; i < len; i++) {
		if ((tmp = arguments[i]) && tmp.valueOf()) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}

export default clsx;
