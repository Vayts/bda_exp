export function fileTypeValidation(value) {
	const type = value.name.split('.').pop();
	return ['png', 'jpg', 'jpeg'].includes(type);
}

export function getCategoriesTop(arr) {
	if (!arr.length) return [];
	let categories = [];
	const top = {};
	arr.forEach((item) => {
		categories = [...categories, ...item.categories];
	});
	
	categories.forEach((item) => {
		if (top[item]) {
			top[item] = {
				...top[item],
				counter: top[item].counter + 1,
			};
		} else {
			top[item] = {
				counter: 1,
				value: item,
			};
		}
	});
	
	return Object.values(top).sort((a, b) => b.counter - a.counter);
}
