const test = require('ava');

const { default: a } = require('../dist/index');

test('get url param => without default', (t) => {
	const mm = {
		data: {
			params: {
				'foo': 'bar'
			}
		}
	};
	const v = a(mm, 'foo', 'mmstudio');
	t.is(v, 'bar');
});

test('get url param => with default', (t) => {
	const mm = {
		data: {
			params: {
			}
		}
	};
	const v = a(mm, 'foo', 'mmstudio');
	t.is(v, 'mmstudio');
});
