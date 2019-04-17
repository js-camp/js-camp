/*!
 * Swipe 3.2.11
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

// if the module has no dependencies, the above pattern can be simplified to
// eslint-disable-next-line no-extra-semi


(function (global, factory)
{
   if (typeof define === 'function' && define.amd)
   {
      // AMD. Register as an anonymous module unless amdModuleId is set
      define([], function ()
      {
         return (global['Bee.Widget.Carousel'] = factory(global));
      });
   }
   else if (typeof exports === 'object')
   {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory(global);
   }
   else
   {
      global['Bee.Widget.Carousel'] = factory(global);
   }
})(typeof window !== undefined ? window : this, () =>
{
   "use strict";

   //region protected globals
   let Bu = Bee.utils,
       Ba = Bee.Array,
       Bo = Bee.Object,
       Bs = Bee.String;

   // Establish the root object, `window` (`self`) in the browser, `global`
   // on the server, or `this` in some virtual machines. We use `self`
   // instead of `window` for `WebWorker` support.
   //var root = typeof self == 'object' && self.self === self && self ||
   //           typeof global == 'object' && global.global === global && global ||
   //           this;

   let root = window;

   let _document = root.document;

   let Bd = Bee.Dom;

   //endregion

   /**
    * @param container {ELEMENT | String}
    * @param config {{}}
    * @constructor
    */
   function Carousel(container, config = {})
   {
      // quit if no root element
      //if (!container) return;
      //ensure window exists else don't create
      Bu.assert(Bu.defined(window) && Bu.defined(document),
         'Barge.Dom.Table requires a window object as host');

      //MSG force the Object constructor to return an instance of the Object
      //MSG even when the new keyword hasn't been used:
      if (!(this instanceof Carousel)) {return new Carousel(container, config);} // magic line!

      this.options = {
         auto         : 0,
         startSlide   : 0,
         changeSpeed  : 300,
         continuous   : true,
         autoRestart  : true,
         controlPanel : true
      };
      Bu.assert(Bu.defined(container), "Bee.Widget.Carousel requires a host element 'container'");

      let self = this;
      Bo.extend(this.options, config);

      // setup initial vars
      this.container = container;
      this.start = {};
      this.delta = {};
      this.isScrolling = false;

      // setup auto slideshow
      this.delay = this.options.auto;
      this.interval = null;
      this.disabled = false;

      // check browser capabilities
      this.browser = {
         addEventListener : !!root.addEventListener,
         // eslint-disable-next-line no-undef
         touch            : ('ontouchstart' in root) || root.DocumentTouch && _document instanceof DocumentTouch,
         transitions      : (function (temp)
         {
            var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
            for (var i in props)
            {
               if (temp.style[props[i]] !== undefined)
               {
                  return true;
               }
            }
            return false;
         })(_document.createElement('swipe'))
      };

      this.element = container.children[0];
      this.slides = {};
      this.slidePos = {};
      this.width = null;
      this.length = null;
      this.index = Bu.pInt(this.options.startSlide);
      this.changeSpeed = this.options.changeSpeed;
      this.cpanel = null;
      //options.continuous = this.options.continuous !== undefined ? options.continuous : true;

      // AutoRestart option: auto restart slideshow after user's touch event
      //options.autoRestart = options.autoRestart !== undefined ? options.autoRestart : false;
      //options.controlPanel = options.controlPanel !== undefined ? options.controlPanel : true;

      this.next = function()
      {let self = this;
         console.log(self);
         console.log(self.disabled);
         if (self.disabled)
         { return;}
         if (self.options.continuous)
         {
            self.slide(self.index + 1);
         }
         else if (self.index < self.slides.length - 1)
         {
            self.slide(self.index + 1);
         }
      };

      // throttled setup
      this.throttledSetup = this.throttle(this.setup);

      // setup event capturing
      this.events = {

         handleEvent : function (event)
         {
            if (self.disabled)
            { return;}

            switch (event.type)
            {
               case 'mousedown':
               case 'touchstart':
                  this.start(event);
                  break;
               case 'mousemove':
               case 'touchmove':
                  this.move(event);
                  break;
               case 'mouseup':
               case 'mouseleave':
               case 'touchend':
                  this.end(event);
                  break;
               case 'webkitTransitionEnd':
               case 'msTransitionEnd':
               case 'oTransitionEnd':
               case 'otransitionend':
               case 'transitionend':
                  this.transitionEnd(event);
                  break;
               case 'resize':
                  self.throttledSetup();
                  break;
            }

            if (self.options.stopPropagation)
            {
               event.stopPropagation();
            }
         },

         start : function (event)
         {
            var touches;

            if (self.isMouseEvent(event))
            {
               touches = event;
               event.preventDefault(); // For desktop Safari drag
            }
            else
            {
               touches = event.touches[0];
            }

            // measure start values
            self.start = {

               // get initial touch coords
               x : touches.pageX,
               y : touches.pageY,

               // store time to determine touch duration
               time : +new Date()

            };

            // used for testing first move event
            self.isScrolling = undefined;

            // reset delta and end measurements
            self.delta = {};

            // attach touchmove and touchend listeners
            if (self.isMouseEvent(event))
            {
               self.element.addEventListener('mousemove', this, false);
               self.element.addEventListener('mouseup', this, false);
               self.element.addEventListener('mouseleave', this, false);
            }
            else
            {
               self.element.addEventListener('touchmove', this, false);
               self.element.addEventListener('touchend', this, false);
            }

         },

         move : function (event)
         {
            var touches;
            let delta    = self.delta,
                circle   = self.circle,
                slidePos = self.slidePos,
                start    = self.start,
                index    = self.index;

            if (self.isMouseEvent(event))
            {
               touches = event;
            }
            else
            {
               // ensure swiping with one touch and not pinching
               if (event.touches.length > 1 || event.scale && event.scale !== 1)
               {
                  return;
               }

               if (options.disableScroll)
               {
                  event.preventDefault();
               }

               touches = event.touches[0];
            }

            // measure change in x and y
            delta = {
               x : touches.pageX - start.x,
               y : touches.pageY - start.y
            };

            // determine if scrolling test has run - one time test
            if (typeof self.isScrolling === 'undefined')
            {
               self.isScrolling = !!(self.isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
            }

            // if user is not trying to scroll vertically
            if (!self.isScrolling)
            {
               // prevent native scrolling
               event.preventDefault();

               // stop slideshow
               self.stop();

               // increase resistance if first or last slide
               if (self.options.continuous)
               { // we don't add resistance at the end

                  self.translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
                  self.translate(index, delta.x + slidePos[index], 0);
                  self.translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);

               }
               else
               {

                  delta.x = delta.x / ((!index && delta.x > 0 ||             // if first slide and sliding left
                                        index === self.slides.length - 1 &&        // or if last slide and sliding right
                                        delta.x < 0) ?                          // and if sliding at all
                                       (Math.abs(delta.x) / width + 1)      // determine resistance level
                     : 1);                                 // no resistance if false

                  // translate 1:1
                  self.translate(index - 1, delta.x + slidePos[index - 1], 0);
                  self.translate(index, delta.x + slidePos[index], 0);
                  self.translate(index + 1, delta.x + slidePos[index + 1], 0);
               }
            }
         },

         end : function (event)
         {
            let delta    = self.delta,
                circle   = self.circle,
                slidePos = self.slidePos,
                start    = self.start,
                index    = self.index,
                width    = self.width
            ;
            // measure duration
            var duration = +new Date() - start.time;

            // determine if slide attempt triggers next/prev slide
            var isValidSlide = Number(duration) < 250 &&  // if slide duration is less than 250ms
                               Math.abs(delta.x) > 20 ||         // and if slide amt is greater than 20px
                               Math.abs(delta.x) > width / 2;      // or if slide amt is greater than half the width

            // determine if slide attempt is past start and end
            var isPastBounds = !index && delta.x > 0 ||                      // if first slide and slide amt is greater than 0
                               index === self.slides.length - 1 && delta.x < 0;   // or if last slide and slide amt is less than 0

            if (self.options.continuous)
            {
               isPastBounds = false;
            }

            // OLD determine direction of swipe (true:right, false:left)
            // determine direction of swipe (1: backward, -1: forward)
            var direction = Math.abs(delta.x) / delta.x;

            // if not scrolling vertically
            if (!self.isScrolling)
            {

               if (isValidSlide && !isPastBounds)
               {

                  // if we're moving right
                  if (direction < 0)
                  {

                     if (self.options.continuous)
                     { // we need to get the next in this direction in place

                        self.move(circle(index - 1), -width, 0);
                        self.move(circle(index + 2), width, 0);

                     }
                     else
                     {
                        self.move(index - 1, -width, 0);
                     }

                     self.move(index, slidePos[index] - width, speed);
                     self.move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
                     index = circle(index + 1);

                  }
                  else
                  {
                     if (self.options.continuous)
                     { // we need to get the next in this direction in place

                        self.move(circle(index + 1), width, 0);
                        self.move(circle(index - 2), -width, 0);

                     }
                     else
                     {
                        self.move(index + 1, width, 0);
                     }

                     self.move(index, slidePos[index] + width, speed);
                     self.move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
                     index = circle(index - 1);
                  }

                  runCallback(getPos(), slides[index], direction);

               }
               else
               {

                  if (options.continuous)
                  {

                     move(circle(index - 1), -width, speed);
                     move(index, 0, speed);
                     move(circle(index + 1), width, speed);

                  }
                  else
                  {

                     move(index - 1, -width, speed);
                     move(index, 0, speed);
                     move(index + 1, width, speed);
                  }
               }
            }

            // kill touchmove and touchend event listeners until touchstart called again
            if (self.isMouseEvent(event))
            {
               element.removeEventListener('mousemove', events, false);
               element.removeEventListener('mouseup', events, false);
               element.removeEventListener('mouseleave', events, false);
            }
            else
            {
               element.removeEventListener('touchmove', events, false);
               element.removeEventListener('touchend', events, false);
            }

         },

         transitionEnd : function (event)
         {
            var currentIndex = Bu.pInt(event.target.getAttribute('data-index'));
            if (currentIndex === self.index)
            {
               if (self.delay || self.options.autoRestart)
               {
                  self.restart();
               }

               self.runTransitionEnd(self.getPos(), self.slides[self.index]);
            }
         }
      };

      if (this.options.controlPanel)
      {
         this.createControlPanel();
      }

      // trigger setup
      this.setup(this.options);
      // start auto slideshow if applicable
      this.begin();
   };

   // utilities
   // simple no operation function
   let noop = function () {};

   // offload a functions execution
   Carousel.prototype.offloadFn = function (fn) {
      console.log(this, "offloadFn");
      setTimeout(fn || noop, 0);
   };
   // Returns a function, that, as long as it continues to be invoked, will not
   // be triggered.

   Carousel.prototype.throttle = function (fn, threshold)
   {
      console.log(this, "thrtl");
      threshold = threshold || 100;
      var timeout = null;

      function cancel()
      {
         if (timeout) clearTimeout(timeout);
      }

      function throttledFn()
      {
         var context = this;
         var args = arguments;
         cancel();
         timeout = setTimeout(function ()
                              {
                                 timeout = null;
                                 fn.apply(context, args);
                              }, threshold);
      }

      // allow remove throttled timeout
      throttledFn.cancel = cancel;

      return throttledFn;
   };

   Carousel.prototype.detachEvents = function ()
   {console.log(this, "detEvt");
      let element = this.element,
          events  = this.events;
      if (this.browser.addEventListener)
      {
         // remove current event listeners
         element.removeEventListener('touchstart', events, false);
         element.removeEventListener('mousedown', events, false);
         element.removeEventListener('webkitTransitionEnd', events, false);
         element.removeEventListener('msTransitionEnd', events, false);
         element.removeEventListener('oTransitionEnd', events, false);
         element.removeEventListener('otransitionend', events, false);
         element.removeEventListener('transitionend', events, false);
         root.removeEventListener('resize', events, false);
      }
      else
      {
         root.onresize = null;
      }
   };

   // add event listeners
   Carousel.prototype.attachEvents = function ()
   {console.log(this, "atchEvt");
      let element = this.element,
          events  = this.events,
          browser = this.browser,
          options = this.options;
      if (browser.addEventListener)
      {

         // set touchstart event on element
         if (browser.touch)
         {
            element.addEventListener('touchstart', events, false);
         }

         if (options.draggable)
         {
            element.addEventListener('mousedown', events, false);
         }

         if (browser.transitions)
         {
            element.addEventListener('webkitTransitionEnd', events, false);
            element.addEventListener('msTransitionEnd', events, false);
            element.addEventListener('oTransitionEnd', events, false);
            element.addEventListener('otransitionend', events, false);
            element.addEventListener('transitionend', events, false);
         }

         // set resize event on window
         root.addEventListener('resize', events, false);

      }
      else
      {
         root.onresize = throttledSetup; // to play nice with old IE
      }
   };

   // clone nodes when there is only two slides
   Carousel.prototype.cloneNode = function (el)
   {console.log(this, "clonOde");
      var clone = el.cloneNode(true);
      this.element.appendChild(clone);

      // tag these slides as clones (to remove them on kill)
      clone.setAttribute('data-cloned', true);

      // Remove id from element
      clone.removeAttribute('id');
   };

   Carousel.prototype.setup = function (opts)
   {console.log(this, "setup");
      // Overwrite options if necessary
      let self     = this,
          element  = this.element,
          slides   = this.slides,
          slidePos = this.slidePos,
          width    = this.width,
          events   = this.events,
          index    = this.index,
          browser  = this.browser,
          options  = this.options;
      if (opts != null)
      {
         for (var prop in opts)
         {
            options[prop] = opts[prop];
         }
      }

      // cache slides
      slides = element.children;
      self.length = slides.length;

      // slides length correction, minus cloned slides
      for (var i = 0; i < slides.length; i++)
      {
         if (slides[i].getAttribute('data-cloned'))
         { self.length--;}
      }

      // set continuous to false if only one slide
      if (slides.length < 2)
      {
         options.continuous = false;
      }

      // special case if two slides
      if (browser.transitions && options.continuous && slides.length < 3)
      {
         self.cloneNode(slides[0]);
         self.cloneNode(slides[1]);

         slides = element.children;
      }

      // create an array to store current positions of each slide
      slidePos = new Array(slides.length);

      // determine width of each slide
      self.width = self.container.getBoundingClientRect().width || self.container.offsetWidth;

      element.style.width = (slides.length * self.width * 2) + 'px';

      // stack elements
      var pos = slides.length;
      while (pos--)
      {
         var slide = slides[pos];

         //slide.style.width = ;
         Bd.css(slide, { width : self.width + 'px' });
         slide.setAttribute('data-index', pos);

         if (browser.transitions)
         {
            //slide.style.left = ;
            Bd.css(slide, { left : (pos * -self.width) + 'px' });
            self.move(pos, index > pos ? -this.width : (index < pos ? this.width : 0), 0);
         }
      }

      // reposition elements before and after index
      if (options.continuous && browser.transitions)
      {
         self.move(self.circle(index - 1), -self.width, 0);
         self.move(self.circle(index + 1), self.width, 0);
      }

      if (!browser.transitions)
      {
         //element.style.left = () + 'px';
         Bd.css(slide, { left : (index * -self.width) + 'px' });
      }

      self.container.style.visibility = 'visible';

      // reinitialize events
      self.detachEvents();
      self.attachEvents();
   };

   Carousel.prototype.prev = function ()
   {console.log(this, "prev");
      if (this.disabled)
      { return;}

      if (this.options.continuous)
      {
         this.slide(this.index - 1);
      }
      else if (this.index)
      {
         this.slide(this.index - 1);
      }
   };

   Carousel.prototype.runCallback = function (pos, index, dir)
   {console.log(this, "runclbk");
      if (this.options.callback)
      {
         this.options.callback(pos, index, dir);
      }
   };

   Carousel.prototype.runTransitionEnd = function (pos, index)
   {console.log(this, "runtransEnd");
      if (this.options.transitionEnd)
      {
         this.options.transitionEnd(pos, index);
      }
   };

   Carousel.prototype.circle = function (index)
   {console.log(this, "circle");
      let len = this.slides.length;
      // a simple positive modulo using slides.length
      return (len + (index % len)) % len;
   };

   Carousel.prototype.getPos = function ()
   {
      // Fix for the clone issue in the event of 2 slides
      var currentIndex = this.index;

      if (currentIndex >= this.length)
      {
         currentIndex = currentIndex - this.length;
      }

      return currentIndex;
   };

   Carousel.prototype.slide = function (to, slideSpeed)
   {console.log(this, "slide");
      // ensure to is of type 'number'
      to = typeof to !== 'number' ? Bu.pInt(to) : to;
      let self = this,
         options  = this.options,
          circle   = this.circle,
          move     = this.move,
          index    = this.index,
          width    = this.width,
          slidePos = this.slidePos,
          slides   = this.slides;

      // do nothing if already on requested slide
      if (this.index === to)
      { return;}

      if (this.options.controlPanel)
      {
         Bd.setActive(this.cpanel.children[this.getPos()], null, "active", true)
      }

      if (this.browser.transitions)
      {
         var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

         // get the actual position of the slide
         if (options.continuous)
         {
            var natural_direction = direction;
            direction = -slidePos[circle(to)] / width;

            // if going forward but to < index, use to = slides.length + to
            // if going backward but to > index, use to = -slides.length + to
            if (direction !== natural_direction)
            {
               to = -direction * slides.length + to;
            }

         }

         var diff = Math.abs(index - to) - 1;

         // move all the slides between index and to in the right direction
         while (diff--)
         {
            move(circle((to > index ? to : index) - diff - 1), width * direction, 0);
         }

         to = circle(to);

         move(index, width * direction, slideSpeed || speed);
         move(to, 0, slideSpeed || speed);

         if (options.continuous)
         { // we need to get the next in place
            move(circle(to - direction), -(width * direction), 0);
         }

      }
      else
      {

         to = circle(to);
         animate(index * -width, to * -width, slideSpeed || speed);
         // no fallback for a circular continuous if the browser does not accept transitions
      }

      index = to;
      this.offloadFn(function ()
                {
                   self.runCallback(getPos(), slides[index], direction);
                });

   };

   Carousel.prototype.move = function (index, dist, speed)
   {console.log(this, "move");
      this.translate(index, dist, speed);
      this.slidePos[index] = dist;
   };

   Carousel.prototype.translate = function (index, dist, speed)
   {console.log(this, "translate");

      var slide = this.slides[index];
      var style = slide && slide.style;

      if (!style) return;

      style.webkitTransitionDuration =
         style.MozTransitionDuration =
            style.msTransitionDuration =
               style.OTransitionDuration =
                  style.transitionDuration = speed + 'ms';

      style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
      style.msTransform =
         style.MozTransform =
            style.OTransform = 'translateX(' + dist + 'px)';

   };

   Carousel.prototype.animate = function (from, to, speed)
   {console.log(this, "animate");
      let self = this;
      // if not an animation, just reposition
      if (!speed)
      {
         this.element.style.left = to + 'px';
         return;
      }

      var start = +new Date();

      var timer = setInterval(function ()
                              {
                                 var timeElap = +new Date() - start;

                                 if (timeElap > speed)
                                 {

                                    self.element.style.left = to + 'px';

                                    if (self.delay || self.options.autoRestart){
                                       self.restart();}

                                    self.runTransitionEnd(self.getPos(), self.slides[index]);

                                    clearInterval(timer);

                                    return;
                                 }

                                 self.element.style.left = (((to - from) * (Math.floor((timeElap / speed) * 100) / 100)) + from) + 'px';
                              }, 4);

   };

   Carousel.prototype.begin = function ()
   {console.log(this, "begin");
      let self = this;
      self.delay = this.options.auto;
      if (this.delay)
      { self.interval = setTimeout(self.next, self.delay);}
      console.log(this, "begin");
   };



   Carousel.prototype.stop = function ()
   {console.log(this, "stp");
      this.delay = 0;
      clearTimeout(this.interval);
   };

   Carousel.prototype.restart = function ()
   {console.log(this, "rstrt");
      this.stop();
      this.begin();
   };

   Carousel.prototype.disable = function ()
   {console.log(this, "disable");
      this.stop();
      this.disabled = true;
   };

   Carousel.prototype.enable = function ()
   {console.log(this, "enable");
      this.disabled = false;
      this.restart();
   };

   Carousel.prototype.isMouseEvent = function (e)
   {console.log(this, "isMausevt");
      return /^mouse/.test(e.type);
   };

   Carousel.prototype.kill = function ()
   {console.log(this, "kill");
      // cancel slideshow
      this.stop();

      // remove inline styles
      this.container.style.visibility = '';

      // reset element
      this.element.style.width = '';
      this.element.style.left = '';

      // reset slides
      var pos = this.slides.length;
      while (pos--)
      {

         if (this.browser.transitions)
         {
            this.translate(pos, 0, 0);
         }

         var slide = this.slides[pos];

         // if the slide is tagged as clone, remove it
         if (slide.getAttribute('data-cloned'))
         {
            var _parent = slide.parentElement;
            _parent.removeChild(slide);
         }

         // remove styles
         slide.style.width = '';
         slide.style.left = '';

         slide.style.webkitTransitionDuration =
            slide.style.MozTransitionDuration =
               slide.style.msTransitionDuration =
                  slide.style.OTransitionDuration =
                     slide.style.transitionDuration = '';

         slide.style.webkitTransform =
            slide.style.msTransform =
               slide.style.MozTransform =
                  slide.style.OTransform = '';

         // remove custom attributes (?)
         // slide.removeAttribute('data-index');
      }

      // remove all events
      this.detachEvents();

      // remove throttled function timeout
      this.throttledSetup.cancel();
   };

   Carousel.prototype.createControlPanel = function ()
   {console.log(this, "cr8ctrlpnl");
      let self = this,
          nodesCount = this.length;

      this.cpanel = Bd.createEl("div",
                                {
                                   className : "control rltv left-ctr btm10p zi10 flex-cols_" + nodesCount +
                                               " _iblk rc15 pd5 pdlr20 h30 bdr w150 ctr m0a"
                                });

      for (let i = 0; i < nodesCount; i++)
      {
         this.cpanel.appendChild(Bd.createEl("span", { className : "rc50p h15 w15 bdr" }))
      }

      this.element.parentElement.appendChild(this.cpanel);
      this.cpanel.addEventListener("click", function (e)
      {
         self.slide(Bd.indexOf(self.cpanel, e.target));
      });
   };

   //class Carousel{
   //   constructor(){
   //
   //   }
   //}

   Bee.Widget = Bee.Widget || {};
   //public methods object
   Bee.Widget.Carousel = function (container, config)
   {  console.log(this, ".Widget.Carousel");
      let ca = new Carousel(container, config);
   };

   //going public whoop! whoop! lol
   //return Bee.Widget.Carousel;
});
