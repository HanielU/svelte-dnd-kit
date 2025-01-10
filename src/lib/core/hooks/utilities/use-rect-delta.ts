import {getRectDelta} from '$core/utilities/rect/getRectDelta.js';
import {useInitialValue} from './use-initial-value.js';
import type {ClientRect} from '$core/types/rect.js';

export function useRectDelta(rectFn: () => ClientRect | null) {
	const initialRect = useInitialValue(rectFn);

	return {
		get current() {
			return getRectDelta(rectFn(), initialRect.current);
		},
	};
}
