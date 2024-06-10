export function clsx() {
	var i=0, tmp, str='', len=arguments.length;
	for (; i < len; i++) {
		if (tmp = arguments[i]) {
			if (Object.prototype.toString.call(tmp) === '[object String]') {
				str += (str && ' ') + tmp;
			}
		}
	}
	return str;
}

export default clsx;
