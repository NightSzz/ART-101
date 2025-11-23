// wander.js
// Controls: start/stop wandering of creatures inside #creature-list

let _wanderTimer = null;
const WANDER_INTERVAL = 800; // ms between steps
const WANDER_STEP = 60; // max pixels to move per step

function wanderStep() {
  const $container = $('#creature-list');
  const cw = $container.width();
  const ch = $container.height();

  $container.find('.creature').each(function () {
    const $c = $(this);
    const ew = $c.outerWidth();
    const eh = $c.outerHeight();

    const curLeft = parseFloat($c.css('left')) || 0;
    const curTop = parseFloat($c.css('top')) || 0;

    // random small delta
    const dx = (Math.random() * 2 - 1) * WANDER_STEP;
    const dy = (Math.random() * 2 - 1) * WANDER_STEP;

    let newLeft = curLeft + dx;
    let newTop = curTop + dy;

    // clamp inside container
    newLeft = Math.max(0, Math.min(newLeft, cw - ew));
    newTop = Math.max(0, Math.min(newTop, ch - eh));

    // animate to new position
    $c.stop(true).animate({ left: newLeft + 'px', top: newTop + 'px' }, WANDER_INTERVAL - 100);
  });
}

function startWandering() {
  if (_wanderTimer) return; // already running
  _wanderTimer = setInterval(wanderStep, WANDER_INTERVAL);
}

function stopWandering() {
  if (!_wanderTimer) return;
  clearInterval(_wanderTimer);
  _wanderTimer = null;
}

// wire up buttons when DOM ready
$(function () {
  $('#start-wander').on('click', startWandering);
  $('#stop-wander').on('click', stopWandering);
});
//allow creatures to wander
