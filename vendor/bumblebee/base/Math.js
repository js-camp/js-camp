/**
 *
 * @Author       Created by ARCH on 12/25/16. using PhpStorm.
 * @Time         : 00:19
 * @Copyright (C) 2016
 * @version 2.3.5
 * Barge Studios Inc, The Bumble Bee Authors
 * <bargestd@gmail.com>
 * <bumble.bee@bargestd.com>
 *
 * @licence      Licensed under the Barge Studios Eula
 *  you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at
 *     http://www.bargestudios.com/bumblebee/licence
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *        \__/
 *    \  (-_-)  /
 *    \-( ___)-/
 *     ( ____)
 *   <-(____)->
 *    \      /
 * @fileOverview contains instruction[code] for creating $USE$ this
 *
 * @requires {@link Bee.Utils}
 * @requires {@link Bee.Array}
 *
 */
"use strict";

import Utils from './Utils';
import Array from './Array';

let Bu = Utils,
    Ba = Array;

export default {

  result : 0,

  /**
   * Returns a random number greater than or equal to 0 and less than {@code a}.
   * @param {number} a  The upper bound for the random number (inclusive).
   * @return {number} A random number N such that a <= N < b.
   */
  randomInt : function (a)
  {
    return Math.floor(Math.random() * a);
  },

  /**
   * Returns a random number greater than or equal to {@code a} and less than
   * {@code b}.
   * @param {number} a  The lower bound for the random number (inclusive).
   * @param {number} b  The upper bound for the random number (exclusive).
   * @return {number} A random number N such that a <= N < b.
   */
  uniformRandom : function (a, b)
  {
    return a + Math.random() * (b - a);
  },

  /**
   * Takes a number and clamps it to within the provided bounds.
   * @param {number} value The input number.
   * @param {number} min The minimum value to return.
   * @param {number} max The maximum value to return.
   * @return {number} The input number if it is within bounds, or the nearest
   *    number within the bounds.
   */
  clamp : function (value, min, max)
  {
    return Math.min(Math.max(value, min), max);
  },

  /**
   * The % operator in JavaScript returns the remainder of a / b, but differs from
   * some other languages in that the result will have the same sign as the
   * dividend. For example, -1 % 8 == -1, whereas in some other languages
   * (such as Python) the result would be 7. This function emulates the more
   * correct modulo behavior, which is useful for certain applications such as
   * calculating an offset index in a circular list.
   *
   * @param {number} a The dividend.
   * @param {number} b The divisor.
   * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
   *     or b < x <= 0, depending on the sign of b).
   */
  modulo : function (a, b)
  {
    var r = a % b;
    // If r and b differ in sign, add b to wrap the result to the correct sign.
    return (r * b < 0) ? r + b : r;
  },

  /**
   * Performs linear interpolation between values a and b. Returns the value
   * between a and b proportional to x (when x is between 0 and 1. When x is
   * outside this range, the return value is a linear extrapolation).
   * @param {number} a A number.
   * @param {number} b A number.
   * @param {number} x The proportion between a and b.
   * @return {number} The interpolated value between a and b.
   */
  linearInterpolate : function (a, b, x)
  {
    return a + x * (b - a);
  },

  /**
   * Tests whether the two values are equal to each other,
   * within a certain tolerance to adjust for floating point errors.
   * @param {number} a A number.
   * @param {number} b A number.
   * @param {number=} optTolerance Optional tolerance range. Defaults
   *     to 0.000001. If specified, should be greater than 0.
   * @return {boolean} Whether {@code a} and {@code b} are nearly equal.
   */
  nearlyEquals : function (a, b, optTolerance)
  {
    return Math.abs(a - b) <= (optTolerance || 0.000001);
  },

  // TODO(user): Rename to normalizeAngle, retaining old name as deprecated
  // alias.
  /**
   * Normalizes an angle to be in range [0-360). Angles outside this range will
   * be normalized to be the equivalent angle with that range.
   * @param {number} angle Angle in degrees.
   * @return {number} Standardized angle.
   */
  standardAngle : function (angle)
  {
    return this.modulo(angle, 360);
  },

  /**
   * Normalizes an angle to be in range [0-2*PI). Angles outside this range will
   * be normalized to be the equivalent angle with that range.
   * @param {number} angle Angle in radians.
   * @return {number} Standardized angle.
   */
  standardAngleInRadians : function (angle)
  {
    return this.modulo(angle, 2 * Math.PI);
  },

  /**
   * Converts degrees to radians.
   * @param {number} angleDegrees Angle in degrees.
   * @return {number} Angle in radians.
   */
  toRadians : function (angleDegrees)
  {
    return angleDegrees * Math.PI / 180;
  },

  /**
   * Converts radians to degrees.
   * @param {number} angleRadians Angle in radians.
   * @return {number} Angle in degrees.
   */
  toDegrees : function (angleRadians)
  {
    return angleRadians * 180 / Math.PI;
  },

  /**
   * Forward kinematics
   * For a given angle and radius, finds the X portion of the offset.
   * @param {number} degrees Angle in degrees (zero points in +X direction).
   * @param {number} radius Radius.
   * @return {number} The x-distance for the angle and radius.
   */
  angleDx : function (degrees, radius)
  {
    return radius * Math.cos(this.toRadians(degrees));
  },

  /**
   * Forward kinematics
   * For a given angle and radius, finds the Y portion of the offset.
   * @param {number} degrees Angle in degrees (zero points in +X direction).
   * @param {number} radius Radius.
   * @return {number} The y-distance for the angle and radius.
   */
  angleDy : function (degrees, radius)
  {
    return radius * Math.sin(this.toRadians(degrees));
  },

  /**
   * Inverse Forward kinematics
   * Computes the angle between two points (x1,y1) and (x2,y2).
   * Angle zero points in the +X direction, 90 degrees points in the +Y
   * direction (down) and from there we grow clockwise towards 360 degrees.
   * @param {number} x1 x of first point.
   * @param {number} y1 y of first point.
   * @param {number} x2 x of second point.
   * @param {number} y2 y of second point.
   * @return {number} Standardized angle in degrees of the vector from
   *     x1,y1 to x2,y2.
   */
  angle : function (x1, y1, x2, y2)
  {
    return this.standardAngle(
      this.toDegrees(Math.atan2(y2 - y1, x2 - x1)));
  },

  /**
   * return the slope of any two given points on a line
   * @param point1 {{x : Number, y : Number} | Array<x1, x2, y1, y2>}
   * @param point2 {{x : Number, y : Number}}
   */
  getGradient : function(point1, point2)
  {
    //test=t if the first arg val is an Array , then  use the val of the els in the array
    // as the values for the x and y
    if(Bu.isArray(point1))
    {
      return (point1[3] - point1[2]) / (point1[1] - point1[0])
    }
    return ((point2.y || 0) - (point1.y || 0)) / ((point2.x || 0)- (point1.x || 0));
  },

  /**
   * Computes the difference between startAngle and endAngle (angles in degrees).
   * @param {number} startAngle  Start angle in degrees.
   * @param {number} endAngle  End angle in degrees.
   * @return {number} The number of degrees that when added to
   *     startAngle will result in endAngle. Positive numbers mean that the
   *     direction is clockwise. Negative numbers indicate a counter-clockwise
   *     direction.
   *     The shortest route (clockwise vs counter-clockwise) between the angles
   *     is used.
   *     When the difference is 180 degrees, the function returns 180 (not -180)
   *     angleDifference(30, 40) is 10, and angleDifference(40, 30) is -10.
   *     angleDifference(350, 10) is 20, and angleDifference(10, 350) is -20.
   */
  angleDifference : function (startAngle, endAngle)
  {
    var d =
          this.standardAngle(endAngle) - this.standardAngle(startAngle);
    if (d > 180)
    {
      d = d - 360;
    }
    else if (d <= -180)
    {
      d = 360 + d;
    }
    return d;
  },

  /**
   * Returns the sign of a number as per the "sign" or "signum" function.
   * @param {number} x The number to take the sign of.
   * @return {number} -1 when negative, 1 when positive, 0 when 0. Preserves
   *     signed zeros and NaN.
   */
  sign : function (x)
  {
    if (x > 0)
    {
      return 1;
    }
    if (x < 0)
    {
      return -1;
    }
    return x;  // Preserves signed zeros and NaN.
  },

  /**
   * JavaScript implementation of Longest Common Subsequence problem.
   * http://en.wikipedia.org/wiki/Longest_common_subsequence
   *
   * Returns the longest possible array that is subarray of both of given arrays.
   *
   * @param {Array<S>} array1 First array of objects.
   * @param {Array<T>} array2 Second array of objects.
   * @param {Function=} opt_compareFn Function that acts as a custom comparator
   *     for the array ojects. Function should return true if objects are equal,
   *     otherwise false.
   * @param {Function=} opt_collectorFn Function used to decide what to return
   *     as a result subsequence. It accepts 2 arguments: index of common element
   *     in the first array and index in the second. The default function returns
   *     element from the first array.
   * @return {!Array<S|T>} A list of objects that are common to both arrays
   *     such that there is no common subsequence with size greater than the
   *     length of the list.
   * @template S,T
   */
  longestCommonSubsequence : function (array1, array2, opt_compareFn, opt_collectorFn)
  {
    var i = 0, j = 0;

    var compare = opt_compareFn || function (a, b)
    {
      return a === b;
    };

    var collect = opt_collectorFn || function (i1, i2)
    {
      return array1[i1];
    };

    var length1 = array1.length;
    var length2 = array2.length;

    var arr = [];
    (function ()
    {
      for (var i = 0; i < length1 + 1; i++)
      {
        arr[i] = [];
        arr[i][0] = 0;
      }
    })();

    for (j = 0; j < length2 + 1; j++)
    {
      arr[0][j] = 0;
    }

    (function ()
    {
      for (var i = 1; i <= length1; i++)
      {
        for (j = 1; j <= length2; j++)
        {
          if (compare(array1[i - 1], array2[j - 1]))
          {
            arr[i][j] = arr[i - 1][j - 1] + 1;
          }
          else
          {
            arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
          }
        }
      }
    })();
    // Backtracking
    var result = [];
    i = length1;
    j = length2;
    while (i > 0 && j > 0)
    {
      if (compare(array1[i - 1], array2[j - 1]))
      {
        result.unshift(collect(i - 1, j - 1));
        i--;
        j--;
      }
      else
      {
        if (arr[i - 1][j] > arr[i][j - 1])
        {
          i--;
        }
        else
        {
          j--;
        }
      }
    }

    return result;
  },

  /**
   * Returns the sum of the arguments.
   * @param {...number} var_args Numbers to add.
   * @return {number} The sum of the arguments (0 if no arguments were provided,
   *     {@code NaN} if any of the arguments is not a valid number).
   */
  sum : function (var_args)
  {
    return /** @type {number} */ (
      Ba.reduce(arguments, function (sum, value)
      {
        return sum + value;
      }, 0));
  },

  /**
   * Returns the arithmetic mean of the arguments.
   * @param {...number} var_args Numbers to average.
   * @return {number} The average of the arguments ({@code NaN} if no arguments
   *     were provided or any of the arguments is not a valid number).
   */
  average : function (var_args)
  {
    return this.sum.apply(null, arguments) / arguments.length;
  },

  /**
   * @param items {Array<Number>|String<Number>}
   * @param items
   * @param fn
   * @returns {*|R}
   */
  rank           : function (items, fn)
  {
    fn = fn || ((a, b) => b - a);

    return items
    .map((x, i) => { return [x, i];})
     .sort((a, b) => { return fn(a[0], b[0]);})
     .reduce((a, x, i, s) =>
             {
               if (i > 0 && fn(s[i - 1][0], x[0]) === 0)
               {
                 return (a[x[1]] = a[s[i - 1][1]] , a);
               }
               else
               {
                 return (a[x[1]] = i + 1 , a);
               }
             }, []);
  },
  /**
   * Returns the unbiased sample variance of the arguments. For a definition,
   * see e.g. http://en.wikipedia.org/wiki/Variance
   * @param {...number} var_args Number samples to analyze.
   * @return {number} The unbiased sample variance of the arguments (0 if fewer
   *     than two samples were provided, or {@code NaN} if any of the samples is
   *     not a valid number).
   */
  sampleVariance : function (var_args)
  {
    var sampleSize = arguments.length;
    if (sampleSize < 2)
    {
      return 0;
    }

    var mean = this.average.apply(null, arguments);
    var variance;

    return variance = this.sum.apply(null, Ba.map(arguments, function (val)
    {
      return Math.pow(val - mean, 2);
    })) / (sampleSize - 1);
  },

  /**
   * Returns the sample standard deviation of the arguments.  For a definition of
   * sample standard deviation, see e.g.
   * http://en.wikipedia.org/wiki/Standard_deviation
   * @param {...number} var_args Number samples to analyze.
   * @return {number} The sample standard deviation of the arguments (0 if fewer
   *     than two samples were provided, or {@code NaN} if any of the samples is
   *     not a valid number).
   */
  standardDeviation : function (var_args)
  {
    return Math.sqrt(this.sampleVariance.apply(null, arguments));
  },

  /**
   * Returns whether the supplied number represents an integer, i.e. that is has
   * no fractional component.  No range-checking is performed on the number.
   * @param {number} num The number to test.
   * @return {boolean} Whether {@code num} is an integer.
   */
  isInt : function (num)
  {
    return isFinite(num) && num % 1 === 0;
  },

  /**
   * Returns whether the supplied number is finite and not NaN.
   * @param {number} num The number to test.
   * @return {boolean} Whether {@code num} is a finite number.
   */
  isFiniteNumber : function (num)
  {
    return isFinite(num) && !isNaN(num);
  },

  /**
   * @param {number} num The number to test.
   * @return {boolean} Whether it is negative zero.
   */
  isNegativeZero : function (num)
  {
    return num === 0 && 1 / num < 0;
  },

  /**
   * Returns the precise value of floor(log10(num)).
   * Simpler implementations didn't work because of floating point rounding
   * errors. For example
   * <ul>
   * <li>Math.floor(Math.log(num) / Math.LN10) is off by one for num == 1e+3.
   * <li>Math.floor(Math.log(num) * Math.LOG10E) is off by one for num == 1e+15.
   * <li>Math.floor(Math.log10(num)) is off by one for num == 1e+15 - 1.
   * </ul>
   * @param {number} num A floating point number.
   * @return {number} Its logarithm to base 10 rounded down to the nearest
   *     integer if num > 0. -Infinity if num == 0. NaN if num < 0.
   */
  log10Floor : function (num)
  {
    if (num > 0)
    {
      var x = Math.round(Math.log(num) * Math.LOG10E);
      return x - (parseFloat('1e' + x) > num ? 1 : 0);
    }
    return num === 0 ? -Infinity : NaN;
  },

  /**
   * A tweaked variant of {@code Math.floor} which tolerates if the passed number
   * is infinitesimally smaller than the closest integer. It often happens with
   * the results of floating point calculations because of the finite precision
   * of the intermediate results. For example {@code Math.floor(Math.log(1000) /
       * Math.LN10) == 2}, not 3 as one would expect.
   * @param {number} num A number.
   * @param {number=} opt_epsilon An infinitesimally small positive number, the
   *     rounding error to tolerate.
   * @return {number} The largest integer less than or equal to {@code num}.
   */
  safeFloor : function (num, opt_epsilon)
  {
    // goog.asserts.assert(!goog.isDef(opt_epsilon) || opt_epsilon > 0);
    return Math.floor(num + (opt_epsilon || 2e-15));
  },

  /**
   * A tweaked variant of {@code Math.ceil}. See {@code safeFloor} for
   * details.
   * @param {number} num A number.
   * @param {number=} opt_epsilon An infinitesimally small positive number, the
   *     rounding error to tolerate.
   * @return {number} The smallest integer greater than or equal to {@code num}.
   */
  safeCeil : function (num, opt_epsilon)
  {
    // assert(!Bee.defined(opt_epsilon) || opt_epsilon > 0);
    return Math.ceil(num - (opt_epsilon || 2e-15));
  },

  /**
   * Get the magnitude of a number
   * @param num
   * @return {number}
   */
  getMagnitude : function (num)
  {
    return Math.pow(10, Math.floor(Math.log(num) / Math.LN10));
  },

  /**
   *
   * @param num {Number}
   * @param range {{min:Number, max:Number}}
   * @return {boolean}
   */
  isBetween : function (num, range)
  {
    return num > range.min && num < range.max;
  },

  /**
   *
   * @param num {Number}
   * @param range {{min:Number, max:Number}}
   * @return {boolean}
   */
  isBetweenInclusive : function (num, range)
  {
    return num >= range.min && num <= range.max;
  },

  /**
   * Recursive factorial fn
   * @param n {number}
   * @return {number}
   */
  factorial : function (n)
  {
    if (n === 0)
    {
      return 1;
    }
    return n * Bee.Math.factorial(n - 1);
  },

  /**
   * Iterative factorial fn
   * @param n {number}
   * @return {number}
   */
  iterFactorial : function (n)
  {
    this.result = 1;
    while (n >= 1)
    {
      this.result = this.result * n;
      n = n - 1;
    }
    return this.result;
  },

  /**
   * Fix JS round off float errors
   * @param {Number} num
   * @param {Number} [precision]
   */
  correctFloat : function (num, precision)
  {
    return parseFloat(num.toPrecision(precision || 14));
  },

  /**
   * For some number y and some divisor x
   * compute the quotient and remainder as: var quotient = Math.floor(y/x);
   * @param number {number}
   * @param divisor {number}
   * @returns {number}
   */
  getQuotient : function (number, divisor)
  {
    //return Math.floor(number / divisor);
    //works;stable; a lil slow
    return ~~(number / divisor);
  }
};

//console.log(Bee.Math.rank([79, 5, 18, 5, 32, 1, 16, 1, 82, 13]));

