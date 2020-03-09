import aw2 from '@mmstudio/an000002';

export default function an7(mm: aw2, key: string, default_value?: string) {
	return mm.data.params[key] || default_value;
}
