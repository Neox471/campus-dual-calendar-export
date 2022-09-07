// inject content.js -- method of injecting has changed due to upgrading to manifest v3
(() => {
    var injectScript = document.createElement('script');
    injectScript.src = chrome.runtime.getURL('content.js');
    injectScript.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(injectScript);
})();
