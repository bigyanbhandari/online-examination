import { useCallback, useEffect, useRef } from 'react';
export function useCallbackRef(
    callback,
    deps = [],
) {
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    });
    return useCallback(((...args) => callbackRef.current?.(...args)), deps);
}