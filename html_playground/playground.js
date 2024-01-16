const $ = (s) => {
  try { return document.querySelector(s); } catch(err) { return document.createElement(s); }
};

$.props = {
  evt = (evt, callback, s=null) => {
    if (s === null) s = window; else {
      s = $(s);
    }
    
    s.addEventListener(evt, callback);
  }
};

$.props.evt()