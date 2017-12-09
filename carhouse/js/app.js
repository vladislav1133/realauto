/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(17);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexApp__ = __webpack_require__(13);
__webpack_require__(3);



__WEBPACK_IMPORTED_MODULE_0__indexApp__["a" /* App */].init();

//
// $(document).ready(function () {
//
// console.log('WWWWEEEWWWWW')
//
//
//     // if ($('#main-aside').hasClass('main-aside') && ($(window).width() > 768)) {
//     //   $('.index-header').height($(window).innerHeight())
//     // }
// })
//
//
//

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {

try {
    window.$ = global.jQuery = __webpack_require__(0);

    __webpack_require__(4);
    __webpack_require__(5);
    __webpack_require__(6);
    __webpack_require__(7);
    __webpack_require__(8);
    __webpack_require__(10);
    __webpack_require__(11);
    __webpack_require__(12);
} catch (e) {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}

+function ($) {
  'use strict';

  var version = $.fn.jquery.split(' ')[0].split('.');
  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false; // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });
    var callback = function callback() {
      if (!called) $($el).trigger($.support.transition.end);
    };
    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();

    if (!$.support.transition) return;

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function handle(e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]';
  var Alert = function Alert(el) {
    $(el).on('click', dismiss, this.close);
  };

  Alert.VERSION = '3.3.7';

  Alert.TRANSITION_DURATION = 150;

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector);

    if (e) e.preventDefault();

    if (!$parent.length) {
      $parent = $this.closest('.alert');
    }

    $parent.trigger(e = $.Event('close.bs.alert'));

    if (e.isDefaultPrevented()) return;

    $parent.removeClass('in');

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }

    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
  };

  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');

      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.alert;

  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert;

  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  };

  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function Button(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };

  Button.VERSION = '3.3.7';

  Button.DEFAULTS = {
    loadingText: 'loading...'
  };

  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();

    state += 'Text';

    if (data.resetText == null) $el.data('resetText', $el[val]());

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state]);

      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d).prop(d, true);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d).prop(d, false);
      }
    }, this), 0);
  };

  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');

    if ($parent.length) {
      var $input = this.$element.find('input');
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false;
        $parent.find('.active').removeClass('active');
        this.$element.addClass('active');
      } else if ($input.prop('type') == 'checkbox') {
        if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
        this.$element.toggleClass('active');
      }
      $input.prop('checked', this.$element.hasClass('active'));
      if (changed) $input.trigger('change');
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
      this.$element.toggleClass('active');
    }
  };

  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.button', data = new Button(this, options));

      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
    });
  }

  var old = $.fn.button;

  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;

  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };

  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target).closest('.btn');
    Plugin.call($btn, 'toggle');
    if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
      // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
      e.preventDefault();
      // The target component still receive the focus
      if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
    }
  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function Carousel(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = null;
    this.sliding = null;
    this.interval = null;
    this.$active = null;
    this.$items = null;

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };

  Carousel.VERSION = '3.3.7';

  Carousel.TRANSITION_DURATION = 600;

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  };

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return;
    switch (e.which) {
      case 37:
        this.prev();break;
      case 39:
        this.next();break;
      default:
        return;
    }

    e.preventDefault();
  };

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);

    this.interval && clearInterval(this.interval);

    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

    return this;
  };

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active);
    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
    if (willWrap && !this.options.wrap) return active;
    var delta = direction == 'prev' ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this.$items.length;
    return this.$items.eq(itemIndex);
  };

  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

    if (pos > this.$items.length - 1 || pos < 0) return;

    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos);
    }); // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle();

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
  };

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }

    this.interval = clearInterval(this.interval);

    return this;
  };

  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide('next');
  };

  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide('prev');
  };

  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || this.getItemForDirection(type, $active);
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var that = this;

    if ($next.hasClass('active')) return this.sliding = false;

    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;

    this.sliding = true;

    isCycling && this.pause();

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth; // force reflow
      $active.addClass(direction);
      $next.addClass(direction);
      $active.one('bsTransitionEnd', function () {
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }

    isCycling && this.cycle();

    return this;
  };

  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;

      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
    });
  }

  var old = $.fn.carousel;

  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel;

  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };

  // CAROUSEL DATA-API
  // =================

  var clickHandler = function clickHandler(e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    if (!$target.hasClass('carousel')) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex) options.interval = false;

    Plugin.call($target, options);

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }

    e.preventDefault();
  };

  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }

    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.3.7';

  Collapse.TRANSITION_DURATION = 350;

  Collapse.DEFAULTS = {
    toggle: true
  };

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;

    var activesData;
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();

    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

    this.transitioning = 1;

    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;

    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    var dimension = this.dimension();

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };

  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');

    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  }

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;

  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };

  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);

    if (!$this.attr('data-target')) e.preventDefault();

    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();

    Plugin.call($target, option);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';
  var Dropdown = function Dropdown(element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };

  Dropdown.VERSION = '3.3.7';

  function getParent($this) {
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);

    return $parent && $parent.length ? $parent : $this.parent();
  }

  function clearMenus(e) {
    if (e && e.which === 3) return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $this = $(this);
      var $parent = getParent($this);
      var relatedTarget = { relatedTarget: this };

      if (!$parent.hasClass('open')) return;

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

      if (e.isDefaultPrevented()) return;

      $this.attr('aria-expanded', 'false');
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
    });
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);

    if ($this.is('.disabled, :disabled')) return;

    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    clearMenus();

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
      }

      var relatedTarget = { relatedTarget: this };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

      if (e.isDefaultPrevented()) return;

      $this.trigger('focus').attr('aria-expanded', 'true');

      $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
    }

    return false;
  };

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

    var $this = $(this);

    e.preventDefault();
    e.stopPropagation();

    if ($this.is('.disabled, :disabled')) return;

    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }

    var desc = ' li:not(.disabled):visible a';
    var $items = $parent.find('.dropdown-menu' + desc);

    if (!$items.length) return;

    var index = $items.index(e.target);

    if (e.which == 38 && index > 0) index--; // up
    if (e.which == 40 && index < $items.length - 1) index++; // down
    if (!~index) index = 0;

    $items.eq(index).trigger('focus');
  };

  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');

      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.dropdown;

  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;

  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };

  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.3.7';

  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

    this.$element.trigger(e);

    if (this.isShown || e.isDefaultPrevented()) return;

    this.isShown = true;

    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');

    this.escape();
    this.resize();

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);

      that.adjustDialog();

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in');

      that.enforceFocus();

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();

    e = $.Event('hide.bs.modal');

    this.$element.trigger(e);

    if (!this.isShown || e.isDefaultPrevented()) return;

    this.isShown = false;

    this.escape();
    this.resize();

    $(document).off('focusin.bs.modal');

    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

    this.$dialog.off('mousedown.dismiss.bs.modal');

    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;

      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));

      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');

      if (!callback) return;

      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;

  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

    if ($this.is('a')) e.preventDefault();

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function Tooltip(element, options) {
    this.type = null;
    this.options = null;
    this.enabled = null;
    this.timeout = null;
    this.hoverState = null;
    this.$element = null;
    this.inState = null;

    this.init('tooltip', element, options);
  };

  Tooltip.VERSION = '3.3.7';

  Tooltip.TRANSITION_DURATION = 150;

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  };

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
    this.inState = { click: false, hover: false, focus: false };

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
    }

    var triggers = this.options.trigger.split(' ');

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
  };

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }

    return options;
  };

  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value;
    });

    return options;
  };

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in';
      return;
    }

    clearTimeout(self.timeout);

    self.hoverState = 'in';

    if (!self.options.delay || !self.options.delay.show) return self.show();

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show();
    }, self.options.delay.show);
  };

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true;
    }

    return false;
  };

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
    }

    if (self.isInStateTrue()) return;

    clearTimeout(self.timeout);

    self.hoverState = 'out';

    if (!self.options.delay || !self.options.delay.hide) return self.hide();

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide();
    }, self.options.delay.hide);
  };

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom) return;
      var that = this;

      var $tip = this.tip();

      var tipId = this.getUID(this.type);

      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);

      if (this.options.animation) $tip.addClass('fade');

      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      this.$element.trigger('inserted.bs.' + this.type);

      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (autoPlace) {
        var orgPlacement = placement;
        var viewportDim = this.getPosition(this.$viewport);

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

        $tip.removeClass(orgPlacement).addClass(placement);
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

      this.applyPlacement(calculatedOffset, placement);

      var complete = function complete() {
        var prevHoverState = that.hoverState;
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;

        if (prevHoverState == 'out') that.leave(that);
      };

      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    }
  };

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10);

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop)) marginTop = 0;
    if (isNaN(marginLeft)) marginLeft = 0;

    offset.top += marginTop;
    offset.left += marginLeft;

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function using(props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);

    $tip.addClass('in');

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

    if (delta.left) offset.left += delta.left;else offset.top += delta.top;

    var isVertical = /top|bottom/.test(placement);
    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
  };

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
  };

  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };

  Tooltip.prototype.hide = function (callback) {
    var that = this;
    var $tip = $(this.$tip);
    var e = $.Event('hide.bs.' + this.type);

    function complete() {
      if (that.hoverState != 'in') $tip.detach();
      if (that.$element) {
        // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
      }
      callback && callback();
    }

    this.$element.trigger(e);

    if (e.isDefaultPrevented()) return;

    $tip.removeClass('in');

    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

    this.hoverState = null;

    return this;
  };

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };

  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };

  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;

    var el = $element[0];
    var isBody = el.tagName == 'BODY';

    var elRect = el.getBoundingClientRect();
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement;
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

    return $.extend({}, elRect, scroll, outerDims, elOffset);
  };

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
  };

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 };
    if (!this.$viewport) return delta;

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);

    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
      if (topEdgeOffset < viewportDimensions.top) {
        // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
        // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
      if (leftEdgeOffset < viewportDimensions.left) {
        // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.right) {
        // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }

    return delta;
  };

  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;

    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

    return title;
  };

  Tooltip.prototype.getUID = function (prefix) {
    do {
      prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));
    return prefix;
  };

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template);
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
      }
    }
    return this.$tip;
  };

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };

  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };

  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };

  Tooltip.prototype.toggle = function (e) {
    var self = this;
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }

    if (e) {
      self.inState.click = !self.inState.click;
      if (self.isInStateTrue()) self.enter(self);else self.leave(self);
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
    }
  };

  Tooltip.prototype.destroy = function () {
    var that = this;
    clearTimeout(this.timeout);
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type);
      if (that.$tip) {
        that.$tip.detach();
      }
      that.$tip = null;
      that.$arrow = null;
      that.$viewport = null;
      that.$element = null;
    });
  };

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tooltip;

  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip;

  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function Popover(element, options) {
    this.init('popover', element, options);
  };

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

  Popover.VERSION = '3.3.7';

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  });

  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

  Popover.prototype.constructor = Popover;

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };

  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

    $tip.removeClass('fade top bottom left right in');

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };

  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;

    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };

  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data && /destroy|hide/.test(option)) return;
      if (!data) $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.popover;

  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover;

  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body = $(document.body);
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
    this.refresh();
    this.process();
  }

  ScrollSpy.VERSION = '3.3.7';

  ScrollSpy.DEFAULTS = {
    offset: 10
  };

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype.refresh = function () {
    var that = this;
    var offsetMethod = 'offset';
    var offsetBase = 0;

    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }

    this.$body.find(this.selector).map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);

      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      that.offsets.push(this[0]);
      that.targets.push(this[1]);
    });
  };

  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;

    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null;
      return this.clear();
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
    }
  };

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;

    this.clear();

    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

    var active = $(selector).parents('li').addClass('active');

    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }

    active.trigger('activate.bs.scrollspy');
  };

  ScrollSpy.prototype.clear = function () {
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
  };

  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.scrollspy;

  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy;

  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  };

  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function Tab(element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element);
    // jscs:enable requireDollarBeforejQueryAssignment
  };

  Tab.VERSION = '3.3.7';

  Tab.TRANSITION_DURATION = 150;

  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return;

    var $previous = $ul.find('.active:last a');
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    });
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    });

    $previous.trigger(hideEvent);
    $this.trigger(showEvent);

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

    var $target = $(selector);

    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      });
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      });
    });
  };

  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

      if (transition) {
        element[0].offsetWidth; // reflow for transition
        element.addClass('in');
      } else {
        element.removeClass('fade');
      }

      if (element.parent('.dropdown-menu').length) {
        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
      }

      callback && callback();
    }

    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

    $active.removeClass('in');
  };

  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');

      if (!data) $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tab;

  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab;

  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };

  // TAB DATA-API
  // ============

  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  };

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);

    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

    this.$element = $(element);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;

    this.checkPosition();
  };

  Affix.VERSION = '3.3.7';

  Affix.RESET = 'affix affix-top affix-bottom';

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var targetHeight = this.$target.height();

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
    }

    var initializing = this.affixed == null;
    var colliderTop = initializing ? scrollTop : position.top;
    var colliderHeight = initializing ? targetHeight : height;

    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

    return false;
  };

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;

    var height = this.$element.height();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    var scrollHeight = Math.max($(document).height(), $(document.body).height());

    if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '');

      var affixType = 'affix' + (affix ? '-' + affix : '');
      var e = $.Event(affixType + '.bs.affix');

      this.$element.trigger(e);

      if (e.isDefaultPrevented()) return;

      this.affixed = affix;
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      });
    }
  };

  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.affix;

  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix;

  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };

  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();

      data.offset = data.offset || {};

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop != null) data.offset.top = data.offsetTop;

      Plugin.call($spy, data);
    });
  });
}(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.6
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/
!function (a, b) {
  window.console = window.console || { log: function log() {}, error: function error() {} }, a.fn.footable = function (a, c) {
    return a = a || {}, this.filter("table").each(function (d, e) {
      b.init(e, a, c);
    });
  };var c = { events: [] };b.__debug__ = JSON.parse(localStorage.getItem("footable_debug")) || !1, b.__debug_options__ = JSON.parse(localStorage.getItem("footable_debug_options")) || c, b.debug = function (d, e) {
    return b.is["boolean"](d) ? (b.__debug__ = d, void (b.__debug__ ? (localStorage.setItem("footable_debug", JSON.stringify(b.__debug__)), b.__debug_options__ = a.extend(!0, {}, c, e || {}), b.is.hash(e) && localStorage.setItem("footable_debug_options", JSON.stringify(b.__debug_options__))) : (localStorage.removeItem("footable_debug"), localStorage.removeItem("footable_debug_options")))) : b.__debug__;
  }, b.get = function (b) {
    return a(b).first().data("__FooTable__");
  }, b.init = function (a, c, d) {
    var e = b.get(a);return e instanceof b.Table && e.destroy(), new b.Table(a, c, d);
  }, b.getRow = function (b) {
    var c = a(b).closest("tr");return c.hasClass("footable-detail-row") && (c = c.prev()), c.data("__FooTableRow__");
  };
}(jQuery, FooTable = window.FooTable || {}), function (a) {
  var b = function b() {
    return !0;
  };a.arr = {}, a.arr.each = function (b, c) {
    if (a.is.array(b) && a.is.fn(c)) for (var d = 0, e = b.length; e > d && c(b[d], d) !== !1; d++) {}
  }, a.arr.get = function (b, c) {
    var d = [];if (!a.is.array(b)) return d;if (!a.is.fn(c)) return b;for (var e = 0, f = b.length; f > e; e++) {
      c(b[e], e) && d.push(b[e]);
    }return d;
  }, a.arr.any = function (c, d) {
    if (!a.is.array(c)) return !1;d = a.is.fn(d) ? d : b;for (var e = 0, f = c.length; f > e; e++) {
      if (d(c[e], e)) return !0;
    }return !1;
  }, a.arr.contains = function (b, c) {
    if (!a.is.array(b) || a.is.undef(c)) return !1;for (var d = 0, e = b.length; e > d; d++) {
      if (b[d] == c) return !0;
    }return !1;
  }, a.arr.first = function (c, d) {
    if (!a.is.array(c)) return null;d = a.is.fn(d) ? d : b;for (var e = 0, f = c.length; f > e; e++) {
      if (d(c[e], e)) return c[e];
    }return null;
  }, a.arr.map = function (b, c) {
    var d = [],
        e = null;if (!a.is.array(b) || !a.is.fn(c)) return d;for (var f = 0, g = b.length; g > f; f++) {
      null != (e = c(b[f], f)) && d.push(e);
    }return d;
  }, a.arr.remove = function (b, c) {
    var d = [],
        e = [];if (!a.is.array(b) || !a.is.fn(c)) return e;for (var f = 0, g = b.length; g > f; f++) {
      c(b[f], f, e) && (d.push(f), e.push(b[f]));
    }for (d.sort(function (a, b) {
      return b - a;
    }), f = 0, g = d.length; g > f; f++) {
      var h = d[f] - f;b.splice(h, 1);
    }return e;
  }, a.arr["delete"] = function (b, c) {
    var d = -1,
        e = null;if (!a.is.array(b) || a.is.undef(c)) return e;for (var f = 0, g = b.length; g > f; f++) {
      if (b[f] == c) {
        d = f, e = b[f];break;
      }
    }return -1 != d && b.splice(d, 1), e;
  }, a.arr.replace = function (a, b, c) {
    var d = a.indexOf(b);-1 !== d && (a[d] = c);
  };
}(FooTable), function (a) {
  a.is = {}, a.is.type = function (a, b) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) === b;
  }, a.is.defined = function (a) {
    return "undefined" != typeof a;
  }, a.is.undef = function (a) {
    return "undefined" == typeof a;
  }, a.is.array = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a);
  }, a.is.date = function (a) {
    return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime());
  }, a.is["boolean"] = function (a) {
    return "[object Boolean]" === Object.prototype.toString.call(a);
  }, a.is.string = function (a) {
    return "[object String]" === Object.prototype.toString.call(a);
  }, a.is.number = function (a) {
    return "[object Number]" === Object.prototype.toString.call(a) && !isNaN(a);
  }, a.is.fn = function (b) {
    return a.is.defined(window) && b === window.alert || "[object Function]" === Object.prototype.toString.call(b);
  }, a.is.error = function (a) {
    return "[object Error]" === Object.prototype.toString.call(a);
  }, a.is.object = function (a) {
    return "[object Object]" === Object.prototype.toString.call(a);
  }, a.is.hash = function (b) {
    return a.is.object(b) && b.constructor === Object && !b.nodeType && !b.setInterval;
  }, a.is.element = function (a) {
    return "object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? a instanceof HTMLElement : a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName;
  }, a.is.promise = function (b) {
    return a.is.object(b) && a.is.fn(b.then) && a.is.fn(b.promise);
  }, a.is.jq = function (b) {
    return a.is.defined(__webpack_provided_window_dot_jQuery) && b instanceof jQuery && b.length > 0;
  }, a.is.moment = function (b) {
    return a.is.defined(window.moment) && a.is.object(b) && a.is["boolean"](b._isAMomentObject);
  }, a.is.emptyObject = function (b) {
    if (!a.is.hash(b)) return !1;for (var c in b) {
      if (b.hasOwnProperty(c)) return !1;
    }return !0;
  }, a.is.emptyArray = function (b) {
    return a.is.array(b) ? 0 === b.length : !0;
  }, a.is.emptyString = function (b) {
    return a.is.string(b) ? 0 === b.length : !0;
  };
}(FooTable), function (a) {
  a.str = {}, a.str.contains = function (b, c, d) {
    return a.is.emptyString(b) || a.is.emptyString(c) ? !1 : c.length <= b.length && -1 !== (d ? b.toUpperCase().indexOf(c.toUpperCase()) : b.indexOf(c));
  }, a.str.containsExact = function (b, c, d) {
    return a.is.emptyString(b) || a.is.emptyString(c) || c.length > b.length ? !1 : new RegExp("\\b" + a.str.escapeRegExp(c) + "\\b", d ? "i" : "").test(b);
  }, a.str.containsWord = function (b, c, d) {
    if (a.is.emptyString(b) || a.is.emptyString(c) || b.length < c.length) return !1;for (var e = b.split(/\W/), f = 0, g = e.length; g > f; f++) {
      if (d ? e[f].toUpperCase() == c.toUpperCase() : e[f] == c) return !0;
    }return !1;
  }, a.str.from = function (b, c) {
    return a.is.emptyString(b) ? b : a.str.contains(b, c) ? b.substring(b.indexOf(c) + 1) : b;
  }, a.str.startsWith = function (b, c) {
    return a.is.emptyString(b) ? b == c : b.slice(0, c.length) == c;
  }, a.str.toCamelCase = function (b) {
    return a.is.emptyString(b) ? b : b.toUpperCase() === b ? b.toLowerCase() : b.replace(/^([A-Z])|[-\s_](\w)/g, function (b, c, d) {
      return a.is.string(d) ? d.toUpperCase() : c.toLowerCase();
    });
  }, a.str.random = function (b) {
    return b = a.is.emptyString(b) ? "" : b, b + Math.random().toString(36).substr(2, 9);
  }, a.str.escapeRegExp = function (b) {
    return a.is.emptyString(b) ? b : b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
}(FooTable), function (a) {
  "use strict";
  function b() {}Object.create || (Object.create = function () {
    var b = function b() {};return function (c) {
      if (arguments.length > 1) throw Error("Second argument not supported");if (!a.is.object(c)) throw TypeError("Argument must be an object");b.prototype = c;var d = new b();return b.prototype = null, d;
    };
  }());var c = /xyz/.test(function () {
    xyz;
  }) ? /\b_super\b/ : /.*/;b.__extend__ = function (b, d, e, f) {
    b[d] = a.is.fn(f) && c.test(e) ? function (a, b) {
      return function () {
        var a, c;return a = this._super, this._super = f, c = b.apply(this, arguments), this._super = a, c;
      };
    }(d, e) : e;
  }, b.extend = function (d, e) {
    function f(b, d, e, f) {
      b[d] = a.is.fn(f) && c.test(e) ? function (a, b, c) {
        return function () {
          var a, d;return a = this._super, this._super = c, d = b.apply(this, arguments), this._super = a, d;
        };
      }(d, e, f) : e;
    }var g = Array.prototype.slice.call(arguments);if (d = g.shift(), e = g.shift(), a.is.hash(d)) {
      var h = Object.create(this.prototype),
          i = this.prototype;for (var j in d) {
        "__ctor__" !== j && f(h, j, d[j], i[j]);
      }var k = a.is.fn(h.__ctor__) ? h.__ctor__ : function () {
        if (!a.is.fn(this.construct)) throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');this.construct.apply(this, arguments);
      };return h.construct = a.is.fn(h.construct) ? h.construct : function () {}, k.prototype = h, h.constructor = k, k.extend = b.extend, k;
    }a.is.string(d) && a.is.fn(e) && f(this.prototype, d, e, this.prototype[d]);
  }, a.Class = b, a.ClassFactory = a.Class.extend({ construct: function construct() {
      this.registered = {};
    }, contains: function contains(b) {
      return a.is.defined(this.registered[b]);
    }, names: function names() {
      var a,
          b = [];for (a in this.registered) {
        this.registered.hasOwnProperty(a) && b.push(a);
      }return b;
    }, register: function register(b, c, d) {
      if (a.is.string(b) && a.is.fn(c)) {
        var e = this.registered[b];this.registered[b] = { name: b, klass: c, priority: a.is.number(d) ? d : a.is.defined(e) ? e.priority : 0 };
      }
    }, load: function load(b, c, d) {
      var e,
          f,
          g = this,
          h = Array.prototype.slice.call(arguments),
          i = [],
          j = [];b = h.shift() || {};for (e in g.registered) {
        if (g.registered.hasOwnProperty(e)) {
          var k = g.registered[e];b.hasOwnProperty(e) && (f = b[e], a.is.string(f) && (f = a.getFnPointer(b[e])), a.is.fn(f) && (k = { name: e, klass: f, priority: g.registered[e].priority })), i.push(k);
        }
      }for (e in b) {
        b.hasOwnProperty(e) && !g.registered.hasOwnProperty(e) && (f = b[e], a.is.string(f) && (f = a.getFnPointer(b[e])), a.is.fn(f) && i.push({ name: e, klass: f, priority: 0 }));
      }return i.sort(function (a, b) {
        return b.priority - a.priority;
      }), a.arr.each(i, function (b) {
        a.is.fn(b.klass) && j.push(g._make(b.klass, h));
      }), j;
    }, make: function make(b, c, d) {
      var e,
          f = this,
          g = Array.prototype.slice.call(arguments);return b = g.shift(), e = f.registered[b], a.is.fn(e.klass) ? f._make(e.klass, g) : null;
    }, _make: function _make(a, b) {
      function c() {
        return a.apply(this, b);
      }return c.prototype = a.prototype, new c();
    } });
}(FooTable), function (a, b) {
  b.css2json = function (c) {
    if (b.is.emptyString(c)) return {};for (var d, e, f, g = {}, h = c.split(";"), i = 0, j = h.length; j > i; i++) {
      b.is.emptyString(h[i]) || (d = h[i].split(":"), b.is.emptyString(d[0]) || b.is.emptyString(d[1]) || (e = b.str.toCamelCase(a.trim(d[0])), f = a.trim(d[1]), g[e] = f));
    }return g;
  }, b.getFnPointer = function (a) {
    if (b.is.emptyString(a)) return null;var c = window,
        d = a.split(".");return b.arr.each(d, function (a) {
      c[a] && (c = c[a]);
    }), b.is.fn(c) ? c : null;
  }, b.checkFnValue = function (a, c, d) {
    function e(a, c, d) {
      return b.is.fn(c) ? function () {
        return c.apply(a, arguments);
      } : d;
    }return d = b.is.fn(d) ? d : null, b.is.fn(c) ? e(a, c, d) : b.is.type(c, "string") ? e(a, b.getFnPointer(c), d) : d;
  };
}(jQuery, FooTable), function (a, b) {
  b.Cell = b.Class.extend({ construct: function construct(a, b, c, d) {
      this.ft = a, this.row = b, this.column = c, this.created = !1, this.define(d);
    }, define: function define(c) {
      this.$el = b.is.element(c) || b.is.jq(c) ? a(c) : null, this.$detail = null;var d = b.is.hash(c) && b.is.hash(c.options) && b.is.defined(c.value);this.value = this.column.parser.call(this.column, b.is.jq(this.$el) ? this.$el : d ? c.value : c, this.ft.o), this.o = a.extend(!0, { classes: null, style: null }, d ? c.options : {}), this.classes = b.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.jq(this.$el) && this.$el.attr("style") ? b.css2json(this.$el.attr("style")) : b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {};
    }, $create: function $create() {
      this.created || ((this.$el = b.is.jq(this.$el) ? this.$el : a("<td/>")).data("value", this.value).contents().detach().end().append(this.format(this.value)), this._setClasses(this.$el), this._setStyle(this.$el), this.$detail = a("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__", this).append(a("<th/>")).append(a("<td/>")), this.created = !0);
    }, collapse: function collapse() {
      this.created && (this.$detail.children("th").html(this.column.title), this.$el.clone().attr("id", this.$el.attr("id") ? this.$el.attr("id") + "-detail" : void 0).css("display", "table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()), b.is.jq(this.$detail.parent()) || this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")));
    }, restore: function restore() {
      if (this.created) {
        if (b.is.jq(this.$detail.parent())) {
          var a = this.$detail.children("td").first();this.$el.attr("class", a.attr("class")).attr("style", a.attr("style")).css("display", this.column.hidden || !this.column.visible ? "none" : "table-cell").append(a.contents().detach());
        }this.$detail.detach();
      }
    }, parse: function parse() {
      return this.column.parser.call(this.column, this.$el, this.ft.o);
    }, format: function format(a) {
      return this.column.formatter.call(this.column, a, this.ft.o, this.row.value);
    }, val: function val(c, d, e) {
      if (b.is.undef(c)) return this.value;var f = this,
          g = b.is.hash(c) && b.is.hash(c.options) && b.is.defined(c.value);if (this.o = a.extend(!0, { classes: f.classes, style: f.style }, g ? c.options : {}), this.value = g ? c.value : c, this.classes = b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, e = b.is["boolean"](e) ? e : !0, this.created && e) {
        this.$el.data("value", this.value).empty();var h = this.$detail.children("td").first().empty(),
            i = b.is.jq(this.$detail.parent()) ? h : this.$el;i.append(this.format(this.value)), this._setClasses(i), this._setStyle(i), (b.is["boolean"](d) ? d : !0) && this.row.draw();
      }
    }, _setClasses: function _setClasses(a) {
      var c = !b.is.emptyArray(this.column.classes),
          d = !b.is.emptyArray(this.classes),
          e = null;a.removeAttr("class"), (c || d) && (c && d ? e = this.classes.concat(this.column.classes).join(" ") : c ? e = this.column.classes.join(" ") : d && (e = this.classes.join(" ")), b.is.emptyString(e) || a.addClass(e));
    }, _setStyle: function _setStyle(c) {
      var d = !b.is.emptyObject(this.column.style),
          e = !b.is.emptyObject(this.style),
          f = null;c.removeAttr("style"), (d || e) && (d && e ? f = a.extend({}, this.column.style, this.style) : d ? f = this.column.style : e && (f = this.style), b.is.hash(f) && c.css(f));
    } });
}(jQuery, FooTable), function (a, b) {
  b.Column = b.Class.extend({ construct: function construct(a, c, d) {
      this.ft = a, this.type = b.is.emptyString(d) ? "text" : d, this.virtual = b.is["boolean"](c.virtual) ? c.virtual : !1, this.$el = b.is.jq(c.$el) ? c.$el : null, this.index = b.is.number(c.index) ? c.index : -1, this.internal = !1, this.define(c), this.$create();
    }, define: function define(a) {
      this.hidden = b.is["boolean"](a.hidden) ? a.hidden : !1, this.visible = b.is["boolean"](a.visible) ? a.visible : !0, this.name = b.is.string(a.name) ? a.name : null, null == this.name && (this.name = "col" + (a.index + 1)), this.title = b.is.string(a.title) ? a.title : null, !this.virtual && null == this.title && b.is.jq(this.$el) && (this.title = this.$el.html()), null == this.title && (this.title = "Column " + (a.index + 1)), this.style = b.is.hash(a.style) ? a.style : b.is.string(a.style) ? b.css2json(a.style) : {}, this.classes = b.is.array(a.classes) ? a.classes : b.is.string(a.classes) ? a.classes.match(/\S+/g) : [], this.parser = b.checkFnValue(this, a.parser, this.parser), this.formatter = b.checkFnValue(this, a.formatter, this.formatter);
    }, $create: function $create() {
      (this.$el = !this.virtual && b.is.jq(this.$el) ? this.$el : a("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style);
    }, parser: function parser(c) {
      if (b.is.element(c) || b.is.jq(c)) {
        var d = a(c).data("value");return b.is.defined(d) ? d : a(c).html();
      }return b.is.defined(c) && null != c ? c + "" : null;
    }, formatter: function formatter(a, b, c) {
      return null == a ? "" : a;
    }, createCell: function createCell(a) {
      var c = b.is.jq(a.$el) ? a.$el.children("td,th").get(this.index) : null,
          d = b.is.hash(a.value) ? a.value[this.name] : null;return new b.Cell(this.ft, a, this, c || d);
    } }), b.columns = new b.ClassFactory(), b.columns.register("text", b.Column);
}(jQuery, FooTable), function (a, b) {
  b.Component = b.Class.extend({ construct: function construct(a, c) {
      if (!(a instanceof b.Table)) throw new TypeError("The instance parameter must be an instance of FooTable.Table.");this.ft = a, this.enabled = b.is["boolean"](c) ? c : !1;
    }, preinit: function preinit(a) {}, init: function init() {}, destroy: function destroy() {}, predraw: function predraw() {}, draw: function draw() {}, postdraw: function postdraw() {} }), b.components = new b.ClassFactory();
}(jQuery, FooTable), function (a, b) {
  b.Defaults = function () {
    this.stopPropagation = !1, this.on = null;
  }, b.defaults = new b.Defaults();
}(jQuery, FooTable), function (a, b) {
  b.Row = b.Class.extend({ construct: function construct(a, b, c) {
      this.ft = a, this.columns = b, this.created = !1, this.define(c);
    }, define: function define(c) {
      this.$el = b.is.element(c) || b.is.jq(c) ? a(c) : null, this.$toggle = a("<span/>", { "class": "footable-toggle fooicon fooicon-plus" });var d = b.is.hash(c),
          e = d && b.is.hash(c.options) && b.is.hash(c.value);this.value = d ? e ? c.value : c : null, this.o = a.extend(!0, { expanded: !1, classes: null, style: null }, e ? c.options : {}), this.expanded = b.is.jq(this.$el) ? this.$el.data("expanded") || this.o.expanded : this.o.expanded, this.classes = b.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.jq(this.$el) && this.$el.attr("style") ? b.css2json(this.$el.attr("style")) : b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, this.cells = this.createCells();var f = this;f.value = {}, b.arr.each(f.cells, function (a) {
        f.value[a.column.name] = a.val();
      });
    }, $create: function $create() {
      if (!this.created) {
        (this.$el = b.is.jq(this.$el) ? this.$el : a("<tr/>")).data("__FooTableRow__", this), this._setClasses(this.$el), this._setStyle(this.$el), "last" == this.ft.rows.toggleColumn && this.$toggle.addClass("last-column"), this.$details = a("<tr/>", { "class": "footable-detail-row" }).append(a("<td/>", { colspan: this.ft.columns.visibleColspan }).append(a("<table/>", { "class": "footable-details " + this.ft.classes.join(" ") }).append("<tbody/>")));var c = this;b.arr.each(c.cells, function (a) {
          a.created || a.$create(), c.$el.append(a.$el);
        }), c.$el.off("click.ft.row").on("click.ft.row", { self: c }, c._onToggle), this.created = !0;
      }
    }, createCells: function createCells() {
      var a = this;return b.arr.map(a.columns, function (b) {
        return b.createCell(a);
      });
    }, val: function val(c, d, e) {
      var f = this;if (!b.is.hash(c)) return b.is.hash(this.value) && !b.is.emptyObject(this.value) || (this.value = {}, b.arr.each(this.cells, function (a) {
        a.column.internal || (f.value[a.column.name] = a.val());
      })), this.value;this.collapse(!1);var g = b.is.hash(c),
          h = g && b.is.hash(c.options) && b.is.hash(c.value);if (this.o = a.extend(!0, { expanded: f.expanded, classes: f.classes, style: f.style }, h ? c.options : {}), this.expanded = this.o.expanded, this.classes = b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, g) {
        if (h && (c = c.value), b.is.hash(this.value)) for (var i in c) {
          c.hasOwnProperty(i) && (this.value[i] = c[i]);
        } else this.value = c;
      } else this.value = null;e = b.is["boolean"](e) ? e : !0, b.arr.each(this.cells, function (a) {
        !a.column.internal && b.is.defined(f.value[a.column.name]) && a.val(f.value[a.column.name], !1, e);
      }), this.created && e && (this._setClasses(this.$el), this._setStyle(this.$el), (b.is["boolean"](d) ? d : !0) && this.draw());
    }, _setClasses: function _setClasses(a) {
      var c = !b.is.emptyArray(this.classes),
          d = null;a.removeAttr("class"), c && (d = this.classes.join(" "), b.is.emptyString(d) || a.addClass(d));
    }, _setStyle: function _setStyle(a) {
      var c = !b.is.emptyObject(this.style),
          d = null;a.removeAttr("style"), c && (d = this.style, b.is.hash(d) && a.css(d));
    }, expand: function expand() {
      if (this.created) {
        var a = this;a.ft.raise("expand.ft.row", [a]).then(function () {
          a.__hidden__ = b.arr.map(a.cells, function (a) {
            return a.column.hidden && a.column.visible ? a : null;
          }), a.__hidden__.length > 0 && (a.$details.insertAfter(a.$el).children("td").first().attr("colspan", a.ft.columns.visibleColspan), b.arr.each(a.__hidden__, function (a) {
            a.collapse();
          })), a.$el.attr("data-expanded", !0), a.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"), a.expanded = !0, a.ft.raise("expanded.ft.row", [a]);
        });
      }
    }, collapse: function collapse(a) {
      if (this.created) {
        var c = this;c.ft.raise("collapse.ft.row", [c]).then(function () {
          b.arr.each(c.__hidden__, function (a) {
            a.restore();
          }), c.$details.detach(), c.$el.removeAttr("data-expanded"), c.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"), (b.is["boolean"](a) ? a : !0) && (c.expanded = !1), c.ft.raise("collapsed.ft.row", [c]);
        });
      }
    }, predraw: function predraw(a) {
      this.created && (this.expanded && this.collapse(!1), this.$toggle.detach(), a = b.is["boolean"](a) ? a : !0, a && this.$el.detach());
    }, draw: function draw(a) {
      this.created || this.$create(), b.is.jq(a) && a.append(this.$el);var c = this;b.arr.each(c.cells, function (a) {
        a.$el.css("display", a.column.hidden || !a.column.visible ? "none" : "table-cell"), c.ft.rows.showToggle && c.ft.columns.hasHidden && ("first" == c.ft.rows.toggleColumn && a.column.index == c.ft.columns.firstVisibleIndex || "last" == c.ft.rows.toggleColumn && a.column.index == c.ft.columns.lastVisibleIndex) && a.$el.prepend(c.$toggle), a.$el.add(a.column.$el).removeClass("footable-first-visible footable-last-visible"), a.column.index == c.ft.columns.firstVisibleIndex && a.$el.add(a.column.$el).addClass("footable-first-visible"), a.column.index == c.ft.columns.lastVisibleIndex && a.$el.add(a.column.$el).addClass("footable-last-visible");
      }), this.expanded && this.expand();
    }, toggle: function toggle() {
      this.created && this.ft.columns.hasHidden && (this.expanded ? this.collapse() : this.expand());
    }, _onToggle: function _onToggle(b) {
      var c = b.data.self;a(b.target).is(c.ft.rows.toggleSelector) && c.toggle();
    } });
}(jQuery, FooTable), function (a, b) {
  b.instances = [], b.Table = b.Class.extend({ construct: function construct(c, d, e) {
      this._resizeTimeout = null, this.id = b.instances.push(this), this.initialized = !1, this.$el = (b.is.jq(c) ? c : a(c)).first(), this.$loader = a("<div/>", { "class": "footable-loader" }).append(a("<span/>", { "class": "fooicon fooicon-loader" })), this.o = a.extend(!0, {}, b.defaults, d), this.data = this.$el.data() || {}, this.classes = [], this.components = b.components.load(b.is.hash(this.data.components) ? this.data.components : this.o.components, this), this.breakpoints = this.use(FooTable.Breakpoints), this.columns = this.use(FooTable.Columns), this.rows = this.use(FooTable.Rows), this._construct(e);
    }, _construct: function _construct(a) {
      var c = this;return this._preinit().then(function () {
        return c._init().then(function () {
          return c.raise("ready.ft.table").then(function () {
            b.is.fn(a) && a.call(c, c);
          });
        });
      }).always(function (a) {
        c.$el.show(), b.is.error(a) && console.error("FooTable: unhandled error thrown during initialization.", a);
      });
    }, _preinit: function _preinit() {
      var a = this;return this.raise("preinit.ft.table", [a.data]).then(function () {
        var c = (a.$el.attr("class") || "").match(/\S+/g) || [];a.o.ajax = b.checkFnValue(a, a.data.ajax, a.o.ajax), a.o.stopPropagation = b.is["boolean"](a.data.stopPropagation) ? a.data.stopPropagation : a.o.stopPropagation;for (var d = 0, e = c.length; e > d; d++) {
          b.str.startsWith(c[d], "footable") || a.classes.push(c[d]);
        }return a.$el.hide().after(a.$loader), a.execute(!1, !1, "preinit", a.data);
      });
    }, _init: function _init() {
      var c = this;return c.raise("init.ft.table").then(function () {
        var d = c.$el.children("thead"),
            e = c.$el.children("tbody"),
            f = c.$el.children("tfoot");return c.$el.addClass("footable footable-" + c.id), b.is.hash(c.o.on) && c.$el.on(c.o.on), 0 == f.length && c.$el.append(f = a("<tfoot/>")), 0 == e.length && c.$el.append("<tbody/>"), 0 == d.length && c.$el.prepend(d = a("<thead/>")), c.execute(!1, !0, "init").then(function () {
          return c.$el.data("__FooTable__", c), 0 == f.children("tr").length && f.remove(), 0 == d.children("tr").length && d.remove(), c.raise("postinit.ft.table").then(function () {
            return c.draw();
          }).always(function () {
            a(window).off("resize.ft" + c.id, c._onWindowResize).on("resize.ft" + c.id, { self: c }, c._onWindowResize), c.initialized = !0;
          });
        });
      });
    }, destroy: function destroy() {
      var c = this;return c.raise("destroy.ft.table").then(function () {
        return c.execute(!0, !0, "destroy").then(function () {
          c.$el.removeData("__FooTable__").removeClass("footable-" + c.id), b.is.hash(c.o.on) && c.$el.off(c.o.on), a(window).off("resize.ft" + c.id, c._onWindowResize), c.initialized = !1, b.instances[c.id] = null;
        });
      }).fail(function (a) {
        b.is.error(a) && console.error("FooTable: unhandled error thrown while destroying the plugin.", a);
      });
    }, raise: function raise(c, d) {
      var e = this,
          f = b.__debug__ && (b.is.emptyArray(b.__debug_options__.events) || b.arr.any(b.__debug_options__.events, function (a) {
        return b.str.contains(c, a);
      }));return d = d || [], d.unshift(this), a.Deferred(function (b) {
        var g = a.Event(c);1 == e.o.stopPropagation && e.$el.one(c, function (a) {
          a.stopPropagation();
        }), f && console.log("FooTable:" + c + ": ", d), e.$el.trigger(g, d), g.isDefaultPrevented() ? (f && console.log('FooTable: default prevented for the "' + c + '" event.'), b.reject(g)) : b.resolve(g);
      });
    }, use: function use(a) {
      for (var b = 0, c = this.components.length; c > b; b++) {
        if (this.components[b] instanceof a) return this.components[b];
      }return null;
    }, draw: function draw() {
      var a = this,
          c = a.$el.clone().insertBefore(a.$el);return a.$el.detach(), a.execute(!1, !0, "predraw").then(function () {
        return a.raise("predraw.ft.table").then(function () {
          return a.execute(!1, !0, "draw").then(function () {
            return a.raise("draw.ft.table").then(function () {
              return a.execute(!1, !0, "postdraw").then(function () {
                return a.raise("postdraw.ft.table");
              });
            });
          });
        });
      }).fail(function (a) {
        b.is.error(a) && console.error("FooTable: unhandled error thrown during a draw operation.", a);
      }).always(function () {
        c.replaceWith(a.$el), a.$loader.remove();
      });
    }, execute: function execute(a, c, d, e, f) {
      var g = this,
          h = Array.prototype.slice.call(arguments);a = h.shift(), c = h.shift();var i = c ? b.arr.get(g.components, function (a) {
        return a.enabled;
      }) : g.components.slice(0);return h.unshift(a ? i.reverse() : i), g._execute.apply(g, h);
    }, _execute: function _execute(c, d, e, f) {
      if (!c || !c.length) return a.when();var g,
          h = this,
          i = Array.prototype.slice.call(arguments);return c = i.shift(), d = i.shift(), g = c.shift(), b.is.fn(g[d]) ? a.Deferred(function (a) {
        try {
          var c = g[d].apply(g, i);if (b.is.promise(c)) return c.then(a.resolve, a.reject);a.resolve(c);
        } catch (e) {
          a.reject(e);
        }
      }).then(function () {
        return h._execute.apply(h, [c, d].concat(i));
      }) : h._execute.apply(h, [c, d].concat(i));
    }, _onWindowResize: function _onWindowResize(a) {
      var b = a.data.self;null != b._resizeTimeout && clearTimeout(b._resizeTimeout), b._resizeTimeout = setTimeout(function () {
        b._resizeTimeout = null, b.raise("resize.ft.table").then(function () {
          b.breakpoints.check();
        });
      }, 300);
    } });
}(jQuery, FooTable), function (a, b) {
  b.ArrayColumn = b.Column.extend({ construct: function construct(a, b) {
      this._super(a, b, "array");
    }, parser: function parser(c) {
      if (b.is.element(c) || b.is.jq(c)) {
        var d = a(c),
            e = d.data("value");if (b.is.array(e)) return e;e = d.html();try {
          e = JSON.parse(e);
        } catch (f) {
          e = null;
        }return b.is.array(e) ? e : null;
      }return b.is.array(c) ? c : null;
    }, formatter: function formatter(a, c, d) {
      return b.is.array(a) ? JSON.stringify(a) : "";
    } }), b.columns.register("array", b.ArrayColumn);
}(jQuery, FooTable), function (a, b) {
  b.is.undef(window.moment) || (b.DateColumn = b.Column.extend({ construct: function construct(a, c) {
      this._super(a, c, "date"), this.formatString = b.is.string(c.formatString) ? c.formatString : "MM-DD-YYYY";
    }, parser: function parser(c) {
      if (b.is.element(c) || b.is.jq(c)) {
        var d = a(c).data("value");c = b.is.defined(d) ? d : a(c).text(), b.is.string(c) && (c = isNaN(c) ? c : +c);
      }if (b.is.date(c)) return moment(c);if (b.is.object(c) && b.is["boolean"](c._isAMomentObject)) return c;if (b.is.string(c)) {
        if (isNaN(c)) return moment(c, this.formatString);c = +c;
      }return b.is.number(c) ? moment(c) : null;
    }, formatter: function formatter(a, c, d) {
      return b.is.object(a) && b.is["boolean"](a._isAMomentObject) && a.isValid() ? a.format(this.formatString) : "";
    }, filterValue: function filterValue(c) {
      if ((b.is.element(c) || b.is.jq(c)) && (c = a(c).data("filterValue") || a(c).text()), b.is.hash(c) && b.is.hash(c.options) && (b.is.string(c.options.filterValue) && (c = c.options.filterValue), b.is.defined(c.value) && (c = c.value)), b.is.object(c) && b.is["boolean"](c._isAMomentObject)) return c.format(this.formatString);if (b.is.string(c)) {
        if (isNaN(c)) return c;c = +c;
      }return b.is.number(c) || b.is.date(c) ? moment(c).format(this.formatString) : b.is.defined(c) && null != c ? c + "" : "";
    } }), b.columns.register("date", b.DateColumn));
}(jQuery, FooTable), function (a, b) {
  b.HTMLColumn = b.Column.extend({ construct: function construct(a, b) {
      this._super(a, b, "html");
    }, parser: function parser(c) {
      if (b.is.string(c) && (c = a(a.trim(c))), b.is.element(c) && (c = a(c)), b.is.jq(c)) {
        var d = c.prop("tagName").toLowerCase();if ("td" == d || "th" == d) {
          var e = c.data("value");return b.is.defined(e) ? e : c.contents();
        }return c;
      }return null;
    } }), b.columns.register("html", b.HTMLColumn);
}(jQuery, FooTable), function (a, b) {
  b.NumberColumn = b.Column.extend({ construct: function construct(a, c) {
      this._super(a, c, "number"), this.decimalSeparator = b.is.string(c.decimalSeparator) ? c.decimalSeparator : ".", this.thousandSeparator = b.is.string(c.thousandSeparator) ? c.thousandSeparator : ",", this.decimalSeparatorRegex = new RegExp(b.str.escapeRegExp(this.decimalSeparator), "g"), this.thousandSeparatorRegex = new RegExp(b.str.escapeRegExp(this.thousandSeparator), "g"), this.cleanRegex = new RegExp("[^-0-9" + b.str.escapeRegExp(this.decimalSeparator) + "]", "g");
    }, parser: function parser(c) {
      if (b.is.element(c) || b.is.jq(c)) {
        var d = a(c).data("value");c = b.is.defined(d) ? d : a(c).text().replace(this.cleanRegex, "");
      }return b.is.string(c) && (c = c.replace(this.thousandSeparatorRegex, "").replace(this.decimalSeparatorRegex, "."), c = parseFloat(c)), b.is.number(c) ? c : null;
    }, formatter: function formatter(a, b, c) {
      if (null == a) return "";var d = (a + "").split(".");return 2 == d.length && d[0].length > 3 && (d[0] = d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator)), d.join(this.decimalSeparator);
    } }), b.columns.register("number", b.NumberColumn);
}(jQuery, FooTable), function (a, b) {
  b.ObjectColumn = b.Column.extend({ construct: function construct(a, b) {
      this._super(a, b, "object");
    }, parser: function parser(c) {
      if (b.is.element(c) || b.is.jq(c)) {
        var d = a(c),
            e = d.data("value");if (b.is.object(e)) return e;e = d.html();try {
          e = JSON.parse(e);
        } catch (f) {
          e = null;
        }return b.is.object(e) ? e : null;
      }return b.is.object(c) ? c : null;
    }, formatter: function formatter(a, c, d) {
      return b.is.object(a) ? JSON.stringify(a) : "";
    } }), b.columns.register("object", b.ObjectColumn);
}(jQuery, FooTable), function (a, b) {
  b.Breakpoint = b.Class.extend({ construct: function construct(a, b) {
      this.name = a, this.width = b;
    } });
}(jQuery, FooTable), function (a, b) {
  b.Breakpoints = b.Component.extend({ construct: function construct(a) {
      this._super(a, !0), this.o = a.o, this.current = null, this.array = [], this.cascade = this.o.cascade, this.useParentWidth = this.o.useParentWidth, this.hidden = null, this._classNames = "", this.getWidth = b.checkFnValue(this, this.o.getWidth, this.getWidth);
    }, preinit: function preinit(a) {
      var c = this;return this.ft.raise("preinit.ft.breakpoints", [a]).then(function () {
        c.cascade = b.is["boolean"](a.cascade) ? a.cascade : c.cascade, c.o.breakpoints = b.is.hash(a.breakpoints) ? a.breakpoints : c.o.breakpoints, c.getWidth = b.checkFnValue(c, a.getWidth, c.getWidth), null == c.o.breakpoints && (c.o.breakpoints = { xs: 480, sm: 768, md: 992, lg: 1200 });for (var d in c.o.breakpoints) {
          c.o.breakpoints.hasOwnProperty(d) && (c.array.push(new b.Breakpoint(d, c.o.breakpoints[d])), c._classNames += "breakpoint-" + d + " ");
        }c.array.sort(function (a, b) {
          return b.width - a.width;
        });
      });
    }, init: function init() {
      var a = this;return this.ft.raise("init.ft.breakpoints").then(function () {
        a.current = a.get();
      });
    }, draw: function draw() {
      this.ft.$el.removeClass(this._classNames).addClass("breakpoint-" + this.current.name);
    }, calculate: function calculate() {
      for (var a, c = this, d = null, e = [], f = null, g = c.getWidth(), h = 0, i = c.array.length; i > h; h++) {
        a = c.array[h], (!d && h == i - 1 || g >= a.width && (f instanceof b.Breakpoint ? g < f.width : !0)) && (d = a), d || e.push(a.name), f = a;
      }return e.push(d.name), c.hidden = e.join(" "), d;
    }, visible: function visible(a) {
      if (b.is.emptyString(a)) return !0;if ("all" === a) return !1;for (var c = a.split(" "), d = 0, e = c.length; e > d; d++) {
        if (this.cascade ? b.str.containsWord(this.hidden, c[d]) : c[d] == this.current.name) return !1;
      }return !0;
    }, check: function check() {
      var a = this,
          c = a.get();c instanceof b.Breakpoint && c != a.current && a.ft.raise("before.ft.breakpoints", [a.current, c]).then(function () {
        var b = a.current;return a.current = c, a.ft.draw().then(function () {
          a.ft.raise("after.ft.breakpoints", [a.current, b]);
        });
      });
    }, get: function get(a) {
      return b.is.undef(a) ? this.calculate() : a instanceof b.Breakpoint ? a : b.is.string(a) ? b.arr.first(this.array, function (b) {
        return b.name == a;
      }) : b.is.number(a) && a >= 0 && a < this.array.length ? this.array[a] : null;
    }, getWidth: function getWidth() {
      return b.is.fn(this.o.getWidth) ? this.o.getWidth(this.ft) : 1 == this.useParentWidth ? this.getParentWidth() : this.getViewportWidth();
    }, getParentWidth: function getParentWidth() {
      return this.ft.$el.parent().width();
    }, getViewportWidth: function getViewportWidth() {
      return Math.max(document.documentElement.clientWidth, window.innerWidth, 0);
    } }), b.components.register("breakpoints", b.Breakpoints, 1e3);
}(jQuery, FooTable), function (a) {
  a.Column.prototype.breakpoints = null, a.Column.prototype.__breakpoints_define__ = function (b) {
    this.breakpoints = a.is.emptyString(b.breakpoints) ? null : b.breakpoints;
  }, a.Column.extend("define", function (a) {
    this._super(a), this.__breakpoints_define__(a);
  });
}(FooTable), function (a) {
  a.Defaults.prototype.breakpoints = null, a.Defaults.prototype.cascade = !1, a.Defaults.prototype.useParentWidth = !1, a.Defaults.prototype.getWidth = null;
}(FooTable), function (a, b) {
  b.Columns = b.Component.extend({ construct: function construct(a) {
      this._super(a, !0), this.o = a.o, this.array = [], this.$header = null, this.showHeader = a.o.showHeader, this._fromHTML = b.is.emptyArray(a.o.columns) && !b.is.promise(a.o.columns);
    }, parse: function parse(c) {
      var d = this;return a.Deferred(function (c) {
        function e(c, d) {
          var e = [];if (0 == c.length || 0 == d.length) e = c.concat(d);else {
            var f = 0;b.arr.each(c.concat(d), function (a) {
              a.index > f && (f = a.index);
            }), f++;for (var g, h, i = 0; f > i; i++) {
              g = {}, b.arr.each(c, function (a) {
                return a.index == i ? (g = a, !1) : void 0;
              }), h = {}, b.arr.each(d, function (a) {
                return a.index == i ? (h = a, !1) : void 0;
              }), e.push(a.extend(!0, {}, g, h));
            }
          }return e;
        }var f,
            g,
            h = [],
            i = [],
            j = d.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();if (j.length > 0) {
          var k = j.parent().is("tbody") && j.children().length == j.children("td").length;k || (d.$header = j.addClass("footable-header")), j.children("td,th").each(function (b, c) {
            f = a(c), g = f.data(), g.index = b, g.$el = f, g.virtual = k, i.push(g);
          }), k && (d.showHeader = !1);
        }b.is.array(d.o.columns) && !b.is.emptyArray(d.o.columns) ? (b.arr.each(d.o.columns, function (a, b) {
          a.index = b, h.push(a);
        }), d.parseFinalize(c, e(h, i))) : b.is.promise(d.o.columns) ? d.o.columns.then(function (a) {
          b.arr.each(a, function (a, b) {
            a.index = b, h.push(a);
          }), d.parseFinalize(c, e(h, i));
        }, function (a) {
          c.reject(Error("Columns ajax request error: " + a.status + " (" + a.statusText + ")"));
        }) : d.parseFinalize(c, e(h, i));
      });
    }, parseFinalize: function parseFinalize(a, c) {
      var d,
          e = this,
          f = [];b.arr.each(c, function (a) {
        (d = b.columns.contains(a.type) ? b.columns.make(a.type, e.ft, a) : new b.Column(e.ft, a)) && f.push(d);
      }), b.is.emptyArray(f) ? a.reject(Error("No columns supplied.")) : (f.sort(function (a, b) {
        return a.index - b.index;
      }), a.resolve(f));
    }, preinit: function preinit(a) {
      var c = this;return c.ft.raise("preinit.ft.columns", [a]).then(function () {
        return c.parse(a).then(function (d) {
          c.array = d, c.showHeader = b.is["boolean"](a.showHeader) ? a.showHeader : c.showHeader;
        });
      });
    }, init: function init() {
      var a = this;return this.ft.raise("init.ft.columns", [a.array]).then(function () {
        a.$create();
      });
    }, destroy: function destroy() {
      var a = this;this.ft.raise("destroy.ft.columns").then(function () {
        a._fromHTML || a.$header.remove();
      });
    }, predraw: function predraw() {
      var a = this,
          c = !0;a.visibleColspan = 0, a.firstVisibleIndex = 0, a.lastVisibleIndex = 0, a.hasHidden = !1, b.arr.each(a.array, function (b) {
        b.hidden = !a.ft.breakpoints.visible(b.breakpoints), !b.hidden && b.visible && (c && (a.firstVisibleIndex = b.index, c = !1), a.lastVisibleIndex = b.index, a.visibleColspan++), b.hidden && (a.hasHidden = !0);
      }), a.ft.$el.toggleClass("breakpoint", a.hasHidden);
    }, draw: function draw() {
      b.arr.each(this.array, function (a) {
        a.$el.css("display", a.hidden || !a.visible ? "none" : "table-cell");
      }), !this.showHeader && b.is.jq(this.$header.parent()) && this.$header.detach();
    }, $create: function $create() {
      var c = this;c.$header = b.is.jq(c.$header) ? c.$header : a("<tr/>", { "class": "footable-header" }), c.$header.children("th,td").detach(), b.arr.each(c.array, function (a) {
        c.$header.append(a.$el);
      }), c.showHeader && !b.is.jq(c.$header.parent()) && c.ft.$el.children("thead").append(c.$header);
    }, get: function get(a) {
      return a instanceof b.Column ? a : b.is.string(a) ? b.arr.first(this.array, function (b) {
        return b.name == a;
      }) : b.is.number(a) ? b.arr.first(this.array, function (b) {
        return b.index == a;
      }) : b.is.fn(a) ? b.arr.get(this.array, a) : null;
    }, ensure: function ensure(a) {
      var c = this,
          d = [];return b.is.array(a) ? (b.arr.each(a, function (a) {
        d.push(c.get(a));
      }), d) : d;
    } }), b.components.register("columns", b.Columns, 900);
}(jQuery, FooTable), function (a) {
  a.Defaults.prototype.columns = [], a.Defaults.prototype.showHeader = !0;
}(FooTable), function (a, b) {
  b.Rows = b.Component.extend({ construct: function construct(a) {
      this._super(a, !0), this.o = a.o, this.array = [], this.all = [], this.showToggle = a.o.showToggle, this.toggleSelector = a.o.toggleSelector, this.toggleColumn = a.o.toggleColumn, this.emptyString = a.o.empty, this.expandFirst = a.o.expandFirst, this.expandAll = a.o.expandAll, this.$empty = null, this._fromHTML = b.is.emptyArray(a.o.rows) && !b.is.promise(a.o.rows);
    }, parse: function parse() {
      var c = this;return a.Deferred(function (a) {
        var d = c.ft.$el.children("tbody").children("tr");b.is.array(c.o.rows) && c.o.rows.length > 0 ? c.parseFinalize(a, c.o.rows) : b.is.promise(c.o.rows) ? c.o.rows.then(function (b) {
          c.parseFinalize(a, b);
        }, function (b) {
          a.reject(Error("Rows ajax request error: " + b.status + " (" + b.statusText + ")"));
        }) : b.is.jq(d) ? (c.parseFinalize(a, d), d.detach()) : c.parseFinalize(a, []);
      });
    }, parseFinalize: function parseFinalize(c, d) {
      var e = this,
          f = a.map(d, function (a) {
        return new b.Row(e.ft, e.ft.columns.array, a);
      });c.resolve(f);
    }, preinit: function preinit(a) {
      var c = this;return c.ft.raise("preinit.ft.rows", [a]).then(function () {
        return c.parse().then(function (d) {
          c.all = d, c.array = c.all.slice(0), c.showToggle = b.is["boolean"](a.showToggle) ? a.showToggle : c.showToggle, c.toggleSelector = b.is.string(a.toggleSelector) ? a.toggleSelector : c.toggleSelector, c.toggleColumn = b.is.string(a.toggleColumn) ? a.toggleColumn : c.toggleColumn, "first" != c.toggleColumn && "last" != c.toggleColumn && (c.toggleColumn = "first"), c.emptyString = b.is.string(a.empty) ? a.empty : c.emptyString, c.expandFirst = b.is["boolean"](a.expandFirst) ? a.expandFirst : c.expandFirst, c.expandAll = b.is["boolean"](a.expandAll) ? a.expandAll : c.expandAll;
        });
      });
    }, init: function init() {
      var a = this;return a.ft.raise("init.ft.rows", [a.all]).then(function () {
        a.$create();
      });
    }, destroy: function destroy() {
      var a = this;this.ft.raise("destroy.ft.rows").then(function () {
        b.arr.each(a.array, function (b) {
          b.predraw(!a._fromHTML);
        }), a.all = a.array = [];
      });
    }, predraw: function predraw() {
      b.arr.each(this.array, function (a) {
        a.predraw();
      }), this.array = this.all.slice(0);
    }, $create: function $create() {
      this.$empty = a("<tr/>", { "class": "footable-empty" }).append(a("<td/>").text(this.emptyString));
    }, draw: function draw() {
      var a = this,
          c = a.ft.$el.children("tbody"),
          d = !0;a.array.length > 0 ? (a.$empty.detach(), b.arr.each(a.array, function (b) {
        (a.expandFirst && d || a.expandAll) && (b.expanded = !0, d = !1), b.draw(c);
      })) : (a.$empty.children("td").attr("colspan", a.ft.columns.visibleColspan), c.append(a.$empty));
    }, load: function load(c, d) {
      var e = this,
          f = a.map(c, function (a) {
        return new b.Row(e.ft, e.ft.columns.array, a);
      });b.arr.each(this.array, function (a) {
        a.predraw();
      }), this.all = (b.is["boolean"](d) ? d : !1) ? this.all.concat(f) : f, this.array = this.all.slice(0), this.ft.draw();
    }, expand: function expand() {
      b.arr.each(this.array, function (a) {
        a.expand();
      });
    }, collapse: function collapse() {
      b.arr.each(this.array, function (a) {
        a.collapse();
      });
    } }), b.components.register("rows", b.Rows, 800);
}(jQuery, FooTable), function (a) {
  a.Defaults.prototype.rows = [], a.Defaults.prototype.empty = "No results", a.Defaults.prototype.showToggle = !0, a.Defaults.prototype.toggleSelector = "tr,td,.footable-toggle", a.Defaults.prototype.toggleColumn = "first", a.Defaults.prototype.expandFirst = !1, a.Defaults.prototype.expandAll = !1;
}(FooTable), function (a) {
  a.Table.prototype.loadRows = function (a, b) {
    this.rows.load(a, b);
  };
}(FooTable), function (a) {
  a.Filter = a.Class.extend({ construct: function construct(b, c, d, e, f, g, h) {
      this.name = b, this.space = !a.is.string(e) || "OR" != e && "AND" != e ? "AND" : e, this.connectors = a.is["boolean"](f) ? f : !0, this.ignoreCase = a.is["boolean"](g) ? g : !0, this.hidden = a.is["boolean"](h) ? h : !1, this.query = c instanceof a.Query ? c : new a.Query(c, this.space, this.connectors, this.ignoreCase), this.columns = d;
    }, match: function match(b) {
      return a.is.string(b) ? (a.is.string(this.query) && (this.query = new a.Query(this.query, this.space, this.connectors, this.ignoreCase)), this.query instanceof a.Query ? this.query.match(b) : !1) : !1;
    }, matchRow: function matchRow(b) {
      var c = this,
          d = a.arr.map(b.cells, function (b) {
        return a.arr.contains(c.columns, b.column) ? b.filterValue : null;
      }).join(" ");return c.match(d);
    } });
}(FooTable), function (a, b) {
  b.Filtering = b.Component.extend({ construct: function construct(a) {
      this._super(a, a.o.filtering.enabled), this.filters = a.o.filtering.filters, this.delay = a.o.filtering.delay, this.min = a.o.filtering.min, this.space = a.o.filtering.space, this.connectors = a.o.filtering.connectors, this.ignoreCase = a.o.filtering.ignoreCase, this.exactMatch = a.o.filtering.exactMatch, this.placeholder = a.o.filtering.placeholder, this.dropdownTitle = a.o.filtering.dropdownTitle, this.position = a.o.filtering.position, this.focus = a.o.filtering.focus, this.container = a.o.filtering.container, this.$container = null, this.$row = null, this.$cell = null, this.$form = null, this.$dropdown = null, this.$input = null, this.$button = null, this._filterTimeout = null, this._exactRegExp = /^"(.*?)"$/;
    }, preinit: function preinit(a) {
      var c = this;return c.ft.raise("preinit.ft.filtering").then(function () {
        c.ft.$el.hasClass("footable-filtering") && (c.enabled = !0), c.enabled = b.is["boolean"](a.filtering) ? a.filtering : c.enabled, c.enabled && (c.space = b.is.string(a.filterSpace) ? a.filterSpace : c.space, c.min = b.is.number(a.filterMin) ? a.filterMin : c.min, c.connectors = b.is["boolean"](a.filterConnectors) ? a.filterConnectors : c.connectors, c.ignoreCase = b.is["boolean"](a.filterIgnoreCase) ? a.filterIgnoreCase : c.ignoreCase, c.exactMatch = b.is["boolean"](a.filterExactMatch) ? a.filterExactMatch : c.exactMatch, c.focus = b.is["boolean"](a.filterFocus) ? a.filterFocus : c.focus, c.delay = b.is.number(a.filterDelay) ? a.filterDelay : c.delay, c.placeholder = b.is.string(a.filterPlaceholder) ? a.filterPlaceholder : c.placeholder, c.dropdownTitle = b.is.string(a.filterDropdownTitle) ? a.filterDropdownTitle : c.dropdownTitle, c.container = b.is.string(a.filterContainer) ? a.filterContainer : c.container, c.filters = b.is.array(a.filterFilters) ? c.ensure(a.filterFilters) : c.ensure(c.filters), c.ft.$el.hasClass("footable-filtering-left") && (c.position = "left"), c.ft.$el.hasClass("footable-filtering-center") && (c.position = "center"), c.ft.$el.hasClass("footable-filtering-right") && (c.position = "right"), c.position = b.is.string(a.filterPosition) ? a.filterPosition : c.position);
      }, function () {
        c.enabled = !1;
      });
    }, init: function init() {
      var a = this;return a.ft.raise("init.ft.filtering").then(function () {
        a.$create();
      }, function () {
        a.enabled = !1;
      });
    }, destroy: function destroy() {
      var a = this;return a.ft.raise("destroy.ft.filtering").then(function () {
        a.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove();
      });
    }, $create: function $create() {
      var c,
          d = this,
          e = a("<div/>", { "class": "form-group footable-filtering-search" }).append(a("<label/>", { "class": "sr-only", text: "Search" })),
          f = a("<div/>", { "class": "input-group" }).appendTo(e),
          g = a("<div/>", { "class": "input-group-btn" }),
          h = a("<button/>", { type: "button", "class": "btn btn-default dropdown-toggle" }).on("click", { self: d }, d._onDropdownToggleClicked).append(a("<span/>", { "class": "caret" }));switch (d.position) {case "left":
          c = "footable-filtering-left";break;case "center":
          c = "footable-filtering-center";break;default:
          c = "footable-filtering-right";}d.ft.$el.addClass("footable-filtering").addClass(c), d.$container = null === d.container ? a() : a(d.container).first(), d.$container.length ? d.$container.addClass("footable-filtering-external").addClass(c) : (d.$row = a("<tr/>", { "class": "footable-filtering" }).prependTo(d.ft.$el.children("thead")), d.$cell = a("<th/>").attr("colspan", d.ft.columns.visibleColspan).appendTo(d.$row), d.$container = d.$cell), d.$form = a("<form/>", { "class": "form-inline" }).append(e).appendTo(d.$container), d.$input = a("<input/>", { type: "text", "class": "form-control", placeholder: d.placeholder }), d.$button = a("<button/>", { type: "button", "class": "btn btn-primary" }).on("click", { self: d }, d._onSearchButtonClicked).append(a("<span/>", { "class": "fooicon fooicon-search" })), d.$dropdown = a("<ul/>", { "class": "dropdown-menu dropdown-menu-right" }), b.is.emptyString(d.dropdownTitle) || d.$dropdown.append(a("<li/>", { "class": "dropdown-header", text: d.dropdownTitle })), d.$dropdown.append(b.arr.map(d.ft.columns.array, function (b) {
        return b.filterable ? a("<li/>").append(a("<a/>", { "class": "checkbox" }).append(a("<label/>", { html: b.title }).prepend(a("<input/>", { type: "checkbox", checked: !0 }).data("__FooTableColumn__", b)))) : null;
      })), d.delay > 0 && (d.$input.on("keypress keyup paste", { self: d }, d._onSearchInputChanged), d.$dropdown.on("click", 'input[type="checkbox"]', { self: d }, d._onSearchColumnClicked)), g.append(d.$button, h, d.$dropdown), f.append(d.$input, g);
    }, predraw: function predraw() {
      if (!b.is.emptyArray(this.filters)) {
        var c = this;c.ft.rows.array = a.grep(c.ft.rows.array, function (a) {
          return a.filtered(c.filters);
        });
      }
    }, draw: function draw() {
      b.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan);var a = this.find("search");if (a instanceof b.Filter) {
        var c = a.query.val();this.exactMatch && this._exactRegExp.test(c) && (c = c.replace(this._exactRegExp, "$1")), this.$input.val(c);
      } else this.$input.val(null);this.setButton(!b.arr.any(this.filters, function (a) {
        return !a.hidden;
      }));
    }, addFilter: function addFilter(a, c, d, e, f, g, h) {
      var i = this.createFilter(a, c, d, e, f, g, h);i instanceof b.Filter && (this.removeFilter(i.name), this.filters.push(i));
    }, removeFilter: function removeFilter(a) {
      b.arr.remove(this.filters, function (b) {
        return b.name == a;
      });
    }, filter: function filter(a) {
      var b = this;return b.filters = b.ensure(b.filters), b.ft.raise("before.ft.filtering", [b.filters]).then(function () {
        if (b.filters = b.ensure(b.filters), a) var c = b.$input.prop("selectionStart"),
            d = b.$input.prop("selectionEnd");return b.ft.draw().then(function () {
          a && b.$input.focus().prop({ selectionStart: c, selectionEnd: d }), b.ft.raise("after.ft.filtering", [b.filters]);
        });
      });
    }, clear: function clear() {
      return this.filters = b.arr.get(this.filters, function (a) {
        return a.hidden;
      }), this.filter(this.focus);
    }, setButton: function setButton(a) {
      a ? this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search") : this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove");
    }, find: function find(a) {
      return b.arr.first(this.filters, function (b) {
        return b.name == a;
      });
    }, columns: function columns() {
      return b.is.jq(this.$dropdown) ? this.$dropdown.find("input:checked").map(function () {
        return a(this).data("__FooTableColumn__");
      }).get() : this.ft.columns.get(function (a) {
        return a.filterable;
      });
    }, ensure: function ensure(a) {
      var c = this,
          d = [],
          e = c.columns();return b.is.emptyArray(a) || b.arr.each(a, function (a) {
        a = c._ensure(a, e), a instanceof b.Filter && d.push(a);
      }), d;
    }, createFilter: function createFilter(a, c, d, e, f, g, h) {
      return b.is.string(a) && (a = { name: a, query: c, columns: d, ignoreCase: e, connectors: f, space: g, hidden: h }), this._ensure(a, this.columns());
    }, _ensure: function _ensure(a, c) {
      return (b.is.hash(a) || a instanceof b.Filter) && !b.is.emptyString(a.name) && (!b.is.emptyString(a.query) || a.query instanceof b.Query) ? (a.columns = b.is.emptyArray(a.columns) ? c : this.ft.columns.ensure(a.columns), a.ignoreCase = b.is["boolean"](a.ignoreCase) ? a.ignoreCase : this.ignoreCase, a.connectors = b.is["boolean"](a.connectors) ? a.connectors : this.connectors, a.hidden = b.is["boolean"](a.hidden) ? a.hidden : !1, a.space = !b.is.string(a.space) || "AND" !== a.space && "OR" !== a.space ? this.space : a.space, a.query = b.is.string(a.query) ? new b.Query(a.query, a.space, a.connectors, a.ignoreCase) : a.query, a instanceof b.Filter ? a : new b.Filter(a.name, a.query, a.columns, a.space, a.connectors, a.ignoreCase, a.hidden)) : null;
    }, _onSearchInputChanged: function _onSearchInputChanged(a) {
      var c = a.data.self,
          d = "keypress" == a.type && !b.is.emptyString(String.fromCharCode(a.charCode)),
          e = "keyup" == a.type && (8 == a.which || 46 == a.which),
          f = "paste" == a.type;(d || e || f) && (13 == a.which && a.preventDefault(), null != c._filterTimeout && clearTimeout(c._filterTimeout), c._filterTimeout = setTimeout(function () {
        c._filterTimeout = null;var a = c.$input.val();a.length >= c.min ? (c.exactMatch && !c._exactRegExp.test(a) && (a = '"' + a + '"'), c.addFilter("search", a), c.filter(c.focus)) : b.is.emptyString(a) && c.clear();
      }, c.delay));
    }, _onSearchButtonClicked: function _onSearchButtonClicked(a) {
      a.preventDefault();var b = a.data.self;null != b._filterTimeout && clearTimeout(b._filterTimeout);var c = b.$button.children(".fooicon");if (c.hasClass("fooicon-remove")) b.clear();else {
        var d = b.$input.val();d.length >= b.min && (b.exactMatch && !b._exactRegExp.test(d) && (d = '"' + d + '"'), b.addFilter("search", d), b.filter(b.focus));
      }
    }, _onSearchColumnClicked: function _onSearchColumnClicked(a) {
      var b = a.data.self;null != b._filterTimeout && clearTimeout(b._filterTimeout), b._filterTimeout = setTimeout(function () {
        b._filterTimeout = null;var a = b.$button.children(".fooicon");a.hasClass("fooicon-remove") && (a.removeClass("fooicon-remove").addClass("fooicon-search"), b.addFilter("search", b.$input.val()), b.filter());
      }, b.delay);
    }, _onDropdownToggleClicked: function _onDropdownToggleClicked(b) {
      b.preventDefault(), b.stopPropagation();var c = b.data.self;c.$dropdown.parent().toggleClass("open"), c.$dropdown.parent().hasClass("open") ? a(document).on("click.footable", { self: c }, c._onDocumentClicked) : a(document).off("click.footable", c._onDocumentClicked);
    }, _onDocumentClicked: function _onDocumentClicked(b) {
      if (0 == a(b.target).closest(".dropdown-menu").length) {
        b.preventDefault();var c = b.data.self;c.$dropdown.parent().removeClass("open"), a(document).off("click.footable", c._onDocumentClicked);
      }
    } }), b.components.register("filtering", b.Filtering, 500);
}(jQuery, FooTable), function (a) {
  a.Query = a.Class.extend({ construct: function construct(b, c, d, e) {
      this._original = null, this._value = null, this.space = !a.is.string(c) || "OR" != c && "AND" != c ? "AND" : c, this.connectors = a.is["boolean"](d) ? d : !0, this.ignoreCase = a.is["boolean"](e) ? e : !0, this.left = null, this.right = null, this.parts = [], this.operator = null, this.val(b);
    }, val: function val(b) {
      if (a.is.emptyString(b)) return this._value;if (a.is.emptyString(this._original)) this._original = b;else if (this._original == b) return;this._value = b, this._parse();
    }, match: function match(b) {
      return a.is.emptyString(this.operator) || "OR" === this.operator ? this._left(b, !1) || this._match(b, !1) || this._right(b, !1) : "AND" === this.operator ? this._left(b, !0) && this._match(b, !0) && this._right(b, !0) : void 0;
    }, _match: function _match(b, c) {
      var d = this,
          e = !1,
          f = a.is.emptyString(b);return a.is.emptyArray(d.parts) && d.left instanceof a.Query ? c : a.is.emptyArray(d.parts) ? e : ("OR" === d.space ? a.arr.each(d.parts, function (c) {
        if (c.empty && f) {
          if (e = !0, c.negate) return e = !1;
        } else {
          var g = (c.exact ? a.str.containsExact : a.str.contains)(b, c.query, d.ignoreCase);if (g && !c.negate && (e = !0), g && c.negate) return e = !1;
        }
      }) : (e = !0, a.arr.each(d.parts, function (c) {
        if (c.empty) return (!f && !c.negate || f && c.negate) && (e = !1), e;var g = (c.exact ? a.str.containsExact : a.str.contains)(b, c.query, d.ignoreCase);return (!g && !c.negate || g && c.negate) && (e = !1), e;
      })), e);
    }, _left: function _left(b, c) {
      return this.left instanceof a.Query ? this.left.match(b) : c;
    }, _right: function _right(b, c) {
      return this.right instanceof a.Query ? this.right.match(b) : c;
    }, _parse: function _parse() {
      if (!a.is.emptyString(this._value)) if (/\sOR\s/.test(this._value)) {
        this.operator = "OR";var b = this._value.split(/(?:\sOR\s)(.*)?/);this.left = new a.Query(b[0], this.space, this.connectors, this.ignoreCase), this.right = new a.Query(b[1], this.space, this.connectors, this.ignoreCase);
      } else if (/\sAND\s/.test(this._value)) {
        this.operator = "AND";var c = this._value.split(/(?:\sAND\s)(.*)?/);this.left = new a.Query(c[0], this.space, this.connectors, this.ignoreCase), this.right = new a.Query(c[1], this.space, this.connectors, this.ignoreCase);
      } else {
        var d = this;this.parts = a.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function (a) {
          return d._part(a);
        });
      }
    }, _part: function _part(b) {
      var c = { query: b, negate: !1, phrase: !1, exact: !1, empty: !1 };return a.str.startsWith(c.query, "-") && (c.query = a.str.from(c.query, "-"), c.negate = !0), /^"(.*?)"$/.test(c.query) ? (c.query = c.query.replace(/^"(.*?)"$/, "$1"), c.phrase = !0, c.exact = !0) : this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(c.query) && (c.query = c.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function (a, b) {
        return a.replace(b, " ");
      }), c.phrase = !0), c.empty = c.phrase && a.is.emptyString(c.query), c;
    } });
}(FooTable), function (a) {
  a.Cell.prototype.filterValue = null, a.Cell.prototype.__filtering_define__ = function (a) {
    this.filterValue = this.column.filterValue.call(this.column, a);
  }, a.Cell.prototype.__filtering_val__ = function (b) {
    a.is.defined(b) && (this.filterValue = this.column.filterValue.call(this.column, b));
  }, a.Cell.extend("define", function (a) {
    this._super(a), this.__filtering_define__(a);
  }), a.Cell.extend("val", function (a, b, c) {
    var d = this._super(a, b, c);return this.__filtering_val__(a), d;
  });
}(FooTable), function (a, b) {
  b.Column.prototype.filterable = !0, b.Column.prototype.filterValue = function (c) {
    if (b.is.element(c) || b.is.jq(c)) {
      var d = a(c).data("filterValue");return b.is.defined(d) ? "" + d : a(c).text();
    }if (b.is.hash(c) && b.is.hash(c.options)) {
      if (b.is.string(c.options.filterValue)) return c.options.filterValue;b.is.defined(c.value) && (c = c.value);
    }return b.is.defined(c) && null != c ? c + "" : "";
  }, b.Column.prototype.__filtering_define__ = function (a) {
    this.filterable = b.is["boolean"](a.filterable) ? a.filterable : this.filterable, this.filterValue = b.checkFnValue(this, a.filterValue, this.filterValue);
  }, b.Column.extend("define", function (a) {
    this._super(a), this.__filtering_define__(a);
  });
}(jQuery, FooTable), function (a) {
  a.Defaults.prototype.filtering = { enabled: !1, filters: [], delay: 1200, min: 1, space: "AND", placeholder: "Search", dropdownTitle: null, position: "right", connectors: !0, ignoreCase: !0, exactMatch: !1, focus: !0, container: null };
}(FooTable), function (a) {
  a.Row.prototype.filtered = function (b) {
    var c = !0,
        d = this;return a.arr.each(b, function (a) {
      return 0 == (c = a.matchRow(d)) ? !1 : void 0;
    }), c;
  };
}(FooTable), function (a, b) {
  b.Sorter = b.Class.extend({ construct: function construct(a, b) {
      this.column = a, this.direction = b;
    } });
}(jQuery, FooTable), function (a, b) {
  b.Sorting = b.Component.extend({ construct: function construct(a) {
      this._super(a, a.o.sorting.enabled), this.o = a.o.sorting, this.column = null, this.allowed = !0, this.initial = null;
    }, preinit: function preinit(a) {
      var c = this;this.ft.raise("preinit.ft.sorting", [a]).then(function () {
        c.ft.$el.hasClass("footable-sorting") && (c.enabled = !0), c.enabled = b.is["boolean"](a.sorting) ? a.sorting : c.enabled, c.enabled && (c.column = b.arr.first(c.ft.columns.array, function (a) {
          return a.sorted;
        }));
      }, function () {
        c.enabled = !1;
      });
    }, init: function init() {
      var c = this;this.ft.raise("init.ft.sorting").then(function () {
        if (!c.initial) {
          var d = !!c.column;c.initial = { isset: d, rows: c.ft.rows.all.slice(0), column: d ? c.column.name : null, direction: d ? c.column.direction : null };
        }b.arr.each(c.ft.columns.array, function (b) {
          b.sortable && b.$el.addClass("footable-sortable").append(a("<span/>", { "class": "fooicon fooicon-sort" }));
        }), c.ft.$el.on("click.footable", ".footable-sortable", { self: c }, c._onSortClicked);
      }, function () {
        c.enabled = !1;
      });
    }, destroy: function destroy() {
      var a = this;this.ft.raise("destroy.ft.paging").then(function () {
        a.ft.$el.off("click.footable", ".footable-sortable", a._onSortClicked), a.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove();
      });
    }, predraw: function predraw() {
      if (this.column) {
        var a = this,
            b = a.column;a.ft.rows.array.sort(function (a, c) {
          return "DESC" == b.direction ? b.sorter(c.cells[b.index].sortValue, a.cells[b.index].sortValue) : b.sorter(a.cells[b.index].sortValue, c.cells[b.index].sortValue);
        });
      }
    }, draw: function draw() {
      if (this.column) {
        var a = this,
            b = a.ft.$el.find("thead > tr > .footable-sortable"),
            c = a.column.$el;b.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"), b.not(c).children(".fooicon").addClass("fooicon-sort"), c.addClass("DESC" == a.column.direction ? "footable-desc" : "footable-asc").children(".fooicon").addClass("DESC" == a.column.direction ? "fooicon-sort-desc" : "fooicon-sort-asc");
      }
    }, sort: function sort(a, b) {
      return this._sort(a, b);
    }, toggleAllowed: function toggleAllowed(a) {
      a = b.is["boolean"](a) ? a : !this.allowed, this.allowed = a, this.ft.$el.toggleClass("footable-sorting-disabled", !this.allowed);
    }, hasChanged: function hasChanged() {
      return !(!this.initial || !this.column || this.column.name === this.initial.column && (this.column.direction === this.initial.direction || null === this.initial.direction && "ASC" === this.column.direction));
    }, reset: function reset() {
      this.initial && (this.initial.isset ? this.sort(this.initial.column, this.initial.direction) : (this.column && (this.column.$el.removeClass("footable-asc footable-desc"), this.column = null), this.ft.rows.all = this.initial.rows, this.ft.draw()));
    }, _sort: function _sort(c, d) {
      if (!this.allowed) return a.Deferred().reject("sorting disabled");var e = this,
          f = new b.Sorter(e.ft.columns.get(c), b.Sorting.dir(d));return e.ft.raise("before.ft.sorting", [f]).then(function () {
        return b.arr.each(e.ft.columns.array, function (a) {
          a != e.column && (a.direction = null);
        }), e.column = e.ft.columns.get(f.column), e.column && (e.column.direction = b.Sorting.dir(f.direction)), e.ft.draw().then(function () {
          e.ft.raise("after.ft.sorting", [f]);
        });
      });
    }, _onSortClicked: function _onSortClicked(b) {
      var c = b.data.self,
          d = a(this).closest("th,td"),
          e = d.is(".footable-asc, .footable-desc") ? d.hasClass("footable-desc") ? "ASC" : "DESC" : "ASC";c._sort(d.index(), e);
    } }), b.Sorting.dir = function (a) {
    return !b.is.string(a) || "ASC" != a && "DESC" != a ? "ASC" : a;
  }, b.components.register("sorting", b.Sorting, 600);
}(jQuery, FooTable), function (a) {
  a.Cell.prototype.sortValue = null, a.Cell.prototype.__sorting_define__ = function (a) {
    this.sortValue = this.column.sortValue.call(this.column, a);
  }, a.Cell.prototype.__sorting_val__ = function (b) {
    a.is.defined(b) && (this.sortValue = this.column.sortValue.call(this.column, b));
  }, a.Cell.extend("define", function (a) {
    this._super(a), this.__sorting_define__(a);
  }), a.Cell.extend("val", function (a, b, c) {
    var d = this._super(a, b, c);return this.__sorting_val__(a), d;
  });
}(FooTable), function (a, b) {
  b.Column.prototype.direction = null, b.Column.prototype.sortable = !0, b.Column.prototype.sorted = !1, b.Column.prototype.sorter = function (a, b) {
    return "string" == typeof a && (a = a.toLowerCase()), "string" == typeof b && (b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1;
  }, b.Column.prototype.sortValue = function (c) {
    if (b.is.element(c) || b.is.jq(c)) {
      var d = a(c).data("sortValue");return b.is.defined(d) ? d : this.parser(c);
    }if (b.is.hash(c) && b.is.hash(c.options)) {
      if (b.is.string(c.options.sortValue)) return c.options.sortValue;b.is.defined(c.value) && (c = c.value);
    }return b.is.defined(c) && null != c ? c : null;
  }, b.Column.prototype.__sorting_define__ = function (a) {
    this.sorter = b.checkFnValue(this, a.sorter, this.sorter), this.direction = b.is.type(a.direction, "string") ? b.Sorting.dir(a.direction) : null, this.sortable = b.is["boolean"](a.sortable) ? a.sortable : !0, this.sorted = b.is["boolean"](a.sorted) ? a.sorted : !1, this.sortValue = b.checkFnValue(this, a.sortValue, this.sortValue);
  }, b.Column.extend("define", function (a) {
    this._super(a), this.__sorting_define__(a);
  });
}(jQuery, FooTable), function (a) {
  a.Defaults.prototype.sorting = { enabled: !1 };
}(FooTable), function (a, b) {
  b.HTMLColumn.extend("__sorting_define__", function (c) {
    this._super(c), this.sortUse = b.is.string(c.sortUse) && -1 !== a.inArray(c.sortUse, ["html", "text"]) ? c.sortUse : "html";
  }), b.HTMLColumn.prototype.sortValue = function (c) {
    if (b.is.element(c) || b.is.jq(c)) {
      var d = a(c).data("sortValue");return b.is.defined(d) ? d : this.parser(c);
    }if (b.is.hash(c) && b.is.hash(c.options)) {
      if (b.is.string(c.options.sortValue)) return c.options.sortValue;b.is.defined(c.value) && (c = c.value);
    }return b.is.defined(c) && null != c ? c : null;
  };
}(jQuery, FooTable), function (a, b) {
  b.NumberColumn.prototype.sortValue = function (c) {
    if (b.is.element(c) || b.is.jq(c)) {
      var d = a(c).data("sortValue");return b.is.number(d) ? d : this.parser(c);
    }if (b.is.hash(c) && b.is.hash(c.options)) {
      if (b.is.string(c.options.sortValue)) return this.parser(c);if (b.is.number(c.options.sortValue)) return c.options.sortValue;if (b.is.number(c.value)) return c.value;
    }return b.is.string(c) ? this.parser(c) : b.is.number(c) ? c : null;
  };
}(jQuery, FooTable), function (a) {
  a.Table.prototype.sort = function (b, c) {
    return this.use(a.Sorting).sort(b, c);
  };
}(FooTable), function (a, b) {
  b.Pager = b.Class.extend({ construct: function construct(a, b, c, d, e) {
      this.total = a, this.current = b, this.size = c, this.page = d, this.forward = e;
    } });
}(jQuery, FooTable), function (a, b) {
  b.Paging = b.Component.extend({ construct: function construct(a) {
      this._super(a, a.o.paging.enabled), this.strings = a.o.paging.strings, this.current = a.o.paging.current, this.size = a.o.paging.size, this.limit = a.o.paging.limit, this.position = a.o.paging.position, this.countFormat = a.o.paging.countFormat, this.container = a.o.paging.container, this.total = -1, this.totalRows = 0, this.previous = -1, this.formattedCount = null, this.$container = null, this.$wrapper = null, this.$row = null, this.$cell = null, this.$pagination = null, this.$count = null, this.detached = !0, this._createdLinks = 0;
    }, preinit: function preinit(a) {
      var c = this;this.ft.raise("preinit.ft.paging", [a]).then(function () {
        c.ft.$el.hasClass("footable-paging") && (c.enabled = !0), c.enabled = b.is["boolean"](a.paging) ? a.paging : c.enabled, c.enabled && (c.size = b.is.number(a.pagingSize) ? a.pagingSize : c.size, c.current = b.is.number(a.pagingCurrent) ? a.pagingCurrent : c.current, c.limit = b.is.number(a.pagingLimit) ? a.pagingLimit : c.limit, c.ft.$el.hasClass("footable-paging-left") && (c.position = "left"), c.ft.$el.hasClass("footable-paging-center") && (c.position = "center"), c.ft.$el.hasClass("footable-paging-right") && (c.position = "right"), c.position = b.is.string(a.pagingPosition) ? a.pagingPosition : c.position, c.countFormat = b.is.string(a.pagingCountFormat) ? a.pagingCountFormat : c.countFormat, c.container = b.is.string(a.pagingContainer) ? a.pagingContainer : c.container, c.total = Math.ceil(c.ft.rows.all.length / c.size));
      }, function () {
        c.enabled = !1;
      });
    }, init: function init() {
      var a = this;this.ft.raise("init.ft.paging").then(function () {
        a.$create();
      }, function () {
        a.enabled = !1;
      });
    }, destroy: function destroy() {
      var a = this;this.ft.raise("destroy.ft.paging").then(function () {
        a.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(), a.detached = !0, a._createdLinks = 0;
      });
    }, predraw: function predraw() {
      this.total = Math.ceil(this.ft.rows.array.length / this.size), this.current = this.current > this.total ? this.total : this.current < 1 ? 1 : this.current, this.totalRows = this.ft.rows.array.length, this.totalRows > this.size && (this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size)), this.formattedCount = this.format(this.countFormat);
    }, draw: function draw() {
      if (this.total <= 1) this.detached || (this.$row ? this.$row.detach() : this.$wrapper.detach(), this.detached = !0);else {
        if (this.detached) {
          if (this.$row) {
            var c = this.ft.$el.children("tfoot");0 == c.length && (c = a("<tfoot/>"), this.ft.$el.append(c)), this.$row.appendTo(c);
          } else this.$wrapper.appendTo(this.$container);this.detached = !1;
        }b.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan), this._createLinks(), this._setVisible(this.current, this.current > this.previous), this._setNavigation(!0), this.$count.text(this.formattedCount);
      }
    }, $create: function $create() {
      this._createdLinks = 0;var c = "footable-paging-center";switch (this.position) {case "left":
          c = "footable-paging-left";break;case "right":
          c = "footable-paging-right";}if (this.ft.$el.addClass("footable-paging").addClass(c), this.$container = null === this.container ? null : a(this.container).first(), b.is.jq(this.$container)) this.$container.addClass("footable-paging-external").addClass(c);else {
        var d = this.ft.$el.children("tfoot");0 == d.length && (d = a("<tfoot/>"), this.ft.$el.append(d)), this.$row = a("<tr/>", { "class": "footable-paging" }).prependTo(d), this.$container = this.$cell = a("<td/>").attr("colspan", this.ft.columns.visibleColspan).appendTo(this.$row);
      }this.$wrapper = a("<div/>", { "class": "footable-pagination-wrapper" }).appendTo(this.$container), this.$pagination = a("<ul/>", { "class": "pagination" }).on("click.footable", "a.footable-page-link", { self: this }, this._onPageClicked), this.$count = a("<span/>", { "class": "label label-default" }), this.$wrapper.append(this.$pagination, a("<div/>", { "class": "divider" }), this.$count), this.detached = !1;
    }, format: function format(a) {
      var b = this.size * (this.current - 1) + 1,
          c = this.size * this.current;return 0 == this.ft.rows.array.length ? (b = 0, c = 0) : c = c > this.totalRows ? this.totalRows : c, a.replace(/\{CP}/g, this.current).replace(/\{TP}/g, this.total).replace(/\{PF}/g, b).replace(/\{PL}/g, c).replace(/\{TR}/g, this.totalRows);
    }, first: function first() {
      return this._set(1);
    }, prev: function prev() {
      return this._set(this.current - 1 > 0 ? this.current - 1 : 1);
    }, next: function next() {
      return this._set(this.current + 1 < this.total ? this.current + 1 : this.total);
    }, last: function last() {
      return this._set(this.total);
    }, "goto": function goto(a) {
      return this._set(a > this.total ? this.total : 1 > a ? 1 : a);
    }, prevPages: function prevPages() {
      var a = this.$pagination.children("li.footable-page.visible:first").data("page") - 1;this._setVisible(a, !0), this._setNavigation(!1);
    }, nextPages: function nextPages() {
      var a = this.$pagination.children("li.footable-page.visible:last").data("page") + 1;this._setVisible(a, !1), this._setNavigation(!1);
    }, pageSize: function pageSize(a) {
      return a = parseInt(a), isNaN(a) ? this.size : (this.size = a, this.total = Math.ceil(this.ft.rows.all.length / this.size), b.is.jq(this.$wrapper) && (this.$container.is("td") ? this.$row.remove() : this.$wrapper.remove()), this.$create(), void this.ft.draw());
    }, _set: function _set(c) {
      var d = this,
          e = new b.Pager(d.total, d.current, d.size, c, c > d.current);return d.ft.raise("before.ft.paging", [e]).then(function () {
        return e.page = e.page > e.total ? e.total : e.page, e.page = e.page < 1 ? 1 : e.page, d.current == c ? a.when() : (d.previous = d.current, d.current = e.page, d.ft.draw().then(function () {
          d.ft.raise("after.ft.paging", [e]);
        }));
      });
    }, _createLinks: function _createLinks() {
      if (this._createdLinks !== this.total) {
        var b = this,
            c = b.total > 1,
            d = function d(b, c, _d) {
          return a("<li/>", { "class": _d }).attr("data-page", b).append(a("<a/>", { "class": "footable-page-link", href: "#" }).data("page", b).html(c));
        };b.$pagination.empty(), c && (b.$pagination.append(d("first", b.strings.first, "footable-page-nav")), b.$pagination.append(d("prev", b.strings.prev, "footable-page-nav")), b.limit > 0 && b.limit < b.total && b.$pagination.append(d("prev-limit", b.strings.prevPages, "footable-page-nav")));for (var e, f = 0; f < b.total; f++) {
          e = d(f + 1, f + 1, "footable-page"), b.$pagination.append(e);
        }c && (b.limit > 0 && b.limit < b.total && b.$pagination.append(d("next-limit", b.strings.nextPages, "footable-page-nav")), b.$pagination.append(d("next", b.strings.next, "footable-page-nav")), b.$pagination.append(d("last", b.strings.last, "footable-page-nav"))), b._createdLinks = b.total;
      }
    }, _setNavigation: function _setNavigation(a) {
      1 == this.current ? this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled") : this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"), this.current == this.total ? this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled") : this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"), 1 == (this.$pagination.children("li.footable-page.visible:first").data("page") || 1) ? this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"), (this.$pagination.children("li.footable-page.visible:last").data("page") || this.limit) == this.total ? this.$pagination.children('li[data-page="next-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"), this.limit > 0 && this.total < this.limit ? this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", "none") : this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", ""), a && this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="' + this.current + '"]').addClass("active");
    }, _setVisible: function _setVisible(a, b) {
      if (this.limit > 0 && this.total > this.limit) {
        if (!this.$pagination.children('li.footable-page[data-page="' + a + '"]').hasClass("visible")) {
          var c = 0,
              d = 0;1 == b ? (d = a > this.total ? this.total : a, c = d - this.limit) : (c = 1 > a ? 0 : a - 1, d = c + this.limit), 0 > c && (c = 0, d = this.limit > this.total ? this.total : this.limit), d > this.total && (d = this.total, c = this.total - this.limit < 0 ? 0 : this.total - this.limit), this.$pagination.children("li.footable-page").removeClass("visible").slice(c, d).addClass("visible");
        }
      } else this.$pagination.children("li.footable-page").removeClass("visible").slice(0, this.total).addClass("visible");
    }, _onPageClicked: function _onPageClicked(b) {
      if (b.preventDefault(), !a(b.target).closest("li").is(".active,.disabled")) {
        var c = b.data.self,
            d = a(this).data("page");switch (d) {case "first":
            return void c.first();case "prev":
            return void c.prev();case "next":
            return void c.next();case "last":
            return void c.last();case "prev-limit":
            return void c.prevPages();case "next-limit":
            return void c.nextPages();default:
            return void c._set(d);}
      }
    } }), b.components.register("paging", b.Paging, 400);
}(jQuery, FooTable), function (a) {
  a.Defaults.prototype.paging = { enabled: !1, countFormat: "{CP} of {TP}", current: 1, limit: 5, position: "center", size: 10, container: null, strings: { first: "&laquo;", prev: "&lsaquo;", next: "&rsaquo;", last: "&raquo;", prevPages: "...", nextPages: "..." } };
}(FooTable), function (a) {
  a.Table.prototype.gotoPage = function (b) {
    return this.use(a.Paging)["goto"](b);
  }, a.Table.prototype.nextPage = function () {
    return this.use(a.Paging).next();
  }, a.Table.prototype.prevPage = function () {
    return this.use(a.Paging).prev();
  }, a.Table.prototype.firstPage = function () {
    return this.use(a.Paging).first();
  }, a.Table.prototype.lastPage = function () {
    return this.use(a.Paging).last();
  }, a.Table.prototype.nextPages = function () {
    return this.use(a.Paging).nextPages();
  }, a.Table.prototype.prevPages = function () {
    return this.use(a.Paging).prevPages();
  }, a.Table.prototype.pageSize = function (b) {
    return this.use(a.Paging).pageSize(b);
  };
}(FooTable), function (a, b) {
  b.Editing = b.Component.extend({ construct: function construct(c) {
      this._super(c, c.o.editing.enabled), this.pageToNew = c.o.editing.pageToNew, this.alwaysShow = c.o.editing.alwaysShow, this.column = a.extend(!0, {}, c.o.editing.column, { visible: this.alwaysShow }), this.position = c.o.editing.position, this.showText = c.o.editing.showText, this.hideText = c.o.editing.hideText, this.addText = c.o.editing.addText, this.editText = c.o.editing.editText, this.deleteText = c.o.editing.deleteText, this.viewText = c.o.editing.viewText, this.allowAdd = c.o.editing.allowAdd, this.allowEdit = c.o.editing.allowEdit, this.allowDelete = c.o.editing.allowDelete, this.allowView = c.o.editing.allowView, this._$buttons = null, this.callbacks = { addRow: b.checkFnValue(this, c.o.editing.addRow), editRow: b.checkFnValue(this, c.o.editing.editRow), deleteRow: b.checkFnValue(this, c.o.editing.deleteRow), viewRow: b.checkFnValue(this, c.o.editing.viewRow) };
    }, preinit: function preinit(c) {
      var d = this;this.ft.raise("preinit.ft.editing", [c]).then(function () {
        if (d.ft.$el.hasClass("footable-editing") && (d.enabled = !0), d.enabled = b.is["boolean"](c.editing) ? c.editing : d.enabled, d.enabled) {
          if (d.pageToNew = b.is["boolean"](c.editingPageToNew) ? c.editingPageToNew : d.pageToNew, d.alwaysShow = b.is["boolean"](c.editingAlwaysShow) ? c.editingAlwaysShow : d.alwaysShow, d.position = b.is.string(c.editingPosition) ? c.editingPosition : d.position, d.showText = b.is.string(c.editingShowText) ? c.editingShowText : d.showText, d.hideText = b.is.string(c.editingHideText) ? c.editingHideText : d.hideText, d.addText = b.is.string(c.editingAddText) ? c.editingAddText : d.addText, d.editText = b.is.string(c.editingEditText) ? c.editingEditText : d.editText, d.deleteText = b.is.string(c.editingDeleteText) ? c.editingDeleteText : d.deleteText, d.viewText = b.is.string(c.editingViewText) ? c.editingViewText : d.viewText, d.allowAdd = b.is["boolean"](c.editingAllowAdd) ? c.editingAllowAdd : d.allowAdd, d.allowEdit = b.is["boolean"](c.editingAllowEdit) ? c.editingAllowEdit : d.allowEdit, d.allowDelete = b.is["boolean"](c.editingAllowDelete) ? c.editingAllowDelete : d.allowDelete, d.allowView = b.is["boolean"](c.editingAllowView) ? c.editingAllowView : d.allowView, d.column = new b.EditingColumn(d.ft, d, a.extend(!0, {}, d.column, c.editingColumn, { visible: d.alwaysShow })), d.ft.$el.hasClass("footable-editing-left") && (d.position = "left"), d.ft.$el.hasClass("footable-editing-right") && (d.position = "right"), "right" === d.position) d.column.index = d.ft.columns.array.length;else {
            d.column.index = 0;for (var e = 0, f = d.ft.columns.array.length; f > e; e++) {
              d.ft.columns.array[e].index += 1;
            }
          }d.ft.columns.array.push(d.column), d.ft.columns.array.sort(function (a, b) {
            return a.index - b.index;
          }), d.callbacks.addRow = b.checkFnValue(d, c.editingAddRow, d.callbacks.addRow), d.callbacks.editRow = b.checkFnValue(d, c.editingEditRow, d.callbacks.editRow), d.callbacks.deleteRow = b.checkFnValue(d, c.editingDeleteRow, d.callbacks.deleteRow), d.callbacks.viewRow = b.checkFnValue(d, c.editingViewRow, d.callbacks.viewRow);
        }
      }, function () {
        d.enabled = !1;
      });
    }, init: function init() {
      var a = this;this.ft.raise("init.ft.editing").then(function () {
        a.$create();
      }, function () {
        a.enabled = !1;
      });
    }, destroy: function destroy() {
      var a = this;this.ft.raise("destroy.ft.editing").then(function () {
        a.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove();
      });
    }, $create: function $create() {
      var b = this,
          c = "right" === b.position ? "footable-editing-right" : "footable-editing-left";b.ft.$el.addClass("footable-editing").addClass(c).on("click.ft.editing", ".footable-show", { self: b }, b._onShowClick).on("click.ft.editing", ".footable-hide", { self: b }, b._onHideClick).on("click.ft.editing", ".footable-edit", { self: b }, b._onEditClick).on("click.ft.editing", ".footable-delete", { self: b }, b._onDeleteClick).on("click.ft.editing", ".footable-view", { self: b }, b._onViewClick).on("click.ft.editing", ".footable-add", { self: b }, b._onAddClick), b.$cell = a("<td/>").attr("colspan", b.ft.columns.visibleColspan).append(b.$buttonShow()), b.allowAdd && b.$cell.append(b.$buttonAdd()), b.$cell.append(b.$buttonHide()), b.alwaysShow && b.ft.$el.addClass("footable-editing-always-show"), b.allowAdd || b.ft.$el.addClass("footable-editing-no-add"), b.allowEdit || b.ft.$el.addClass("footable-editing-no-edit"), b.allowDelete || b.ft.$el.addClass("footable-editing-no-delete"), b.allowView || b.ft.$el.addClass("footable-editing-no-view");var d = b.ft.$el.children("tfoot");0 == d.length && (d = a("<tfoot/>"), b.ft.$el.append(d)), b.$row = a("<tr/>", { "class": "footable-editing" }).append(b.$cell).appendTo(d);
    }, $buttonShow: function $buttonShow() {
      return '<button type="button" class="btn btn-primary footable-show">' + this.showText + "</button>";
    }, $buttonHide: function $buttonHide() {
      return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + "</button>";
    }, $buttonAdd: function $buttonAdd() {
      return '<button type="button" class="btn btn-primary footable-add">' + this.addText + "</button> ";
    }, $buttonEdit: function $buttonEdit() {
      return '<button type="button" class="btn btn-default footable-edit">' + this.editText + "</button> ";
    }, $buttonDelete: function $buttonDelete() {
      return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + "</button>";
    }, $buttonView: function $buttonView() {
      return '<button type="button" class="btn btn-default footable-view">' + this.viewText + "</button> ";
    }, $rowButtons: function $rowButtons() {
      return b.is.jq(this._$buttons) ? this._$buttons.clone() : (this._$buttons = a('<div class="btn-group btn-group-xs" role="group"></div>'), this.allowView && this._$buttons.append(this.$buttonView()), this.allowEdit && this._$buttons.append(this.$buttonEdit()), this.allowDelete && this._$buttons.append(this.$buttonDelete()), this._$buttons);
    }, draw: function draw() {
      this.$cell.attr("colspan", this.ft.columns.visibleColspan);
    }, _onEditClick: function _onEditClick(c) {
      c.preventDefault();var d = c.data.self,
          e = a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row && d.ft.raise("edit.ft.editing", [e]).then(function () {
        d.callbacks.editRow.call(d.ft, e);
      });
    }, _onDeleteClick: function _onDeleteClick(c) {
      c.preventDefault();var d = c.data.self,
          e = a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row && d.ft.raise("delete.ft.editing", [e]).then(function () {
        d.callbacks.deleteRow.call(d.ft, e);
      });
    }, _onViewClick: function _onViewClick(c) {
      c.preventDefault();var d = c.data.self,
          e = a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row && d.ft.raise("view.ft.editing", [e]).then(function () {
        d.callbacks.viewRow.call(d.ft, e);
      });
    }, _onAddClick: function _onAddClick(a) {
      a.preventDefault();var b = a.data.self;b.ft.raise("add.ft.editing").then(function () {
        b.callbacks.addRow.call(b.ft);
      });
    }, _onShowClick: function _onShowClick(a) {
      a.preventDefault();var b = a.data.self;b.ft.raise("show.ft.editing").then(function () {
        b.ft.$el.addClass("footable-editing-show"), b.column.visible = !0, b.ft.draw();
      });
    }, _onHideClick: function _onHideClick(a) {
      a.preventDefault();var b = a.data.self;b.ft.raise("hide.ft.editing").then(function () {
        b.ft.$el.removeClass("footable-editing-show"), b.column.visible = !1, b.ft.draw();
      });
    } }), b.components.register("editing", b.Editing, 850);
}(jQuery, FooTable), function (a, b) {
  b.EditingColumn = b.Column.extend({ construct: function construct(a, b, c) {
      this._super(a, c, "editing"), this.editing = b, this.internal = !0;
    }, $create: function $create() {
      (this.$el = !this.virtual && b.is.jq(this.$el) ? this.$el : a("<th/>", { "class": "footable-editing" })).html(this.title);
    }, parser: function parser(c) {
      if (b.is.string(c) && (c = a(a.trim(c))), b.is.element(c) && (c = a(c)), b.is.jq(c)) {
        var d = c.prop("tagName").toLowerCase();return "td" == d || "th" == d ? c.data("value") || c.contents() : c;
      }return null;
    }, createCell: function createCell(c) {
      var d = this.editing.$rowButtons(),
          e = a("<td/>").append(d);return b.is.jq(c.$el) && (0 === this.index ? e.prependTo(c.$el) : e.insertAfter(c.$el.children().eq(this.index - 1))), new b.Cell(this.ft, c, this, e || e.html());
    } }), b.columns.register("editing", b.EditingColumn);
}(jQuery, FooTable), function (a, b) {
  b.Defaults.prototype.editing = { enabled: !1, pageToNew: !0, position: "right", alwaysShow: !1, addRow: function addRow() {}, editRow: function editRow(a) {}, deleteRow: function deleteRow(a) {}, viewRow: function viewRow(a) {}, showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows', hideText: "Cancel", addText: "New row", editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>', deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>', viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>', allowAdd: !0, allowEdit: !0, allowDelete: !0, allowView: !1, column: { classes: "footable-editing", name: "editing", title: "", filterable: !1, sortable: !1 } };
}(jQuery, FooTable), function (a, b) {
  b.is.defined(b.Paging) && (b.Paging.prototype.unpaged = [], b.Paging.extend("predraw", function () {
    this.unpaged = this.ft.rows.array.slice(0), this._super();
  }));
}(jQuery, FooTable), function (a, b) {
  b.Row.prototype.add = function (c) {
    c = b.is["boolean"](c) ? c : !0;var d = this;return a.Deferred(function (a) {
      var b = d.ft.rows.all.push(d) - 1;return c ? d.ft.draw().then(function () {
        a.resolve(b);
      }) : void a.resolve(b);
    });
  }, b.Row.prototype["delete"] = function (c) {
    c = b.is["boolean"](c) ? c : !0;var d = this;return a.Deferred(function (a) {
      var e = d.ft.rows.all.indexOf(d);return b.is.number(e) && e >= 0 && e < d.ft.rows.all.length && (d.ft.rows.all.splice(e, 1), c) ? d.ft.draw().then(function () {
        a.resolve(d);
      }) : void a.resolve(d);
    });
  }, b.is.defined(b.Paging) && b.Row.extend("add", function (a) {
    a = b.is["boolean"](a) ? a : !0;var c,
        d = this,
        e = this._super(a),
        f = d.ft.use(b.Editing);return f && f.pageToNew && (c = d.ft.use(b.Paging)) && a ? e.then(function () {
      var a = c.unpaged.indexOf(d),
          b = Math.ceil((a + 1) / c.size);return c.current !== b ? c["goto"](b) : void 0;
    }) : e;
  }), b.is.defined(b.Sorting) && b.Row.extend("val", function (a, c) {
    c = b.is["boolean"](c) ? c : !0;var d = this._super(a);if (!b.is.hash(a)) return d;var e = this;return c && e.ft.draw().then(function () {
      var a,
          c = e.ft.use(b.Editing);if (b.is.defined(b.Paging) && c && c.pageToNew && (a = e.ft.use(b.Paging))) {
        var d = a.unpaged.indexOf(e),
            f = Math.ceil((d + 1) / a.size);if (a.current !== f) return a["goto"](f);
      }
    }), d;
  });
}(jQuery, FooTable), function (a) {
  a.Rows.prototype.add = function (b, c) {
    var d = b;a.is.hash(b) && (d = new FooTable.Row(this.ft, this.ft.columns.array, b)), d instanceof FooTable.Row && d.add(c);
  }, a.Rows.prototype.update = function (b, c, d) {
    var e = this.ft.rows.all.length,
        f = b;a.is.number(b) && b >= 0 && e > b && (f = this.ft.rows.all[b]), f instanceof FooTable.Row && a.is.hash(c) && f.val(c, d);
  }, a.Rows.prototype["delete"] = function (b, c) {
    var d = this.ft.rows.all.length,
        e = b;a.is.number(b) && b >= 0 && d > b && (e = this.ft.rows.all[b]), e instanceof FooTable.Row && e["delete"](c);
  };
}(FooTable), function (a, b) {
  var c = 0,
      d = function (a) {
    var b,
        c,
        d = 2166136261;for (b = 0, c = a.length; c > b; b++) {
      d ^= a.charCodeAt(b), d += (d << 1) + (d << 4) + (d << 7) + (d << 8) + (d << 24);
    }return d >>> 0;
  }(location.origin + location.pathname);b.State = b.Component.extend({ construct: function construct(a) {
      this._super(a, a.o.state.enabled), this._key = "1", this.key = this._key + (b.is.string(a.o.state.key) ? a.o.state.key : this._uid()), this.filtering = b.is["boolean"](a.o.state.filtering) ? a.o.state.filtering : !0, this.paging = b.is["boolean"](a.o.state.paging) ? a.o.state.paging : !0, this.sorting = b.is["boolean"](a.o.state.sorting) ? a.o.state.sorting : !0;
    }, preinit: function preinit(a) {
      var c = this;this.ft.raise("preinit.ft.state", [a]).then(function () {
        c.enabled = b.is["boolean"](a.state) ? a.state : c.enabled, c.enabled && (c.key = c._key + (b.is.string(a.stateKey) ? a.stateKey : c.key), c.filtering = b.is["boolean"](a.stateFiltering) ? a.stateFiltering : c.filtering, c.paging = b.is["boolean"](a.statePaging) ? a.statePaging : c.paging, c.sorting = b.is["boolean"](a.stateSorting) ? a.stateSorting : c.sorting);
      }, function () {
        c.enabled = !1;
      });
    }, get: function get(a) {
      return JSON.parse(localStorage.getItem(this.key + ":" + a));
    }, set: function set(a, b) {
      localStorage.setItem(this.key + ":" + a, JSON.stringify(b));
    }, remove: function remove(a) {
      localStorage.removeItem(this.key + ":" + a);
    }, read: function read() {
      this.ft.execute(!1, !0, "readState");
    }, write: function write() {
      this.ft.execute(!1, !0, "writeState");
    }, clear: function clear() {
      this.ft.execute(!1, !0, "clearState");
    }, _uid: function _uid() {
      var a = this.ft.$el.attr("id");return d + "_" + (b.is.string(a) ? a : ++c);
    } }), b.components.register("state", b.State, 700);
}(jQuery, FooTable), function (a) {
  a.Component.prototype.readState = function () {}, a.Component.prototype.writeState = function () {}, a.Component.prototype.clearState = function () {};
}(FooTable), function (a) {
  a.Defaults.prototype.state = { enabled: !1, filtering: !0, paging: !0, sorting: !0, key: null };
}(FooTable), function (a) {
  a.Filtering && (a.Filtering.prototype.readState = function () {
    if (this.ft.state.filtering) {
      var b = this.ft.state.get("filtering");a.is.hash(b) && !a.is.emptyArray(b.filters) && (this.filters = this.ensure(b.filters));
    }
  }, a.Filtering.prototype.writeState = function () {
    if (this.ft.state.filtering) {
      var b = a.arr.map(this.filters, function (b) {
        return { name: b.name, query: b.query instanceof a.Query ? b.query.val() : b.query, columns: a.arr.map(b.columns, function (a) {
            return a.name;
          }), hidden: b.hidden, space: b.space, connectors: b.connectors, ignoreCase: b.ignoreCase };
      });this.ft.state.set("filtering", { filters: b });
    }
  }, a.Filtering.prototype.clearState = function () {
    this.ft.state.filtering && this.ft.state.remove("filtering");
  });
}(FooTable), function (a) {
  a.Paging && (a.Paging.prototype.readState = function () {
    if (this.ft.state.paging) {
      var b = this.ft.state.get("paging");a.is.hash(b) && (this.current = b.current, this.size = b.size);
    }
  }, a.Paging.prototype.writeState = function () {
    this.ft.state.paging && this.ft.state.set("paging", { current: this.current, size: this.size });
  }, a.Paging.prototype.clearState = function () {
    this.ft.state.paging && this.ft.state.remove("paging");
  });
}(FooTable), function (a) {
  a.Sorting && (a.Sorting.prototype.readState = function () {
    if (this.ft.state.sorting) {
      var b = this.ft.state.get("sorting");if (a.is.hash(b)) {
        var c = this.ft.columns.get(b.column);c instanceof a.Column && (this.column = c, this.column.direction = b.direction);
      }
    }
  }, a.Sorting.prototype.writeState = function () {
    this.ft.state.sorting && this.column instanceof a.Column && this.ft.state.set("sorting", { column: this.column.name, direction: this.column.direction });
  }, a.Sorting.prototype.clearState = function () {
    this.ft.state.sorting && this.ft.state.remove("sorting");
  });
}(FooTable), function (a) {
  a.Table.extend("_construct", function (a) {
    return this.state = this.use(FooTable.State), this._super(a);
  }), a.Table.extend("_preinit", function () {
    var a = this;return a._super().then(function () {
      a.state.enabled && a.state.read();
    });
  }), a.Table.extend("draw", function () {
    var a = this;return a._super().then(function () {
      a.state.enabled && a.state.write();
    });
  });
}(FooTable), function (a, b) {
  b.Export = b.Component.extend({ construct: function construct(a) {
      this._super(a, !0), this.snapshot = [];
    }, predraw: function predraw() {
      this.snapshot = this.ft.rows.array.slice(0);
    }, columns: function columns() {
      var a = [];return b.arr.each(this.ft.columns.array, function (b) {
        b.internal || a.push({ type: b.type, name: b.name, title: b.title, visible: b.visible, hidden: b.hidden, classes: b.classes, style: b.style });
      }), a;
    }, rows: function rows(a) {
      a = b.is["boolean"](a) ? a : !1;var c = a ? this.ft.rows.all : this.snapshot,
          d = [];return b.arr.each(c, function (a) {
        d.push(a.val());
      }), d;
    }, json: function json(a) {
      return JSON.parse(JSON.stringify({ columns: this.columns(), rows: this.rows(a) }));
    }, csv: function csv(a) {
      var c,
          d,
          e = "",
          f = this.columns();b.arr.each(f, function (a, b) {
        d = '"' + a.title.replace(/"/g, '""') + '"', e += 0 === b ? d : "," + d;
      }), e += "\n";var g = a ? this.ft.rows.all : this.snapshot;return b.arr.each(g, function (a) {
        b.arr.each(a.cells, function (a, b) {
          a.column.internal || (c = a.column.stringify.call(a.column, a.value, a.ft.o, a.row.value), d = '"' + c.replace(/"/g, '""') + '"', e += 0 === b ? d : "," + d);
        }), e += "\n";
      }), e;
    } }), b.components.register("export", b.Export, 490);
}(jQuery, FooTable), function (a) {
  a.Column.prototype.__export_define__ = function (b) {
    this.stringify = a.checkFnValue(this, b.stringify, this.stringify);
  }, a.Column.extend("define", function (a) {
    this._super(a), this.__export_define__(a);
  }), a.Column.prototype.stringify = function (a, b, c) {
    return a + "";
  }, a.is.defined(a.DateColumn) && (a.DateColumn.prototype.stringify = function (b, c, d) {
    return a.is.object(b) && a.is["boolean"](b._isAMomentObject) && b.isValid() ? b.format(this.formatString) : "";
  }), a.ObjectColumn.prototype.stringify = function (b, c, d) {
    return a.is.object(b) ? JSON.stringify(b) : "";
  }, a.ArrayColumn.prototype.stringify = function (b, c, d) {
    return a.is.array(b) ? JSON.stringify(b) : "";
  };
}(FooTable), function (a) {
  a.Table.prototype.toJSON = function (b) {
    return this.use(a.Export).json(b);
  }, a.Table.prototype.toCSV = function (b) {
    return this.use(a.Export).csv(b);
  };
}(FooTable);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* =========================================================
 * bootstrap-slider.js v2.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function ($) {

	var Slider = function Slider(element, options) {
		this.element = $(element);
		this.picker = $('<div class="slider">' + '<div class="slider-track">' + '<div class="slider-selection"></div>' + '<div class="slider-handle"></div>' + '<div class="slider-handle"></div>' + '</div>' + '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' + '</div>').insertBefore(this.element).append(this.element);
		this.id = this.element.data('slider-id') || options.id;
		if (this.id) {
			this.picker[0].id = this.id;
		}

		if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
			this.touchCapable = true;
		}

		var tooltip = this.element.data('slider-tooltip') || options.tooltip;

		this.tooltip = this.picker.find('.tooltip');
		this.tooltipInner = this.tooltip.find('div.tooltip-inner');

		this.orientation = this.element.data('slider-orientation') || options.orientation;
		switch (this.orientation) {
			case 'vertical':
				this.picker.addClass('slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
				this.tooltip.addClass('right')[0].style.left = '100%';
				break;
			default:
				this.picker.addClass('slider-horizontal').css('width', this.element.outerWidth());
				this.orientation = 'horizontal';
				this.stylePos = 'left';
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
				this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
				break;
		}

		this.min = this.element.data('slider-min') || options.min;
		this.max = this.element.data('slider-max') || options.max;
		this.step = this.element.data('slider-step') || options.step;
		this.value = this.element.data('slider-value') || options.value;
		if (this.value[1]) {
			this.range = true;
		}

		this.selection = this.element.data('slider-selection') || options.selection;
		this.selectionEl = this.picker.find('.slider-selection');
		if (this.selection === 'none') {
			this.selectionEl.addClass('hide');
		}
		this.selectionElStyle = this.selectionEl[0].style;

		this.handle1 = this.picker.find('.slider-handle:first');
		this.handle1Stype = this.handle1[0].style;
		this.handle2 = this.picker.find('.slider-handle:last');
		this.handle2Stype = this.handle2[0].style;

		var handle = this.element.data('slider-handle') || options.handle;
		switch (handle) {
			case 'round':
				this.handle1.addClass('round');
				this.handle2.addClass('round');
				break;
			case 'triangle':
				this.handle1.addClass('triangle');
				this.handle2.addClass('triangle');
				break;
		}

		if (this.range) {
			this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
			this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
		} else {
			this.value = [Math.max(this.min, Math.min(this.max, this.value))];
			this.handle2.addClass('hide');
			if (this.selection == 'after') {
				this.value[1] = this.max;
			} else {
				this.value[1] = this.min;
			}
		}
		this.diff = this.max - this.min;
		this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff];

		this.offset = this.picker.offset();
		this.size = this.picker[0][this.sizePos];

		this.formater = options.formater;

		this.layout();

		if (this.touchCapable) {
			// Touch: Bind touch events:
			this.picker.on({
				touchstart: $.proxy(this.mousedown, this)
			});
		} else {
			this.picker.on({
				mousedown: $.proxy(this.mousedown, this)
			});
		}

		if (tooltip === 'show') {
			this.picker.on({
				mouseenter: $.proxy(this.showTooltip, this),
				mouseleave: $.proxy(this.hideTooltip, this)
			});
		} else {
			this.tooltip.addClass('hide');
		}
	};

	Slider.prototype = {
		constructor: Slider,

		over: false,
		inDrag: false,

		showTooltip: function showTooltip() {
			this.tooltip.addClass('in');
			//var left = Math.round(this.percent*this.width);
			//this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
			this.over = true;
		},

		hideTooltip: function hideTooltip() {
			if (this.inDrag === false) {
				this.tooltip.removeClass('in');
			}
			this.over = false;
		},

		layout: function layout() {
			this.handle1Stype[this.stylePos] = this.percentage[0] + '%';
			this.handle2Stype[this.stylePos] = this.percentage[1] + '%';
			if (this.orientation == 'vertical') {
				this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + '%';
				this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
			} else {
				this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + '%';
				this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
			}
			if (this.range) {
				this.tooltipInner.text(this.formater(this.value[0]) + ' : ' + this.formater(this.value[1]));
				this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
			} else {
				this.tooltipInner.text(this.formater(this.value[0]));
				this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
			}
		},

		mousedown: function mousedown(ev) {

			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchstart') {
				ev = ev.originalEvent;
			}

			this.offset = this.picker.offset();
			this.size = this.picker[0][this.sizePos];

			var percentage = this.getPercentage(ev);

			if (this.range) {
				var diff1 = Math.abs(this.percentage[0] - percentage);
				var diff2 = Math.abs(this.percentage[1] - percentage);
				this.dragged = diff1 < diff2 ? 0 : 1;
			} else {
				this.dragged = 0;
			}

			this.percentage[this.dragged] = percentage;
			this.layout();

			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).on({
					touchmove: $.proxy(this.mousemove, this),
					touchend: $.proxy(this.mouseup, this)
				});
			} else {
				$(document).on({
					mousemove: $.proxy(this.mousemove, this),
					mouseup: $.proxy(this.mouseup, this)
				});
			}

			this.inDrag = true;
			var val = this.calculateValue();
			this.element.trigger({
				type: 'slideStart',
				value: val
			}).trigger({
				type: 'slide',
				value: val
			});
			return false;
		},

		mousemove: function mousemove(ev) {

			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchmove') {
				ev = ev.originalEvent;
			}

			var percentage = this.getPercentage(ev);
			if (this.range) {
				if (this.dragged === 0 && this.percentage[1] < percentage) {
					this.percentage[0] = this.percentage[1];
					this.dragged = 1;
				} else if (this.dragged === 1 && this.percentage[0] > percentage) {
					this.percentage[1] = this.percentage[0];
					this.dragged = 0;
				}
			}
			this.percentage[this.dragged] = percentage;
			this.layout();
			var val = this.calculateValue();
			this.element.trigger({
				type: 'slide',
				value: val
			}).data('value', val).prop('value', val);
			return false;
		},

		mouseup: function mouseup(ev) {
			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).off({
					touchmove: this.mousemove,
					touchend: this.mouseup
				});
			} else {
				$(document).off({
					mousemove: this.mousemove,
					mouseup: this.mouseup
				});
			}

			this.inDrag = false;
			if (this.over == false) {
				this.hideTooltip();
			}
			this.element;
			var val = this.calculateValue();
			this.element.trigger({
				type: 'slideStop',
				value: val
			}).data('value', val).prop('value', val);
			return false;
		},

		calculateValue: function calculateValue() {
			var val;
			if (this.range) {
				val = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step];
				this.value = val;
			} else {
				val = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step;
				this.value = [val, this.value[1]];
			}
			return val;
		},

		getPercentage: function getPercentage(ev) {
			if (this.touchCapable) {
				ev = ev.touches[0];
			}
			var percentage = (ev[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
			percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
			return Math.max(0, Math.min(100, percentage));
		},

		getValue: function getValue() {
			if (this.range) {
				return this.value;
			}
			return this.value[0];
		},

		setValue: function setValue(val) {
			this.value = val;

			if (this.range) {
				this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
				this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
			} else {
				this.value = [Math.max(this.min, Math.min(this.max, this.value))];
				this.handle2.addClass('hide');
				if (this.selection == 'after') {
					this.value[1] = this.max;
				} else {
					this.value[1] = this.min;
				}
			}
			this.diff = this.max - this.min;
			this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff];
			this.layout();
		}
	};

	$.fn.slider = function (option, val) {
		return this.each(function () {
			var $this = $(this),
			    data = $this.data('slider'),
			    options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option;
			if (!data) {
				$this.data('slider', data = new Slider(this, $.extend({}, $.fn.slider.defaults, options)));
			}
			if (typeof option == 'string') {
				data[option](val);
			}
		});
	};

	$.fn.slider.defaults = {
		min: 0,
		max: 10,
		step: 1,
		orientation: 'horizontal',
		value: 5,
		selection: 'before',
		tooltip: 'show',
		handle: 'round',
		formater: function formater(value) {
			return value;
		}
	};

	$.fn.slider.Constructor = Slider;
}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a) {
    return b(a);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery);
}(this, function (a) {
  !function (a) {
    "use strict";
    function b(b) {
      var c = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }];return a.each(c, function () {
        b = b ? b.replace(this.re, this.ch) : "";
      }), b;
    }function c(b) {
      var c = arguments,
          d = b;[].shift.apply(c);var e,
          f = this.each(function () {
        var b = a(this);if (b.is("select")) {
          var f = b.data("selectpicker"),
              g = "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d;if (f) {
            if (g) for (var h in g) {
              g.hasOwnProperty(h) && (f.options[h] = g[h]);
            }
          } else {
            var i = a.extend({}, l.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), g);i.template = a.extend({}, l.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, g.template), b.data("selectpicker", f = new l(this, i));
          }"string" == typeof d && (e = f[d] instanceof Function ? f[d].apply(f, c) : f.options[d]);
        }
      });return "undefined" != typeof e ? e : f;
    }String.prototype.includes || !function () {
      var a = {}.toString,
          b = function () {
        try {
          var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b;
        } catch (a) {}return c;
      }(),
          c = "".indexOf,
          d = function d(b) {
        if (null == this) throw new TypeError();var d = String(this);if (b && "[object RegExp]" == a.call(b)) throw new TypeError();var e = d.length,
            f = String(b),
            g = f.length,
            h = arguments.length > 1 ? arguments[1] : void 0,
            i = h ? Number(h) : 0;i != i && (i = 0);var j = Math.min(Math.max(i, 0), e);return !(g + j > e) && c.call(d, f, i) != -1;
      };b ? b(String.prototype, "includes", { value: d, configurable: !0, writable: !0 }) : String.prototype.includes = d;
    }(), String.prototype.startsWith || !function () {
      var a = function () {
        try {
          var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b;
        } catch (a) {}return c;
      }(),
          b = {}.toString,
          c = function c(a) {
        if (null == this) throw new TypeError();var c = String(this);if (a && "[object RegExp]" == b.call(a)) throw new TypeError();var d = c.length,
            e = String(a),
            f = e.length,
            g = arguments.length > 1 ? arguments[1] : void 0,
            h = g ? Number(g) : 0;h != h && (h = 0);var i = Math.min(Math.max(h, 0), d);if (f + i > d) return !1;for (var j = -1; ++j < f;) {
          if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
        }return !0;
      };a ? a(String.prototype, "startsWith", { value: c, configurable: !0, writable: !0 }) : String.prototype.startsWith = c;
    }(), Object.keys || (Object.keys = function (a, b, c) {
      c = [];for (b in a) {
        c.hasOwnProperty.call(a, b) && c.push(b);
      }return c;
    });var d = { useDefault: !1, _set: a.valHooks.select.set };a.valHooks.select.set = function (b, c) {
      return c && !d.useDefault && a(b).data("selected", !0), d._set.apply(this, arguments);
    };var e = null,
        f = function () {
      try {
        return new Event("change"), !0;
      } catch (a) {
        return !1;
      }
    }();a.fn.triggerNative = function (a) {
      var b,
          c = this[0];c.dispatchEvent ? (f ? b = new Event(a, { bubbles: !0 }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a);
    }, a.expr.pseudos.icontains = function (b, c, d) {
      var e = a(b).find("a"),
          f = (e.data("tokens") || e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase());
    }, a.expr.pseudos.ibegins = function (b, c, d) {
      var e = a(b).find("a"),
          f = (e.data("tokens") || e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase());
    }, a.expr.pseudos.aicontains = function (b, c, d) {
      var e = a(b).find("a"),
          f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase());
    }, a.expr.pseudos.aibegins = function (b, c, d) {
      var e = a(b).find("a"),
          f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase());
    };var g = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        h = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#x60;": "`" },
        i = function i(a) {
      var b = function b(_b) {
        return a[_b];
      },
          c = "(?:" + Object.keys(a).join("|") + ")",
          d = RegExp(c),
          e = RegExp(c, "g");return function (a) {
        return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a;
      };
    },
        j = i(g),
        k = i(h),
        l = function l(b, c) {
      d.useDefault || (a.valHooks.select.set = d._set, d.useDefault = !0), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title"));var e = this.options.windowPadding;"number" == typeof e && (this.options.windowPadding = [e, e, e, e]), this.val = l.prototype.val, this.render = l.prototype.render, this.refresh = l.prototype.refresh, this.setStyle = l.prototype.setStyle, this.selectAll = l.prototype.selectAll, this.deselectAll = l.prototype.deselectAll, this.destroy = l.prototype.destroy, this.remove = l.prototype.remove, this.show = l.prototype.show, this.hide = l.prototype.hide, this.init();
    };l.VERSION = "1.12.4", l.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function countSelectedText(a, b) {
        return 1 == a ? "{0} item selected" : "{0} items selected";
      }, maxOptionsText: function maxOptionsText(a, b) {
        return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
      }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, windowPadding: 0 }, l.prototype = { constructor: l, init: function init() {
        var b = this,
            c = this.$element.attr("id");this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
          a.preventDefault(), b.$button.focus();
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function hideBsDropdown(a) {
            b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a);
          }, "hidden.bs.dropdown": function hiddenBsDropdown(a) {
            b.$element.trigger("hidden.bs.select", a);
          }, "show.bs.dropdown": function showBsDropdown(a) {
            b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a);
          }, "shown.bs.dropdown": function shownBsDropdown(a) {
            b.$element.trigger("shown.bs.select", a);
          } }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
          b.$button.addClass("bs-invalid"), b.$element.on({ "focus.bs.select": function focusBsSelect() {
              b.$button.focus(), b.$element.off("focus.bs.select");
            }, "shown.bs.select": function shownBsSelect() {
              b.$element.val(b.$element.val()).off("shown.bs.select");
            }, "rendered.bs.select": function renderedBsSelect() {
              this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select");
            } }), b.$button.on("blur.bs.select", function () {
            b.$element.focus().blur(), b.$button.off("blur.bs.select");
          });
        }), setTimeout(function () {
          b.$element.trigger("loaded.bs.select");
        });
      }, createDropdown: function createDropdown() {
        var b = this.multiple || this.options.showTick ? " show-tick" : "",
            c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
            d = this.autofocus ? " autofocus" : "",
            e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
            f = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + j(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
            g = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
            h = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
            i = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + d + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + e + f + g + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + h + "</div></div>";return a(i);
      }, createView: function createView() {
        var a = this.createDropdown(),
            b = this.createLi();return a.find("ul")[0].innerHTML = b, a;
      }, reloadLi: function reloadLi() {
        var a = this.createLi();this.$menuInner[0].innerHTML = a;
      }, createLi: function createLi() {
        var c = this,
            d = [],
            e = 0,
            f = document.createElement("option"),
            g = -1,
            h = function h(a, b, c, d) {
          return "<li" + ("undefined" != typeof c && "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b && null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d && null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>";
        },
            i = function i(d, e, f, g) {
          return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + (f ? ' style="' + f + '"' : "") + (c.options.liveSearchNormalize ? ' data-normalized-text="' + b(j(a(d).html())) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + d + '<span class="' + c.options.iconBase + " " + c.options.tickIcon + ' check-mark"></span></a>';
        };if (this.options.title && !this.multiple && (g--, !this.$element.find(".bs-title-option").length)) {
          var k = this.$element[0];f.className = "bs-title-option", f.innerHTML = this.options.title, f.value = "", k.insertBefore(f, k.firstChild);var l = a(k.options[k.selectedIndex]);void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (f.selected = !0);
        }var m = this.$element.find("option");return m.each(function (b) {
          var f = a(this);if (g++, !f.hasClass("bs-title-option")) {
            var k,
                l = this.className || "",
                n = j(this.style.cssText),
                o = f.data("content") ? f.data("content") : f.html(),
                p = f.data("tokens") ? f.data("tokens") : null,
                q = "undefined" != typeof f.data("subtext") ? '<small class="text-muted">' + f.data("subtext") + "</small>" : "",
                r = "undefined" != typeof f.data("icon") ? '<span class="' + c.options.iconBase + " " + f.data("icon") + '"></span> ' : "",
                s = f.parent(),
                t = "OPTGROUP" === s[0].tagName,
                u = t && s[0].disabled,
                v = this.disabled || u;if ("" !== r && v && (r = "<span>" + r + "</span>"), c.options.hideDisabled && (v && !t || u)) return k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), void g--;if (f.data("content") || (o = r + '<span class="text">' + o + q + "</span>"), t && f.data("divider") !== !0) {
              if (c.options.hideDisabled && v) {
                if (void 0 === s.data("allOptionsDisabled")) {
                  var w = s.children();s.data("allOptionsDisabled", w.filter(":disabled").length === w.length);
                }if (s.data("allOptionsDisabled")) return void g--;
              }var x = " " + s[0].className || "";if (0 === f.index()) {
                e += 1;var y = s[0].label,
                    z = "undefined" != typeof s.data("subtext") ? '<small class="text-muted">' + s.data("subtext") + "</small>" : "",
                    A = s.data("icon") ? '<span class="' + c.options.iconBase + " " + s.data("icon") + '"></span> ' : "";y = A + '<span class="text">' + j(y) + z + "</span>", 0 !== b && d.length > 0 && (g++, d.push(h("", null, "divider", e + "div"))), g++, d.push(h(y, null, "dropdown-header" + x, e));
              }if (c.options.hideDisabled && v) return void g--;d.push(h(i(o, "opt " + l + x, n, p), b, "", e));
            } else if (f.data("divider") === !0) d.push(h("", b, "divider"));else if (f.data("hidden") === !0) k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), d.push(h(i(o, l, n, p), b, "hidden is-hidden"));else {
              var B = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;if (!B && c.options.hideDisabled && (k = f.data("prevHiddenIndex"), void 0 !== k)) {
                var C = m.eq(k)[0].previousElementSibling;C && "OPTGROUP" === C.tagName && !C.disabled && (B = !0);
              }B && (g++, d.push(h("", null, "divider", e + "div"))), d.push(h(i(o, l, n, p), b));
            }c.liObj[b] = g;
          }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), d.join("");
      }, findLis: function findLis() {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
      }, render: function render(b) {
        var c,
            d = this,
            e = this.$element.find("option");b !== !1 && e.each(function (a) {
          var b = d.findLis().eq(d.liObj[a]);d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b);
        }), this.togglePlaceholder(), this.tabIndex();var f = e.map(function () {
          if (this.selected) {
            if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;var b,
                c = a(this),
                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content").toString() : e + c.html() + b;
          }
        }).toArray(),
            g = this.multiple ? f.join(this.options.multipleSeparator) : f[0];if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
          var h = this.options.selectedTextFormat.split(">");if (h.length > 1 && f.length > h[1] || 1 == h.length && f.length >= 2) {
            c = this.options.hideDisabled ? ", [disabled]" : "";var i = e.not('[data-divider="true"], [data-hidden="true"]' + c).length,
                j = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(f.length, i) : this.options.countSelectedText;g = j.replace("{0}", f.length.toString()).replace("{1}", i.toString());
          }
        }void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (g = this.options.title), g || (g = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", k(a.trim(g.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(g), this.$element.trigger("rendered.bs.select");
      }, setStyle: function setStyle(a, b) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));var c = a ? a : this.options.style;"add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c));
      }, liHeight: function liHeight(b) {
        if (b || this.options.size !== !1 && !this.sizeInfo) {
          var c = document.createElement("div"),
              d = document.createElement("div"),
              e = document.createElement("ul"),
              f = document.createElement("li"),
              g = document.createElement("li"),
              h = document.createElement("a"),
              i = document.createElement("span"),
              j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
              k = this.options.liveSearch ? document.createElement("div") : null,
              l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
              m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
            var n = document.createElement("input");k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k);
          }l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);var o = h.offsetHeight,
              p = j ? j.offsetHeight : 0,
              q = k ? k.offsetHeight : 0,
              r = l ? l.offsetHeight : 0,
              s = m ? m.offsetHeight : 0,
              t = a(f).outerHeight(!0),
              u = "function" == typeof getComputedStyle && getComputedStyle(d),
              v = u ? null : a(d),
              w = { vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")), horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth")) },
              x = { vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2, horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2 };document.body.removeChild(c), this.sizeInfo = { liHeight: o, headerHeight: p, searchHeight: q, actionsHeight: r, doneButtonHeight: s, dividerHeight: t, menuPadding: w, menuExtras: x };
        }
      }, setSize: function setSize() {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j = this,
              k = this.$menu,
              l = this.$menuInner,
              m = a(window),
              n = this.$newElement[0].offsetHeight,
              o = this.$newElement[0].offsetWidth,
              p = this.sizeInfo.liHeight,
              q = this.sizeInfo.headerHeight,
              r = this.sizeInfo.searchHeight,
              s = this.sizeInfo.actionsHeight,
              t = this.sizeInfo.doneButtonHeight,
              u = this.sizeInfo.dividerHeight,
              v = this.sizeInfo.menuPadding,
              w = this.sizeInfo.menuExtras,
              x = this.options.hideDisabled ? ".disabled" : "",
              y = function y() {
            var b,
                c = j.$newElement.offset(),
                d = a(j.options.container);j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = { top: 0, left: 0 };var e = j.options.windowPadding;f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top - e[2], h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left - e[1], f -= e[0], h -= e[3];
          };if (y(), "auto" === this.options.size) {
            var z = function z() {
              var m,
                  n = function n(b, c) {
                return function (d) {
                  return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b));
                };
              },
                  u = j.$menuInner[0].getElementsByTagName("li"),
                  x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"),
                  z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({ "max-height": b + "px", overflow: "hidden", "min-height": m + q + r + s + t + "px" }), l.css({ "max-height": b - q - r - s - t - v.vert + "px", "overflow-y": "auto", "min-height": Math.max(m - v.vert, 0) + "px" });
            };z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z);
          } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) {
            var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(),
                B = this.$lis.slice(0, A + 1).filter(".divider").length;b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({ "max-height": b + q + r + s + t + "px", overflow: "hidden", "min-height": "" }), l.css({ "max-height": b - v.vert + "px", "overflow-y": "auto", "min-height": "" });
          }
        }
      }, setWidth: function setWidth() {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");var a = this.$menu.parent().clone().appendTo("body"),
              b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
              c = a.children(".dropdown-menu").outerWidth(),
              d = b.css("width", "auto").children("button").outerWidth();a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px");
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
      }, selectPosition: function selectPosition() {
        this.$bsContainer = a('<div class="bs-container" />');var b,
            c,
            d,
            e = this,
            f = a(this.options.container),
            g = function g(a) {
          e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = { top: 0, left: 0 } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({ top: b.top - c.top + d, left: b.left - c.left, width: a[0].offsetWidth });
        };this.$button.on("click", function () {
          var b = a(this);e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu));
        }), a(window).on("resize scroll", function () {
          g(e.$newElement);
        }), this.$element.on("hide.bs.select", function () {
          e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach();
        });
      }, setSelected: function setSelected(a, b, c) {
        c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b);
      }, setDisabled: function setDisabled(a, b, c) {
        c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1);
      }, isDisabled: function isDisabled() {
        return this.$element[0].disabled;
      }, checkDisabled: function checkDisabled() {
        var a = this;this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
          return !a.isDisabled();
        });
      }, togglePlaceholder: function togglePlaceholder() {
        var a = this.$element.val();this.$button.toggleClass("bs-placeholder", null === a || "" === a || a.constructor === Array && 0 === a.length);
      }, tabIndex: function tabIndex() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98);
      }, clickListener: function clickListener() {
        var b = this,
            c = a(document);c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
          /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1));
        }), this.$button.on("click", function () {
          b.setSize();
        }), this.$element.on("shown.bs.select", function () {
          if (b.options.liveSearch || b.multiple) {
            if (!b.multiple) {
              var a = b.liObj[b.$element[0].selectedIndex];if ("number" != typeof a || b.options.size === !1) return;var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c;
            }
          } else b.$menuInner.find(".selected a").focus();
        }), this.$menuInner.on("click", "li a", function (c) {
          var d = a(this),
              f = d.parent().data("originalIndex"),
              g = b.$element.val(),
              h = b.$element.prop("selectedIndex"),
              i = !0;if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
            var j = b.$element.find("option"),
                k = j.eq(f),
                l = k.prop("selected"),
                m = k.parent("optgroup"),
                n = b.options.maxOptions,
                o = m.data("maxOptions") || !1;if (b.multiple) {
              if (k.prop("selected", !l), b.setSelected(f, !l), d.blur(), n !== !1 || o !== !1) {
                var p = n < j.filter(":selected").length,
                    q = o < m.find("option:selected").length;if (n && p || o && q) if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(f, !0);else if (o && 1 == o) {
                  m.find("option:selected").prop("selected", !1), k.prop("selected", !0);var r = d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(f, !0);
                } else {
                  var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                      t = "function" == typeof s ? s(n, o) : s,
                      u = t[0].replace("{n}", n),
                      v = t[1].replace("{n}", o),
                      w = a('<div class="notify"></div>');t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                    b.setSelected(f, !1);
                  }, 10), w.delay(750).fadeOut(300, function () {
                    a(this).remove();
                  });
                }
              }
            } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(f, !0);!b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (e = [f, k.prop("selected"), l], b.$element.triggerNative("change"));
          }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
          c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus());
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
          a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus();
        }), this.$menu.on("click", ".popover-title .close", function () {
          b.$button.click();
        }), this.$searchbox.on("click", function (a) {
          a.stopPropagation();
        }), this.$menu.on("click", ".actions-btn", function (c) {
          b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll();
        }), this.$element.change(function () {
          b.render(!1), b.$element.trigger("changed.bs.select", e), e = null;
        });
      }, liveSearchListener: function liveSearchListener() {
        var c = this,
            d = a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api", function () {
          c.$menuInner.find(".active").removeClass("active"), c.$searchbox.val() && (c.$searchbox.val(""), c.$lis.not(".is-hidden").removeClass("hidden"), d.parent().length && d.remove()), c.multiple || c.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
            c.$searchbox.focus();
          }, 10);
        }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
          a.stopPropagation();
        }), this.$searchbox.on("input propertychange", function () {
          if (c.$lis.not(".is-hidden").removeClass("hidden"), c.$lis.filter(".active").removeClass("active"), d.remove(), c.$searchbox.val()) {
            var e,
                f = c.$lis.not(".is-hidden, .divider, .dropdown-header");if (e = c.options.liveSearchNormalize ? f.not(":a" + c._searchStyle() + '("' + b(c.$searchbox.val()) + '")') : f.not(":" + c._searchStyle() + '("' + c.$searchbox.val() + '")'), e.length === f.length) d.html(c.options.noneResultsText.replace("{0}", '"' + j(c.$searchbox.val()) + '"')), c.$menuInner.append(d), c.$lis.addClass("hidden");else {
              e.addClass("hidden");var g,
                  h = c.$lis.not(".hidden");h.each(function (b) {
                var c = a(this);c.hasClass("divider") ? void 0 === g ? c.addClass("hidden") : (g && g.addClass("hidden"), g = c) : c.hasClass("dropdown-header") && h.eq(b + 1).data("optgroup") !== c.data("optgroup") ? c.addClass("hidden") : g = null;
              }), g && g.addClass("hidden"), f.not(".hidden").first().addClass("active"), c.$menuInner.scrollTop(0);
            }
          }
        });
      }, _searchStyle: function _searchStyle() {
        var a = { begins: "ibegins", startsWith: "ibegins" };return a[this.options.liveSearchStyle] || "icontains";
      }, val: function val(a) {
        return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val();
      }, changeAll: function changeAll(b) {
        if (this.multiple) {
          "undefined" == typeof b && (b = !0), this.findLis();var c = this.$element.find("option"),
              d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
              e = d.length,
              f = [];if (b) {
            if (d.filter(".selected").length === d.length) return;
          } else if (0 === d.filter(".selected").length) return;d.toggleClass("selected", b);for (var g = 0; g < e; g++) {
            var h = d[g].getAttribute("data-original-index");f[f.length] = c.eq(h)[0];
          }a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change");
        }
      }, selectAll: function selectAll() {
        return this.changeAll(!0);
      }, deselectAll: function deselectAll() {
        return this.changeAll(!1);
      }, toggle: function toggle(a) {
        a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click");
      }, keydown: function keydown(b) {
        var c,
            d,
            e,
            f,
            g = a(this),
            h = g.is("input") ? g.parent().parent() : g.parent(),
            i = h.data("this"),
            j = ":not(.disabled, .hidden, .dropdown-header, .divider)",
            k = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" };if (f = i.$newElement.hasClass("open"), !f && (b.keyCode >= 48 && b.keyCode <= 57 || b.keyCode >= 96 && b.keyCode <= 105 || b.keyCode >= 65 && b.keyCode <= 90)) return i.options.container ? i.$button.trigger("click") : (i.setSize(), i.$menu.parent().addClass("open"), f = !0), void i.$searchbox.focus();if (i.options.liveSearch && /(^9$|27)/.test(b.keyCode.toString(10)) && f && (b.preventDefault(), b.stopPropagation(), i.$menuInner.click(), i.$button.focus()), /(38|40)/.test(b.keyCode.toString(10))) {
          if (c = i.$lis.filter(j), !c.length) return;d = i.options.liveSearch ? c.index(c.filter(".active")) : c.index(c.find("a").filter(":focus").parent()), e = i.$menuInner.data("prevIndex"), 38 == b.keyCode ? (!i.options.liveSearch && d != e || d == -1 || d--, d < 0 && (d += c.length)) : 40 == b.keyCode && ((i.options.liveSearch || d == e) && d++, d %= c.length), i.$menuInner.data("prevIndex", d), i.options.liveSearch ? (b.preventDefault(), g.hasClass("dropdown-toggle") || (c.removeClass("active").eq(d).addClass("active").children("a").focus(), g.focus())) : c.eq(d).children("a").focus();
        } else if (!g.is("input")) {
          var l,
              m,
              n = [];c = i.$lis.filter(j), c.each(function (c) {
            a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == k[b.keyCode] && n.push(c);
          }), l = a(document).data("keycount"), l++, a(document).data("keycount", l), m = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), m != k[b.keyCode] ? (l = 1, a(document).data("keycount", l)) : l >= n.length && (a(document).data("keycount", 0), l > n.length && (l = 1)), c.eq(n[l - 1]).children("a").focus();
        }if ((/(13|32)/.test(b.keyCode.toString(10)) || /(^9$)/.test(b.keyCode.toString(10)) && i.options.selectOnTab) && f) {
          if (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), i.options.liveSearch) /(32)/.test(b.keyCode.toString(10)) || (i.$menuInner.find(".active a").click(), g.focus());else {
            var o = a(":focus");o.click(), o.focus(), b.preventDefault(), a(document).data("spaceSelect", !0);
          }a(document).data("keycount", 0);
        }(/(^9$|27)/.test(b.keyCode.toString(10)) && f && (i.multiple || i.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !f) && (i.$menu.parent().removeClass("open"), i.options.container && i.$newElement.removeClass("open"), i.$button.focus());
      }, mobile: function mobile() {
        this.$element.addClass("mobile-device");
      }, refresh: function refresh() {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select");
      }, hide: function hide() {
        this.$newElement.hide();
      }, show: function show() {
        this.$newElement.show();
      }, remove: function remove() {
        this.$newElement.remove(), this.$element.remove();
      }, destroy: function destroy() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker");
      } };var m = a.fn.selectpicker;a.fn.selectpicker = c, a.fn.selectpicker.Constructor = l, a.fn.selectpicker.noConflict = function () {
      return a.fn.selectpicker = m, this;
    }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', l.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (a) {
      a.stopPropagation();
    }), a(window).on("load.bs.select.data-api", function () {
      a(".selectpicker").each(function () {
        var b = a(this);c.call(b, b.data());
      });
    });
  }(a);
});
//# sourceMappingURL=bootstrap-select.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!__webpack_provided_window_dot_jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }return !1;
  };t.prototype = { constructor: t, init: function init() {
      var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    }, open: function open(c) {
      var e;if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;var g,
            h = c.items;for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
        var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
          n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();o && (n.marginRight = o);
      }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    }, close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    }, _close: function _close() {
      y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    }, updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    }, appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    }, parseEl: function parseEl(c) {
      var d,
          e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];break;
          }
        }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    }, addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    }, _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    }, updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    }, _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    }, _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    }, _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    }, _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    }, _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    }, _parseMarkup: function _parseMarkup(b, c, d) {
      var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);if (f.length > 0) {
            var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }return b.scrollbarSize;
    } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    }, close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    }, registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
    A();var d = a(this);if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
  };var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      }, getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);if (f.length) {
            var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
        }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      } } });var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      }, getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function success(d, e, f) {
            var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          }, error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
      } } });var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
      if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
    }return "";
  };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var c = b.st.image,
            d = ".image";b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      }, resizeImage: function resizeImage() {
        var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
          var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      }, _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      }, findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };e(1);
      }, getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");if (i.length) {
          var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      } } });var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      } }, proto: { initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;f = j(a);
              }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      }, _getOffset: function _getOffset(c) {
        var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      } } });var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      }, getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      } } });var S = function S(a) {
    var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      }, next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      }, prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      }, goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      }, _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      } } }), A();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var slice = Array.prototype.slice; // save ref to original slice()
  var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true, // works only when .getWidthFrom is empty
    responsiveWidth: false,
    zIndex: 'inherit'
  },
      $window = $(window),
      $document = $(document),
      sticked = [],
      windowHeight = $window.height(),
      scroller = function scroller() {
    var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = scrollTop > dwh ? dwh - scrollTop : 0;

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

      //update height in case of dynamic content
      s.stickyWrapper.css('height', s.stickyElement.outerHeight());

      if (scrollTop <= etse) {
        if (s.currentTop !== null) {
          s.stickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'z-index': ''
          });
          s.stickyElement.parent().removeClass(s.className);
          s.stickyElement.trigger('sticky-end', [s]);
          s.currentTop = null;
        }
      } else {
        var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
        if (newTop < 0) {
          newTop = newTop + s.topSpacing;
        } else {
          newTop = s.topSpacing;
        }
        if (s.currentTop !== newTop) {
          var newWidth;
          if (s.getWidthFrom) {
            padding = s.stickyElement.innerWidth() - s.stickyElement.width();
            newWidth = $(s.getWidthFrom).width() - padding || null;
          } else if (s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
          }
          if (newWidth == null) {
            newWidth = s.stickyElement.width();
          }
          s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);

          s.stickyElement.parent().addClass(s.className);

          if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
          } else {
            // sticky is started but it have to be repositioned
            s.stickyElement.trigger('sticky-update', [s]);
          }

          if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
            // just reached bottom || just started to stick but bottom is already reached
            s.stickyElement.trigger('sticky-bottom-reached', [s]);
          } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
            // sticky is started && sticked at topSpacing && overflowing from top just finished
            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
          }

          s.currentTop = newTop;
        }

        // Check if sticky has reached end of container and stop sticking
        var stickyWrapperContainer = s.stickyWrapper.parent();
        var unstick = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;

        if (unstick) {
          s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '');
        } else {
          s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex);
        }
      }
    }
  },
      resizer = function resizer() {
    windowHeight = $window.height();

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i];
      var newWidth = null;
      if (s.getWidthFrom) {
        if (s.responsiveWidth) {
          newWidth = $(s.getWidthFrom).width();
        }
      } else if (s.widthFromWrapper) {
        newWidth = s.stickyWrapper.width();
      }
      if (newWidth != null) {
        s.stickyElement.css('width', newWidth);
      }
    }
  },
      methods = {
    init: function init(options) {
      return this.each(function () {
        var o = $.extend({}, defaults, options);
        var stickyElement = $(this);

        var stickyId = stickyElement.attr('id');
        var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
        var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);

        stickyElement.wrapAll(function () {
          if ($(this).parent("#" + wrapperId).length == 0) {
            return wrapper;
          }
        });

        var stickyWrapper = stickyElement.parent();

        if (o.center) {
          stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" });
        }

        if (stickyElement.css("float") === "right") {
          stickyElement.css({ "float": "none" }).parent().css({ "float": "right" });
        }

        o.stickyElement = stickyElement;
        o.stickyWrapper = stickyWrapper;
        o.currentTop = null;

        sticked.push(o);

        methods.setWrapperHeight(this);
        methods.setupChangeListeners(this);
      });
    },

    setWrapperHeight: function setWrapperHeight(stickyElement) {
      var element = $(stickyElement);
      var stickyWrapper = element.parent();
      if (stickyWrapper) {
        stickyWrapper.css('height', element.outerHeight());
      }
    },

    setupChangeListeners: function setupChangeListeners(stickyElement) {
      if (window.MutationObserver) {
        var mutationObserver = new window.MutationObserver(function (mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            methods.setWrapperHeight(stickyElement);
          }
        });
        mutationObserver.observe(stickyElement, { subtree: true, childList: true });
      } else {
        if (window.addEventListener) {
          stickyElement.addEventListener('DOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
        } else if (window.attachEvent) {
          stickyElement.attachEvent('onDOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          });
          stickyElement.attachEvent('onDOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          });
        }
      }
    },
    update: scroller,
    unstick: function unstick(options) {
      return this.each(function () {
        var that = this;
        var unstickyElement = $(that);

        var removeIdx = -1;
        var i = sticked.length;
        while (i-- > 0) {
          if (sticked[i].stickyElement.get(0) === that) {
            splice.call(sticked, i, 1);
            removeIdx = i;
          }
        }
        if (removeIdx !== -1) {
          unstickyElement.unwrap();
          unstickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'float': '',
            'z-index': ''
          });
        }
      });
    }
  };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
      return methods.unstick.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function () {
    setTimeout(scroller, 0);
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function (t) {
  var e = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function onSliderLoad() {
      return !0;
    }, onSlideBefore: function onSlideBefore() {
      return !0;
    }, onSlideAfter: function onSlideAfter() {
      return !0;
    }, onSlideNext: function onSlideNext() {
      return !0;
    }, onSlidePrev: function onSlidePrev() {
      return !0;
    }, onSliderResize: function onSliderResize() {
      return !0;
    } };t.fn.bxSlider = function (n) {
    if (0 === this.length) return this;if (this.length > 1) return this.each(function () {
      t(this).bxSlider(n);
    }), this;var s = {},
        o = this,
        r = t(window).width(),
        a = t(window).height();if (!t(o).data("bxSlider")) {
      var l = function l() {
        t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = { index: s.settings.startSlide }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function () {
          for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++) {
            if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
          }return !1;
        }(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function () {
          t(this).data("origStyle", t(this).attr("style"));
        }), d());
      },
          d = function d() {
        var e = s.children.eq(s.settings.startSlide);o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({ width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto", position: "relative" }), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), s.viewport.parent().css({ maxWidth: u() }), s.children.css({ float: "horizontal" === s.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), s.children.css("width", h()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({ position: "absolute", zIndex: 0, display: "none" }), s.children.eq(s.settings.startSlide).css({ zIndex: s.settings.slideZIndex, display: "block" })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && P(), s.active.last = s.settings.startSlide === f() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && C(), s.settings.auto && s.settings.autoControls && T(), s.settings.pager && w(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, g);
      },
          c = function c(e, i) {
        var n = e.find('img:not([src=""]), iframe').length,
            s = 0;return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function () {
          t(this).one("load error", function () {
            ++s === n && i();
          }).each(function () {
            this.complete && t(this).trigger("load");
          });
        });
      },
          g = function g() {
        if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
          var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
              i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
              n = s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n);
        }s.loader.remove(), m(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", Z), s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && H(), s.settings.ticker && W(), s.settings.pager && I(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && N(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(F);
      },
          p = function p() {
        var e = 0,
            n = t();if ("vertical" === s.settings.mode || s.settings.adaptiveHeight) {
          if (s.carousel) {
            var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * x();for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) {
              n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i));
            }
          } else n = s.children.eq(s.active.index);
        } else n = s.children;return "vertical" === s.settings.mode ? (n.each(function (i) {
          e += t(this).outerHeight();
        }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
          return t(this).outerHeight(!1);
        }).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e;
      },
          u = function u() {
        var t = "100%";return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t;
      },
          h = function h() {
        var t = s.settings.slideWidth,
            e = s.viewport.width();if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e;else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
          if (e > s.maxThreshold) return t;e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin));
        }return t;
      },
          v = function v() {
        var t = 1,
            e = null;return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t;
      },
          f = function f() {
        var t = 0,
            e = 0,
            i = 0;if (s.settings.moveSlides > 0) {
          if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / x());else for (; e < s.children.length;) {
            ++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
          }
        } else t = Math.ceil(s.children.length / v());return t;
      },
          x = function x() {
        return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
      },
          m = function m() {
        var t, e, i;s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (e = s.children.last(), t = e.position(), S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), S(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * x()).position(), s.active.index === f() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0)));
      },
          S = function S(e, i, n, r) {
        var a, l;s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
          t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), q());
        }) : q()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
          t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), S(r.resetValue, "reset", 0), L());
        }) : (S(r.resetValue, "reset", 0), L()))) : (a = {}, a[s.animProp] = e, "slide" === i ? o.animate(a, n, s.settings.easing, function () {
          q();
        }) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function () {
          S(r.resetValue, "reset", 0), L();
        }));
      },
          b = function b() {
        for (var e = "", i = "", n = f(), o = 0; o < n; o++) {
          i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>";
        }s.pagerEl.html(e);
      },
          w = function w() {
        s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), b()), s.pagerEl.on("click touchend", "a", z);
      },
          C = function C() {
        s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click touchend", E), s.controls.prev.bind("click touchend", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl));
      },
          T = function T() {
        s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", M), s.controls.autoEl.on("click", ".bx-stop", y), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start");
      },
          P = function P() {
        s.children.each(function (e) {
          var i = t(this).find("img:first").attr("title");void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>");
        });
      },
          E = function E(t) {
        t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide());
      },
          k = function k(t) {
        t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide());
      },
          M = function M(t) {
        o.startAuto(), t.preventDefault();
      },
          y = function y(t) {
        o.stopAuto(), t.preventDefault();
      },
          z = function z(e) {
        var i, n;e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== s.active.index && o.goToSlide(n)));
      },
          I = function I(e) {
        var i = s.children.length;return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function (i, n) {
          t(n).find("a").eq(e).addClass("active");
        }));
      },
          q = function q() {
        if (s.settings.infiniteLoop) {
          var t = "";0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === f() - 1 && s.carousel ? t = s.children.eq((f() - 1) * x()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0));
        }s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index);
      },
          A = function A(t) {
        s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"));
      },
          D = function D() {
        1 === f() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === f() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")));
      },
          H = function H() {
        if (s.settings.autoDelay > 0) {
          setTimeout(o.startAuto, s.settings.autoDelay);
        } else o.startAuto(), t(window).focus(function () {
          o.startAuto();
        }).blur(function () {
          o.stopAuto();
        });s.settings.autoHover && o.hover(function () {
          s.interval && (o.stopAuto(!0), s.autoPaused = !0);
        }, function () {
          s.autoPaused && (o.startAuto(!0), s.autoPaused = null);
        });
      },
          W = function W() {
        var e,
            i,
            n,
            r,
            a,
            l,
            d,
            c,
            g = 0;"next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), g = "horizontal" === s.settings.mode ? -e.left : -e.top), S(g, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (r = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function () {
          i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), S(n, "reset", 0);
        }, function () {
          c = 0, s.children.each(function (e) {
            c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
          }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), L(d);
        })) : s.viewport.hover(function () {
          o.stop();
        }, function () {
          c = 0, s.children.each(function (e) {
            c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
          }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(o.css(l)))), L(d);
        })), L();
      },
          L = function L(t) {
        var e,
            i,
            n,
            r = t ? t : s.settings.speed,
            a = { left: 0, top: 0 },
            l = { left: 0, top: 0 };"next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : l = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -l.left : -l.top, n = { resetValue: i }, S(e, "ticker", r, n);
      },
          O = function O(e) {
        var i = t(window),
            n = { top: i.scrollTop(), left: i.scrollLeft() },
            s = e.offset();return n.right = n.left + i.width(), n.bottom = n.top + i.height(), s.right = s.left + e.outerWidth(), s.bottom = s.top + e.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom);
      },
          F = function F(t) {
        var e = document.activeElement.tagName.toLowerCase(),
            i = "input|textarea",
            n = new RegExp(e, ["i"]),
            s = n.exec(i);if (null == s && O(o)) {
          if (39 === t.keyCode) return E(t), !1;if (37 === t.keyCode) return k(t), !1;
        }
      },
          N = function N() {
        s.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, s.viewport.bind("touchstart MSPointerDown pointerdown", X), s.viewport.on("click", ".bxslider a", function (t) {
          s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled"));
        });
      },
          X = function X(t) {
        if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled");else {
          s.touch.originalPos = o.position();var e = t.originalEvent,
              i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY, s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", V), s.viewport.bind("touchend MSPointerUp pointerup", R), s.viewport.bind("MSPointerCancel pointercancel", Y);
        }
      },
          Y = function Y(t) {
        S(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", Y), s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId);
      },
          V = function V(t) {
        var e = t.originalEvent,
            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
            n = Math.abs(i[0].pageX - s.touch.start.x),
            o = Math.abs(i[0].pageY - s.touch.start.y),
            r = 0,
            a = 0;3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (a = i[0].pageX - s.touch.start.x, r = s.touch.originalPos.left + a) : (a = i[0].pageY - s.touch.start.y, r = s.touch.originalPos.top + a), S(r, "reset", 0));
      },
          R = function R(t) {
        s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.controls.el.removeClass("disabled");var e = t.originalEvent,
            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
            n = 0,
            r = 0;s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (r = Math.abs(s.touch.start.x - s.touch.end.x), r >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === s.settings.mode ? (r = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (r = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && r > 0 || s.active.last && r < 0) ? S(n, "reset", 200) : Math.abs(r) >= s.settings.swipeThreshold ? (r < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : S(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId);
      },
          Z = function Z(e) {
        if (s.initialized) if (s.working) window.setTimeout(Z, 10);else {
          var i = t(window).width(),
              n = t(window).height();r === i && a === n || (r = i, a = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index));
        }
      },
          B = function B(t) {
        var e = v();s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false"));
      },
          U = function U(t) {
        return t < 0 ? s.settings.infiniteLoop ? f() - 1 : s.active.index : t >= f() ? s.settings.infiniteLoop ? 0 : s.active.index : t;
      };return o.goToSlide = function (e, i) {
        var n,
            r,
            a,
            l,
            d = !0,
            c = 0,
            g = { left: 0, top: 0 },
            u = null;if (s.oldIndex = s.active.index, s.active.index = U(e), !s.working && s.active.index !== s.oldIndex) {
          if (s.working = !0, d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index), "undefined" != typeof d && !d) return s.active.index = s.oldIndex, void (s.working = !1);"next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)), s.active.last = s.active.index >= f() - 1, (s.settings.pager || s.settings.pagerCustom) && I(s.active.index), s.settings.controls && D(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({ zIndex: 0 }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function () {
            t(this).css("zIndex", s.settings.slideZIndex), q();
          })) : (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (u = s.children.eq(s.children.length - 1), g = u.position(), c = s.viewport.width() - u.outerWidth()) : (n = s.children.length - s.settings.minSlides, g = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (r = 1 === s.settings.moveSlides ? s.settings.maxSlides - x() : (f() - 1) * x() - (s.children.length - s.settings.maxSlides), u = o.children(".bx-clone").eq(r), g = u.position()) : "next" === i && 0 === s.active.index ? (g = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(x()), g = s.children.eq(l).position()), "undefined" != typeof g ? (a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top, S(a, "slide", s.settings.speed)) : s.working = !1), s.settings.ariaHidden && B(s.active.index * x());
        }
      }, o.goToNextSlide = function () {
        if (s.settings.infiniteLoop || !s.active.last) {
          var t = parseInt(s.active.index) + 1;o.goToSlide(t, "next");
        }
      }, o.goToPrevSlide = function () {
        if (s.settings.infiniteLoop || 0 !== s.active.index) {
          var t = parseInt(s.active.index) - 1;o.goToSlide(t, "prev");
        }
      }, o.startAuto = function (t) {
        s.interval || (s.interval = setInterval(function () {
          "next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide();
        }, s.settings.pause), s.settings.autoControls && t !== !0 && A("stop"));
      }, o.stopAuto = function (t) {
        s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && t !== !0 && A("start"));
      }, o.getCurrentSlide = function () {
        return s.active.index;
      }, o.getCurrentSlideElement = function () {
        return s.children.eq(s.active.index);
      }, o.getSlideElement = function (t) {
        return s.children.eq(t);
      }, o.getSlideCount = function () {
        return s.children.length;
      }, o.isWorking = function () {
        return s.working;
      }, o.redrawSlider = function () {
        s.children.add(o.find(".bx-clone")).outerWidth(h()), s.viewport.css("height", p()), s.settings.ticker || m(), s.active.last && (s.active.index = f() - 1), s.active.index >= f() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (b(), I(s.active.index)), s.settings.ariaHidden && B(s.active.index * x());
      }, o.destroySlider = function () {
        s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function () {
          void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style");
        }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", Z), s.settings.keyboardEnabled && t(document).unbind("keydown", F), t(this).removeData("bxSlider"));
      }, o.reloadSlider = function (e) {
        void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this);
      }, l(), t(o).data("bxSlider", this), this;
    }
  };
}(jQuery);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*! http://responsiveslides.com v1.55 by @viljamis */
(function (c, K, C) {
  c.fn.responsiveSlides = function (m) {
    var a = c.extend({ auto: !0, speed: 500, timeout: 4E3, pager: !1, nav: !1, random: !1, pause: !1, pauseControls: !0, prevText: "Previous", nextText: "Next", maxwidth: "", navContainer: "", manualControls: "", namespace: "rslides", before: c.noop, after: c.noop }, m);return this.each(function () {
      C++;var f = c(this),
          u,
          t,
          v,
          n,
          q,
          r,
          p = 0,
          e = f.children(),
          D = e.length,
          h = parseFloat(a.speed),
          E = parseFloat(a.timeout),
          w = parseFloat(a.maxwidth),
          g = a.namespace,
          d = g + C,
          F = g + "_nav " + d + "_nav",
          x = g + "_here",
          k = d + "_on",
          y = d + "_s",
          l = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
          z = { "float": "left", position: "relative", opacity: 1, zIndex: 2 },
          A = { "float": "none", position: "absolute", opacity: 0, zIndex: 1 },
          G = function () {
        var b = (document.body || document.documentElement).style,
            a = "transition";if ("string" === typeof b[a]) return !0;u = ["Moz", "Webkit", "Khtml", "O", "ms"];var a = a.charAt(0).toUpperCase() + a.substr(1),
            c;for (c = 0; c < u.length; c++) {
          if ("string" === typeof b[u[c] + a]) return !0;
        }return !1;
      }(),
          B = function B(b) {
        a.before(b);G ? (e.removeClass(k).css(A).eq(b).addClass(k).css(z), p = b, setTimeout(function () {
          a.after(b);
        }, h)) : e.stop().fadeOut(h, function () {
          c(this).removeClass(k).css(A).css("opacity", 1);
        }).eq(b).fadeIn(h, function () {
          c(this).addClass(k).css(z);a.after(b);p = b;
        });
      };a.random && (e.sort(function () {
        return Math.round(Math.random()) - .5;
      }), f.empty().append(e));e.each(function (a) {
        this.id = y + a;
      });f.addClass(g + " " + d);m && m.maxwidth && f.css("max-width", w);e.hide().css(A).eq(0).addClass(k).css(z).show();G && e.show().css({ "-webkit-transition": "opacity " + h + "ms ease-in-out", "-moz-transition": "opacity " + h + "ms ease-in-out", "-o-transition": "opacity " + h + "ms ease-in-out", transition: "opacity " + h + "ms ease-in-out" });if (1 < e.length) {
        if (E < h + 100) return;if (a.pager && !a.manualControls) {
          var H = [];e.each(function (a) {
            a += 1;H += "<li><a href='#' class='" + y + a + "'>" + a + "</a></li>";
          });l.append(H);m.navContainer ? c(a.navContainer).append(l) : f.after(l);
        }a.manualControls && (l = c(a.manualControls), l.addClass(g + "_tabs " + d + "_tabs"));(a.pager || a.manualControls) && l.find("li").each(function (a) {
          c(this).addClass(y + (a + 1));
        });if (a.pager || a.manualControls) r = l.find("a"), t = function t(a) {
          r.closest("li").removeClass(x).eq(a).addClass(x);
        };a.auto && (v = function v() {
          q = setInterval(function () {
            e.stop(!0, !0);var b = p + 1 < D ? p + 1 : 0;(a.pager || a.manualControls) && t(b);B(b);
          }, E);
        }, v());n = function n() {
          a.auto && (clearInterval(q), v());
        };a.pause && f.hover(function () {
          clearInterval(q);
        }, function () {
          n();
        });if (a.pager || a.manualControls) r.bind("click", function (b) {
          b.preventDefault();a.pauseControls || n();b = r.index(this);p === b || c("." + k).queue("fx").length || (t(b), B(b));
        }).eq(0).closest("li").addClass(x), a.pauseControls && r.hover(function () {
          clearInterval(q);
        }, function () {
          n();
        });if (a.nav) {
          g = "<a href='#' class='" + F + " prev'>" + a.prevText + "</a><a href='#' class='" + F + " next'>" + a.nextText + "</a>";m.navContainer ? c(a.navContainer).append(g) : f.after(g);var d = c("." + d + "_nav"),
              I = d.filter(".prev");d.bind("click", function (b) {
            b.preventDefault();b = c("." + k);if (!b.queue("fx").length) {
              var d = e.index(b);b = d - 1;d = d + 1 < D ? p + 1 : 0;B(c(this)[0] === I[0] ? b : d);(a.pager || a.manualControls) && t(c(this)[0] === I[0] ? b : d);a.pauseControls || n();
            }
          });
          a.pauseControls && d.hover(function () {
            clearInterval(q);
          }, function () {
            n();
          });
        }
      }if ("undefined" === typeof document.body.style.maxWidth && m.maxwidth) {
        var J = function J() {
          f.css("width", "100%");f.width() > w && f.css("width", w);
        };J();c(K).bind("resize", function () {
          J();
        });
      }
    });
  };
})(jQuery, this, 0);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search__ = __webpack_require__(47);





//import {CustomsCalculator} from './CustomsCalculator'


var App = function () {

    function initEvents() {

        onClickContactBtn();
        onChangePage();
        onSubmitContactForm();
    }

    function initSidebarScroll() {

        //$(".side-bar").pin({
        //    containerSelector: ".main-content_inner"
        //})

        if ($(window).width() > 993) {

            $(".side-bar").sticky({
                bottomSpacing: 70
            });
        }
    }

    function onClickContactBtn() {
        $('#contact-us-btn').magnificPopup({});
    }

    function onSubmitContactForm() {

        $('#contact-us-popup').submit(function (e) {
            e.preventDefault();

            var form = $(this).serializeArray();
            var data = {};

            for (var i = 0; i < form.length; i++) {
                data[form[i]['name']] = form[i]['value'];
            }

            if ($('#contact-us-popup #append-favorite').prop('checked')) {

                var favoriteCars = App.getCookie('favoriteCars');

                if (favoriteCars !== undefined) data.favoriteCars = JSON.parse(favoriteCars);
            }

            $.ajax({
                type: 'POST',

                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },

                url: '/contact-us',

                data: data,

                success: function success() {
                    alert('Ваше сообщение доставлено, наш менеджер свяжется с Вами в ближайшее время в течении рабочего дня.');
                }

            }).done(function (data) {

                console.log('return favs');
                console.log(data);
                $('.btn-popup').magnificPopup('close');

                $('#contact-us-popup input').val('');
                $('#contact-us-popup input').val('');
                $('#contact-us-popup textarea').val('');
                $('#contact-us-popup textarea').val('');
                $('#contact-us-popup input:checkbox').prop("checked", false);

                return false;
            });
        });
    }

    function RemoveNotExistFavorite() {

        var data = {};

        data['favoriteCars'] = App.getCookie('favoriteCars');

        $.post({

            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            url: '/cars/favorite/remove',

            data: data

        }).done(function (data) {

            if (data.success) {

                if (data.favoriteCars.length > 0) {
                    var favoriteCars = JSON.stringify(data.favoriteCars);

                    App.deleteCookie('favoriteCars');
                    document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
                } else {

                    App.deleteCookie('favoriteCars');
                }
            }
        });
    }

    function onChangePage() {

        $(window).on('changePage', function () {

            $('.sale_date').each(function () {
                if ($(this).text() === App.getFormatedDate()) {

                    $(this).addClass('sale_date_today');
                }
            });
        });
    }

    function initSelectSetting() {

        $('.selectpicker').selectpicker({
            selectedTextFormat: 'count > 0',
            countSelectedText: 'Выбрано {0}',
            size: 5
        });

        $('.selectpicker').selectpicker('refresh');
    }

    return {

        init: function init() {

            initSidebarScroll();
            initSelectSetting();
            initEvents();
            RemoveNotExistFavorite();

            //SecondMenu.init()
            __WEBPACK_IMPORTED_MODULE_1__Search__["a" /* Search */].init();
            __WEBPACK_IMPORTED_MODULE_0__Table__["a" /* Table */].init();
            //CustomsCalculator.init()


            //Custom gallery
            $('#custom-slider').bxSlider({
                pagerCustom: '#slider-pager',
                nextText: '<i class="fa fa-chevron-right"></i>',
                prevText: '<i class="fa fa-chevron-left"></i>',
                mode: 'fade',
                captions: true
            });

            $(window).trigger('changePage');

            Array.prototype.max = function () {
                return Math.max.apply(null, this);
            };

            Array.prototype.min = function () {
                return Math.min.apply(null, this);
            };
        },

        itemExist: function itemExist(arr, item) {

            return arr.some(function (el) {

                return el === item;
            });
        },

        getCookie: function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },

        removeFromArray: function removeFromArray(array, remove) {

            array = array.filter(function (el) {
                return remove.indexOf(el) < 0;
            });

            return array;
        },

        getFormatedDate: function getFormatedDate() {

            var today = new Date();
            var dd = today.getDate();

            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            var response = dd + '/' + mm + '/' + yyyy;

            return response;
        }
    };
}();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_cookie__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FavoriteCars__ = __webpack_require__(46);


var Table = function () {

            var el = '#table';

            var remDocBtn = '.btn-rem-doc';
            var remLocBtn = '.btn-rem-loc';

            var errNotFound = '<tbody id="table-body"><tr class="footable-empty"><td colspan="11">Автомобили не найдеы</td></tr></tbody>';

            function onPaginate() {

                        $(el).on('click', '.pagination a', function (e, data) {

                                    e.preventDefault();

                                    var page = $(this).attr('href').split('page=')[1];

                                    console.log('PAGE ' + page);

                                    var html = Table.getPage(page, Search.getSearchData());

                                    $('html, body').animate({
                                                scrollTop: $(el).offset().top - 95
                                    }, 300);
                        });
            }

            function onAddFavoriteCar() {

                        $(el).on('click', '.favorite__btn', function () {

                                    var lotId = $(this).data('lot');

                                    Table.addFavoriteCar(lotId);

                                    $(this).blur();

                                    $(window).trigger('disableFavoriteBtn');
                        });
            }

            function onClickImage() {

                        $(el).on('click', '.product__img', function (e) {

                                    var carId = $(this).data('car-id');

                                    $.ajax({
                                                method: 'GET',
                                                url: '/cars/images/' + carId

                                    }).done(function (data) {
                                                console.log('DONE 200');
                                                console.log(data);

                                                var carGallery = $('#car-gallery');

                                                carGallery.empty();

                                                if (data.images.length !== 0) {

                                                            var html = '<ul class="rslides">';

                                                            $.each(data.images, function (index, value) {

                                                                        html += '<li><img src="' + value + '" alt=""></li>';
                                                            });

                                                            html += '</ul>';

                                                            carGallery.html(html);

                                                            $(".rslides").responsiveSlides({
                                                                        auto: false,
                                                                        nav: true,
                                                                        prevText: "<img src='carhouse/img/arrow_left.png'></img>", // String: Text for the "previous" button
                                                                        nextText: "<img src='carhouse/img/arrow_right.png'></img>"
                                                            });

                                                            $.magnificPopup.open({
                                                                        items: {
                                                                                    src: '#car-gallery'
                                                                        }

                                                            });
                                                }
                                    });
                        });
            }

            function onClickRemoveDoc() {

                        $(el).on('click', remDocBtn, function (e) {

                                    console.log('Table rem doc');
                                    console.log($(this).data('doc'));
                                    Search.removeDoc($(this).data('doc'), true);
                        });
            }

            function onClickRemoveLoc() {

                        $(el).on('click', remLocBtn, function (e) {

                                    console.log('Table rem loc');
                                    console.log($(this).data('loc'));
                                    Search.removeLoc($(this).data('loc'));
                        });
            }

            return {

                        init: function init() {

                                    __WEBPACK_IMPORTED_MODULE_1__FavoriteCars__["a" /* FavoriteCars */].hello();

                                    console.log('Table init');

                                    $('#main-table .car-table').footable({});

                                    this.updateFavoriteCars();

                                    this.initEvents();

                                    $(".rslides").responsiveSlides({
                                                auto: false,
                                                nav: true,
                                                prevText: "<i class='fa fa-arrow-left'></i>", // String: Text for the "previous" button
                                                nextText: "<i class='fa fa-arrow-right'></i>"
                                    });
                        },

                        showGallery: function showGallery(el) {
                                    // get the class name in arguments here
                                    $.magnificPopup.open({
                                                items: {
                                                            src: '#car-gallery'
                                                }

                                    });
                        },

                        render: function render(data) {

                                    $('#hide-table').html(data['table']);

                                    $('#hide-table .car-table').footable();

                                    setTimeout(function () {
                                                var hideTable = $('#table #hide-table .table-container').get(0);

                                                if (data['carsCount'] === 0) Table.renderError();else {
                                                            $('#main-table').html(hideTable);
                                                }

                                                $('.total-cars').html(data['carsCount']);
                                    }, 1000);

                                    this.updateFavoriteCars();
                                    $(window).trigger('changePage');
                        },

                        renderError: function renderError() {

                                    $('#main-table').html('<h2 style="text-align:center; color:#fff">По запросу автомобили не найдены</h2>');
                        },

                        getPage: function getPage(page, data) {

                                    console.log(data);

                                    data['page'] = page;

                                    this.getData(data);
                        },

                        getData: function getData(data) {

                                    $.ajax({

                                                headers: {
                                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                },

                                                type: "POST",

                                                url: '/cars',

                                                data: data

                                    }).done(function (data) {

                                                if (data) {

                                                            Table.render(data);
                                                } else {

                                                            Table.render('<h3>К сожалению, по Вашему запросу авто не найдено</h3>');
                                                }
                                    });
                        },

                        updateFavoriteCars: function updateFavoriteCars() {

                                    $(el + ' .favorite__btn').each(function (i) {

                                                $(this).attr('title', 'Добавить в избранное');
                                                $(this).html('<i class="fa fa-bookmark-o"></i>');
                                    });

                                    var favoriteCars = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_cookie__["b" /* getCookie */])('favoriteCars');

                                    if (favoriteCars === undefined) return false;

                                    favoriteCars = JSON.parse(favoriteCars);

                                    $(el + ' .favorite__btn').each(function (i) {

                                                var favoriteBtn = $(this);

                                                var lotId = $(this).data('lot');

                                                favoriteCars.forEach(function (item, i) {

                                                            if (lotId === item) {

                                                                        favoriteBtn.html('<i class="fa fa-bookmark"></i>');
                                                                        favoriteBtn.attr('title', 'Исключить из избранного');
                                                            }
                                                });
                                    });
                        },

                        addFavoriteCar: function addFavoriteCar(lotId) {

                                    var favoriteCars = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_cookie__["b" /* getCookie */])('favoriteCars');

                                    if (favoriteCars === undefined) {

                                                favoriteCars = [lotId];
                                    } else {

                                                favoriteCars = JSON.parse(favoriteCars);

                                                var id = favoriteCars.indexOf(lotId);

                                                if (id === -1) {

                                                            favoriteCars.push(lotId);
                                                } else {

                                                            favoriteCars.splice(id, 1);
                                                }
                                    }

                                    if (favoriteCars.length > 0) {

                                                favoriteCars = JSON.stringify(favoriteCars);

                                                document.cookie = "favoriteCars=" + favoriteCars + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
                                    } else {

                                                Object(__WEBPACK_IMPORTED_MODULE_0__helpers_cookie__["a" /* deleteCookie */])('favoriteCars');
                                    }

                                    this.updateFavoriteCars();
                        },

                        initEvents: function initEvents() {

                                    onClickImage();

                                    onPaginate();

                                    onAddFavoriteCar();

                                    onClickRemoveDoc();

                                    onClickRemoveLoc();
                        }

            };
}();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getCookie;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteCookie;
/* unused harmony export setCookie */
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    this.setCookie(name, "", {
        expires: -1
    });
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires === "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteCars; });
var FavoriteCars = {

    hello: function hello() {
        console.log('HELL FROM FAVORITE');
    }
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
var Search = function () {

            var options = {};

            var searchType = 'main';

            var el = '#search';

            var searchBtn = '#search-btn';

            var searchBtnTop = '#search-btn-top';

            var searchGlobal = '#global-search';

            var searchGlobalQuery = {};

            var searchClearBtn = '#search-clear-btn';

            var favoriteBtn = '#favorite-search-btn';

            var favoriteWrapper = '.favorite-wrapper';

            var selects = {

                        'source': '#search-source',

                        'type': '#search-type',

                        'mark': '#search-marks',

                        'model': '#search-models',

                        'yearTo': '#search-to',
                        'yearFrom': '#search-from',

                        'damage': '#search-damage',

                        'locAdd': '#search-loc-add',
                        'locRem': '#search-loc-rem',

                        'drive': '#search-drive',

                        'fuel': '#search-fuel',

                        'location': '#search-location',

                        'highlight': '#search-highlight',

                        'docAdd': '#search-doc-add',
                        'docRem': '#search-doc-rem'
            };

            var buyNowInputTop = '#search-buy-now-top';
            var buyNowInputBottom = '#search-buy-now-bottom';

            //Just car options
            function initSearchOptions() {

                        options['source'] = filter_array(Search.getSelectOptions(selects['source']));

                        options['type'] = filter_array(Search.getSelectOptions(selects['type']));

                        options['mark'] = filter_array(Search.getSelectOptions(selects['mark']));
                        options['mark'].shift();

                        options['years'] = filter_array(Search.getSelectOptions(selects['yearTo']));

                        options['damage'] = filter_array(Search.getSelectOptions(selects['damage']));

                        options['drive'] = filter_array(Search.getSelectOptions(selects['drive']));

                        options['fuel'] = filter_array(Search.getSelectOptions(selects['fuel']));

                        options['location'] = filter_array(Search.getSelectOptions(selects['locAdd']));

                        options['highlight'] = filter_array(Search.getSelectOptions(selects['highlight']));

                        options['doc_type'] = filter_array(Search.getSelectOptions(selects['docAdd']));
            }

            function filter_array(test_array) {
                        var index = -1,
                            arr_length = test_array ? test_array.length : 0,
                            resIndex = -1,
                            result = [];

                        while (++index < arr_length) {
                                    var value = test_array[index];

                                    if (value) {
                                                result[++resIndex] = value;
                                    }
                        }

                        return result;
            }

            function initEvents() {

                        onSearchCars();

                        onToggleFavorite();

                        onClickClearSearch();

                        onClearFavorite();

                        onDisableFavorite();

                        //Change selectors

                        onSearchGlobal();

                        onChangeSource();

                        onChangeType();

                        onChangeMark();

                        onChangeModel();

                        onChangeLocation();

                        onClickGlobalAdvice();
            }

            function onClickGlobalAdvice() {
                        var ga = "#global-advice";
                        var gaPopup = ".global-search .popup";

                        $(ga).click(function () {

                                    if ($(gaPopup).css('display') === 'none') {
                                                //  $(gaPopup).slideDown();
                                                $(gaPopup).css('display', 'block');
                                    } else {
                                                // $(gaPopup).slideUp();
                                                $(gaPopup).css('display', 'none');
                                    }
                        });
            }

            function getMarks() {

                        var type = $(selects['type']).val();

                        $.get({

                                    url: '/cars/marks/' + type

                        }).done(function (response) {

                                    var marks = response.marks;

                                    if (marks.length !== 0) Search.setSelectOptions(selects['mark'], marks);
                        });
            }

            function getModels() {

                        var mark = $(selects['mark']).val();
                        var type = $(selects['type']).val();

                        $.get({

                                    url: '/cars/models/' + type + '/' + mark

                        }).done(function (response) {

                                    var models = response.models;

                                    if (models.length !== 0) Search.setSelectOptions(selects['model'], models);

                                    Search.stopPreloader();
                        });
            }

            function getDocs() {
                        var updatePage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


                        var data = {

                                    source: $(selects['source']).val(),
                                    type: $(selects['type']).val(),
                                    mark: $(selects['mark']).val(),
                                    model: $(selects['model']).val(),
                                    locAdd: $(selects['locAdd']).val(),
                                    locRem: $(selects['locRem']).val()
                        };

                        $.ajax({

                                    headers: {
                                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                    },

                                    method: 'POST',

                                    data: data,

                                    url: '/cars/docs'

                        }).done(function (response) {

                                    var docType = response.docType;

                                    $(selects['docAdd']).selectpicker('val', '');
                                    $(selects['docRem']).selectpicker('val', '');

                                    Search.setSelectOptions(selects['docAdd'], docType);
                                    Search.setSelectOptions(selects['docRem'], docType);

                                    $('.selectpicker').selectpicker('refresh');

                                    if (updatePage === true) Table.getPage(1, Search.getSearchData());
                        });
            }

            //EVENTS

            function onChangeSource() {

                        $(el).on('change', selects['source'], function (e) {
                                    e.preventDefault();

                                    Search.runPreloader();

                                    $(selects['type']).selectpicker('val', options['type'][0]);

                                    Search.setSelectOptions(selects['model'], '');

                                    Search.clearSearchValue([selects['source'], selects['type']]);

                                    Search.setSearchCarOptions();
                        });
            }

            function onChangeType() {

                        $(el).on('change', selects['type'], function (e) {
                                    e.preventDefault();

                                    Search.runPreloader();

                                    Search.clearSearchValue([selects['source'], selects['type']]);

                                    Search.setSelectOptions(selects['model'], '');

                                    Search.setSearchCarOptions();
                        });
            }

            function onChangeMark() {

                        $(el).on('change', selects['mark'], function (e) {
                                    e.preventDefault();

                                    Search.runPreloader();

                                    var mark = $(selects['mark']).val();

                                    Search.clearSearchValue([selects['source'], selects['type'], selects['mark']]);

                                    Search.setSearchCarOptions();

                                    // getModels(mark);
                        });
            }

            function onChangeModel() {

                        $(el).on('change', selects['model'], function (e) {
                                    e.preventDefault();

                                    Search.runPreloader();

                                    var mark = $(selects['mark']).val();

                                    Search.clearSearchValue([selects['source'], selects['type'], selects['mark'], selects['model']]);

                                    Search.setSearchCarOptions();
                        });
            }

            function onChangeLocation() {

                        $(el).on('change', selects['locAdd'], function (e) {
                                    e.preventDefault();

                                    getDocs();
                        });

                        $(el).on('change', selects['locRem'], function (e) {
                                    e.preventDefault();

                                    getDocs();
                        });
            }

            function onSearchGlobal() {

                        $(searchGlobal).submit(function (e) {
                                    e.preventDefault();

                                    searchGlobalQuery = {};

                                    var query = $(searchGlobal + ' input').val();

                                    $(searchGlobal + ' input').val('');

                                    if (new RegExp('^[a-zA-Z]{2}$', "i").test(query)) {

                                                var founded = options['location'].filter(function (str) {

                                                            return new RegExp('^' + query, "i").test(str);
                                                });

                                                searchGlobalQuery['locAdd'] = founded;
                                    }

                                    if (new RegExp('^[a-zA-Z0-9]{17}$', "i").test(query)) {

                                                searchGlobalQuery['vin'] = query;
                                    }

                                    if (new RegExp('^[0-9]{8}$', "i").test(query)) {

                                                searchGlobalQuery['lot'] = query;
                                    }

                                    if (new RegExp('^[0-9]{4}$', "i").test(query)) if (query >= options['years'].min() && query <= options['years'].max()) {

                                                searchGlobalQuery['yearTo'] = query;
                                                searchGlobalQuery['yearFrom'] = query;
                                    }

                                    console.log('global obj');
                                    console.log(searchGlobalQuery);

                                    searchType = 'global';

                                    Table.getPage(1, Search.getSearchData());
                        });
            }

            function onSearchCars() {

                        $(searchBtn).click(function () {

                                    searchType = 'main';
                                    Table.getPage(1, Search.getSearchData());
                        });

                        $(searchBtnTop).click(function () {

                                    searchType = 'main';

                                    Table.getPage(1, Search.getSearchData());
                        });
            }

            function onClearFavorite() {

                        $(favoriteWrapper).on('click', '#favorite-clear-btn', function (e) {

                                    App.deleteCookie('favoriteCars');

                                    $(favoriteWrapper).html('<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>');

                                    $(window).trigger('disableFavoriteBtn');

                                    Search.showFavorite = false;

                                    Search.clearSearchValue();

                                    Table.getPage(1, Search.getSearchData());
                        });
            }

            function onClickClearSearch() {

                        $(searchClearBtn).click(function (e) {
                                    e.preventDefault();

                                    Search.setSearchDefaultOptions();
                        });
            }

            function onToggleFavorite() {

                        $(favoriteWrapper).on('click', '#favorite-search-btn', function (e) {

                                    var disFavoriteBtn = $('#favorite-search-btn').attr('disabled');

                                    if ('disabled' === disFavoriteBtn) {

                                                return false;
                                    }

                                    if (!Search.showFavorite) {

                                                Search.showFavorite = true;

                                                $(favoriteWrapper).html('<a id="favorite-search-btn" class="btn search-btn search-btn_favorite search-btn_half">Все</a>' + '<a id="favorite-clear-btn" class="btn search-btn search-btn_favorite search-btn_half">Очистить</a>');
                                    } else {

                                                $(favoriteWrapper).html('<a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>');
                                                Search.showFavorite = false;
                                    }

                                    Search.setSearchDefaultOptions();

                                    console.log('Toggle favorite');

                                    Table.getPage(1, Search.getSearchData());
                        });
            }

            function onDisableFavorite() {

                        $(window).on('disableFavoriteBtn', function (e, data) {

                                    var favoriteCars = App.getCookie('favoriteCars');

                                    if (favoriteCars) {

                                                $(favoriteBtn).attr('disabled', false);
                                    } else {

                                                $(favoriteBtn).attr('disabled', true);
                                    }
                        });
            }

            return {

                        showFavorite: false,

                        runPreloader: function runPreloader() {
                                    $(searchBtnTop).html('<img class="search-block_preloader" src="/carhouse/img/search_preloader.svg">');
                        },

                        stopPreloader: function stopPreloader() {
                                    $(searchBtnTop).html('<i class="fa fa-search"></i>');
                        },

                        init: function init() {

                                    initSearchOptions();

                                    initEvents();

                                    $(window).trigger('disableFavoriteBtn');
                        },

                        getSelects: function getSelects() {

                                    return selects;
                        },

                        getOptions: function getOptions() {

                                    return options;
                        },

                        getSearchData: function getSearchData() {

                                    if (searchType === 'main') {

                                                var searchData = {};

                                                searchData['source'] = $(selects['source']).val();

                                                searchData['type'] = $(selects['type']).val();

                                                searchData['mark'] = $(selects['mark']).val();

                                                searchData['model'] = $(selects['model']).val();

                                                searchData['yearTo'] = $(selects['yearTo']).val();

                                                searchData['yearFrom'] = $(selects['yearFrom']).val();

                                                searchData['damage'] = $(selects['damage']).val();

                                                searchData['drive'] = $(selects['drive']).val();

                                                searchData['fuel'] = $(selects['fuel']).val();

                                                searchData['highlight'] = $(selects['highlight']).val();

                                                searchData['locAdd'] = $(selects['locAdd']).val();
                                                searchData['locRem'] = $(selects['locRem']).val();

                                                searchData['docAdd'] = $(selects['docAdd']).val();

                                                searchData['docRem'] = $(selects['docRem']).val();

                                                if ($(buyNowInputTop).is(":checked") || $(buyNowInputBottom).is(":checked")) {

                                                            searchData['buyNow'] = 1;
                                                }

                                                if (Search.showFavorite) {

                                                            var favoriteCars = JSON.parse(App.getCookie('favoriteCars'));

                                                            if (favoriteCars === undefined) favoriteCars = [];

                                                            searchData['favoriteCars'] = favoriteCars;
                                                }

                                                return searchData;
                                    }

                                    if (searchType === 'global') {

                                                return searchGlobalQuery;
                                    }
                        },

                        getSelectOptions: function getSelectOptions(select) {

                                    var options = [];

                                    $(select + ' option').each(function () {
                                                options.push($(this).val());
                                    });

                                    return options;
                        },

                        setSelectOptions: function setSelectOptions(select, array) {

                                    var el = $(select);

                                    el.empty();

                                    console.log(array);
                                    $.each(array, function (key, value) {

                                                el.append("<option value='" + value + "'>" + value + "</option>");
                                    });

                                    $('.selectpicker').selectpicker('refresh');
                        },

                        removeDoc: function removeDoc(doc) {
                                    var updatePage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


                                    var selected = $(selects['docRem']).val();

                                    var newSelected = $(selects['docRem']).val();

                                    if (!App.itemExist(selected, doc)) newSelected.push(doc);

                                    $(selects['docRem']).val(newSelected);

                                    $('.selectpicker').selectpicker('refresh');

                                    if (updatePage === true) Table.getPage(1, Search.getSearchData());
                        },

                        removeLoc: function removeLoc(loc) {

                                    var selected = $(selects['locRem']).val();

                                    var newSelected = $(selects['locRem']).val();

                                    if (!App.itemExist(selected, loc)) newSelected.push(loc);

                                    $(selects['locRem']).val(newSelected);

                                    $('.selectpicker').selectpicker('refresh');

                                    getDocs(true);
                        },

                        setSearchCarOptions: function setSearchCarOptions() {

                                    var source = $(selects['source']).val();
                                    var type = '/' + $(selects['type']).val();
                                    var mark = $(selects['mark']).val();
                                    var model = $(selects['model']).val();

                                    if (model) model = model.join(',');

                                    console.log('перед get');
                                    $.get({

                                                url: '/cars/property/' + source + type,

                                                data: {
                                                            mark: mark,
                                                            model: model
                                                }

                                    }).done(function (data) {

                                                console.log('in done');

                                                if (data.hasOwnProperty('marks')) {
                                                            Search.setSelectOptions(selects['mark'], data.marks);
                                                            $(selects['mark']).prepend("<option value='all' selected='selected'>ВСЕ</option>");
                                                }

                                                if (data.hasOwnProperty('models')) {
                                                            Search.setSelectOptions(selects['model'], data.models);
                                                }

                                                Search.setSelectOptions(selects['yearTo'], data['years']);
                                                Search.setSelectOptions(selects['yearFrom'], data['years']);

                                                $(selects['yearFrom']).selectpicker('val', data['years'][0]);
                                                $(selects['yearTo']).selectpicker('val', data['years'][data['years'].length - 1]);

                                                Search.setSelectOptions(selects['damage'], data['damage']);

                                                Search.setSelectOptions(selects['highlight'], data['highlights']);

                                                Search.setSelectOptions(selects['drive'], data['drive']);
                                                Search.setSelectOptions(selects['fuel'], data['fuel']);

                                                Search.setSelectOptions(selects['locAdd'], data['location']);
                                                Search.setSelectOptions(selects['locRem'], data['location']);

                                                Search.setSelectOptions(selects['docAdd'], data['doc_type']);
                                                Search.setSelectOptions(selects['docRem'], data['doc_type']);

                                                $('.selectpicker').selectpicker('refresh');

                                                Search.stopPreloader();
                                    });
                        },

                        //Set type:car selects options
                        setSearchDefaultOptions: function setSearchDefaultOptions() {

                                    var options = Search.getOptions();

                                    $(selects['source']).selectpicker('val', options['source'][0]);

                                    $(selects['type']).selectpicker('val', options['type'][0]);

                                    Search.setSelectOptions(selects['mark'], options['mark']);
                                    $(selects['mark']).prepend("<option value='all' selected='selected'>ВСЕ</option>");
                                    $(selects['mark']).selectpicker('val', 'all');

                                    Search.setSelectOptions(selects['model'], '');

                                    Search.setSelectOptions(selects['yearFrom'], options['years']);
                                    Search.setSelectOptions(selects['yearTo'], options['years']);

                                    $(selects['yearFrom']).selectpicker('val', options['years'][0]);
                                    $(selects['yearTo']).selectpicker('val', options['years'][options['years'].length - 1]);

                                    Search.setSelectOptions(selects['damage'], options['damage']);

                                    Search.setSelectOptions(selects['locAdd'], options['location']);
                                    Search.setSelectOptions(selects['locRem'], options['location']);

                                    Search.setSelectOptions(selects['drive'], options['drive']);

                                    Search.setSelectOptions(selects['fuel'], options['fuel']);

                                    Search.setSelectOptions(selects['highlight'], options['highlight']);

                                    Search.setSelectOptions(selects['docAdd'], options['doc_type']);
                                    Search.setSelectOptions(selects['docRem'], options['doc_type']);

                                    Search.clearSearchValue([selects['source'], selects['type'], selects['mark'], selects['yearTo'], selects['yearFrom']], true);
                        },

                        clearSearchValue: function clearSearchValue() {
                                    var exceptClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                                    var buyItNow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


                                    var selectsArray = Object.values(selects);

                                    selectsArray.forEach(function (item) {

                                                if (!App.itemExist(exceptClear, item)) $(item).selectpicker('val', '');
                                    });

                                    if (buyItNow) {
                                                $(buyNowInputTop).prop("checked", false);
                                                $(buyNowInputBottom).prop("checked", false);
                                    }

                                    $('.selectpicker').selectpicker('refresh');
                        }
            };
}();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);