export function generatePaginationArr(currentPage, length, perPage) {
	const pageArr = [];
	for (let i = 1; i <= Math.ceil(length / perPage); i += 1) {
		pageArr.push(i);
	}
	let rightSide = pageArr.slice(currentPage, currentPage + 2);
	let leftSide = pageArr.slice(currentPage - 3, currentPage - 1);
	const pageDiapasonLength = rightSide.length + leftSide.length + 1;
	
	if (pageDiapasonLength < 5) {
		const addItems = pageArr.slice(rightSide[rightSide.length - 1], rightSide[rightSide.length - 1] + 5 - pageDiapasonLength);
		rightSide = rightSide.concat(addItems);
	}
	
	const newPageDiapason = rightSide.length + leftSide.length + 1;
	
	if (newPageDiapason < 5) {
		const addItems = pageArr.slice(leftSide[0] - 1 - (5 - newPageDiapason), leftSide[0] - 1);
		leftSide = addItems.concat(leftSide);
	}
	
	if (!leftSide.includes(1) && currentPage !== 1) {
		if (leftSide[0] - 1 !== 1 && currentPage - 1 !== 1) {
			leftSide.unshift(null);
		}
		leftSide.unshift(1);
	}
	if (!rightSide.includes(pageArr[pageArr.length - 1]) && currentPage !== pageArr[pageArr.length - 1]) {
		if (rightSide[rightSide.length - 1] + 1 !== pageArr[pageArr.length - 1]) {
			rightSide.push(null);
		}
		rightSide.push(pageArr[pageArr.length - 1]);
	}
	
	return [...leftSide, currentPage, ...rightSide];
}
