import {getWindow} from '../execution-context/get-window';

export function isDocument(node: Node): node is Document {
	const {Document} = getWindow(node);

	return node instanceof Document;
}
