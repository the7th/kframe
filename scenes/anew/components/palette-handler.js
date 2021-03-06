AFRAME.registerComponent('palette-handler', {
  init: function () {
    var grabSlot = this.el.querySelector('#grabSlot');

    this.el.addEventListener('click', function (evt) {
      var targetEl = evt.detail.intersectedEl;

      if (targetEl.getAttribute('mixin').indexOf('primitive') !== -1) {
        grabSlot.setAttribute('geometry', targetEl.getAttribute('geometry'), true);
        grabSlot.setAttribute('scale', {x: 3, y: 3, z: 3});
      }

      if (targetEl.getAttribute('mixin').indexOf('color') !== -1) {
        grabSlot.setAttribute('material', targetEl.getAttribute('material'), true);
      }
    });
  }
});
