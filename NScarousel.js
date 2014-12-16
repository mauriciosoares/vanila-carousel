(function(root) {
  var NScarousel = function(container, configs) {
    var configs = configs || {};

    // set common variables
    this.container = document.querySelector(container);
    this.scrollable = this.container.getElementsByTagName('ul')[0];

    this.configs = {
      delay: configs.delay || '1s'
    };

    this.initialize();

    return this;
  };

  NScarousel.prototype.initialize = function() {
    this.setStyles();
  };

  NScarousel.prototype.setStyles = function() {
    // set common styles to scrollable content
    this.scrollable.style.width = '50000px'
    this.scrollable.style.position = 'relative'
    this.scrollable.style.transition = this.configs.delay
    this.scrollable.style.left = '0'
  };

  NScarousel.prototype.next = function(e) {
    if(e) e.preventDefault();

    var clone = this.scrollable.children[0].cloneNode(true);
    this.scrollable.appendChild(clone);

    this.animate('-');
    return this;
  };

  NScarousel.prototype.animate = function(direction) {
    this.scrollable.style.left = direction + '50px';
  };

  root.NScarousel = NScarousel;
} (this))
