;/*FB_PKG_DELIM*/

__d("useEventHandler",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useLayoutEffect,k=b.useRef;function a(a){var b=k(a);j(function(){b.current=a},[a]);return i(function(){b.current.apply(b,arguments)},[])}g["default"]=a}),98);