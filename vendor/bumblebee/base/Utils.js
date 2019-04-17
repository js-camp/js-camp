/**
 * Base namespace for the Bumble Bee library.  Checks to see Bee is already
 * defined in the current scope before assigning to prevent clobbering if
 * Bee.Utils.js is loaded more than once.
 *
 * this should be loaded before any other file
 * @namespace
 */

/**
 * the Utils objects
 * since it is the base object for all other objects
 * we don't want to instantiate it before usage
 * even tho that is possible
 *  * @type {Object}
 * @static
 */
export default {
   /**
    * @use Unique ID generator object
    * @type {Object}
    */
   UID : {

      _current : 0,
      getNew   : function ()
      {
         this._current++;
         return this._current;
      }
   },

   /**
    * the default css unit of measurement
    * @type  {String}
    */
   DEFAULT_UNIT : "px",
   /**
    *
    * @param val {Number|String<Number>}
    * @param radix {Number}|magnitude
    * @returns {INT}
    */
   pInt   : function (val, radix)
   {
      return parseInt(val, radix || 10);
   },
   /**
    *
    * @param val {Number|String<Number>}
    * @returns {Number}
    */
   pFt    : function (val)
   {
      return parseFloat(val);
   },

   /**
    * predicate that Returns true if the specified value is not undefined.
    * @WARNING: Do not use this to test if an object has a property. Use the {@code in} operator instead.
    * @param obj {Object}
    * @returns {boolean}
    */
   defined : function (obj)
   {
      // void 0 always evaluates to undefined and hence we do not need to depend on
      // the definition of the global variable named 'undefined'.
      // return obj !== void 0;
      return obj !== undefined && obj !== null; //legacy check
   },

   init : function()
   {
      //don't know what to do with this
   },

   /**
    * Removes all key value pairs from the object/map/hash.
    *
    * @param {Object} obj The object to clear.
    */
   destroy : function (obj)
   {
      //for (let i in obj)
      //{   delete obj[i];}
      obj = null; //set it up for garbage collection
   },

   /**
    *
    * @param s
    * @returns {boolean}
    */
   isString : function (s)
   {
      return typeof s === 'string';
   },

   /**
    * Check for If obj is an array
    * @param {Object} obj
    *///* @param {Boolean} strict Also checks that the object is not an array
   isArray : function (obj)
   {
      if (Array.isArray())
      {
         return Array.isArray(obj);
      }
      const str = Object.prototype.toString.call(obj);
      return str === '[object Array]' || str === '[object Array Iterator]';
   },

   /**
    *
    * @param obj {Object}
    * @returns {boolean}
    */
   isArrayLike : function (obj)
   {
      const type = typeof(obj);
      // We do not use isObject here in order to exclude function values.
      return type === 'array' || (type === 'object' && typeof obj.length === 'number');
   },

   /**
    *
    * @param obj {Object}
    * @param strict {boolean}
    * @returns {*|boolean}
    */
   isObject : function (obj, strict)
   {
      return obj && typeof obj === 'object' && (!strict || !this.isArray(obj));
   },

   /**
    *
    * @param obj {Object}
    * @returns {boolean}
    */
   isEmptyObject : function (obj)
   {
      for (let name in obj)
      {
         if (obj.hasOwnProperty(name))
         {
            return false;
         }
      }
      return true;
   },

   /**
    * Determine if variable is an array-like wrapped jQuery,
    * Zepto or similar element, or even a NodeList etc.
    * NOTE: HTMLFormElements also have a length.
    * @param obj
    * @returns {*|boolean}
    */
   isWrapped : function (obj)
   {
      return obj
             && this.isNumber(obj.length)
             && !this.isString(obj)
             && !this.isFunction(obj)
             && !this.isNode(obj)
             && (obj.length === 0 || this.isNode(obj[0]));
   },

   /**
    *
    * @param n
    * @returns {boolean}
    */
   isNumber : function (n)
   {
      return typeof n === 'number' && !isNaN(n);
   },

   /**
    *
    * @param variable
    * @returns {*|Number}
    */
   isNode : function (variable)
   {
      return variable && variable.nodeType;
   },

   /**
    *
    * @param obj
    * @returns {*|boolean}
    */
   isWindow : function (obj)
   {
      /* jshint eqeqeq: false */
      return obj && obj === obj.window;
   },

   isFunction : function (obj)
   {
      return Object.prototype.toString.call(obj) === "[object Function]";
   },
   //endregion

   bind : function (fn, selfObj, var_args)
   {
      // TODO(nicksantos): narrow the type signature.
      return this.bind.apply(null, arguments);
   },

   /**
    * Like bind(), except that a 'this object' is not required. Useful when
    * the target function is already bound.
    *
    * Usage:
    * var g = partial(f, arg1, arg2);
    * g(arg3, arg4);
    *
    * @param {Function} fn A function to partially apply.
    * @param {...*} var_args Additional arguments that are partially applied to fn.
    * @return {!Function} A partially-applied form of the function partial()
    *     was invoked as a method of.
    */
   partial     : function (fn, var_args)
   {
      const args = Array.prototype.slice.call(arguments, 1);

      return function ()
      {
         // Clone the array (with slice()) and append additional arguments
         // to the existing arguments.
         const newArgs = args.slice();
         newArgs.push.apply(newArgs, arguments);
         return fn.apply(this, newArgs);
      };
   },

   /**
    *
    * @param namespaceString
    * @returns {{}}
    */
   define : function (namespaceString)
   {
      let parts = namespaceString.split('.'),
          parent = Bee,
          i;

      // strip redundant leading global
      if (parts[0] === "Bee")
      {
         parts = parts.slice(1);
      }

      for (i = 0; i < parts.length; i += 1)
      {
         // create a property if it doesn't exist
         if (typeof parent[parts[i]] === "undefined")
         {
            parent[parts[i]] = {};
         }
         parent = parent[parts[i]];
      }
      return parent;
   },

   /**
    *
    * @param condition {Boolean <True>}
    * @param message = '' {String]
    * @param callback {fn}
    */
   assert : function (condition, message = '', callback)
   {
      if (!condition)
      {
         if(callback) {callback();}
         throw new Error(message);
      }
   },
   /**
    * @use throws custom errors
    * @param message {String}
    * @param code {String}
    * @param url {String}
    */
   error : function(message = "", code = "", url = "")
   {
      message = "Error: " +
                code + " " +
                message + " " +
                url ;
      throw new Error(message);
   },

   /**
    * An implementation of Exclusive OR XOR in javascript
    * It should return true if one and only one of the expressions is true
    * All other situations
    * @param expression1 {expression}
    * @param expression2 {expression}
    * @returns {boolean}
    */
   xor :function (expression1, expression2)
   {
      if(expression1 === true && expression2 === false)
      {
         return true;
      }
      else if(expression2 === true && expression1 === false)
      {
         //both of them maybe true or both maybe false
         return true;
      }

      return false;
   },
   /**
    * @return {number} An integer value representing the number of milliseconds
    *     between midnight, January 1, 1970 (The UNIX Epoch) and the current time.
    */
   now : (Date.now) || (function ()
   {
      // Unary plus operator converts its operand to a number which in
      // the case of
      // a date is done by calling getTime().
      return +new Date();
   })

};
