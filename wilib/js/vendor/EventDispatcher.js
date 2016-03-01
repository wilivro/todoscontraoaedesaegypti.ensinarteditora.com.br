this.createjs=this.createjs||{},function(){var EventDispatcher=function(){this.initialize()},p=EventDispatcher.prototype;EventDispatcher.initialize=function(target){target.addEventListener=p.addEventListener,target.removeEventListener=p.removeEventListener,target.removeAllEventListeners=p.removeAllEventListeners,target.hasEventListener=p.hasEventListener,target.dispatchEvent=p.dispatchEvent},p._listeners=null,p.initialize=function(){},p.addEventListener=function(type,listener){var listeners=this._listeners;listeners?this.removeEventListener(type,listener):listeners=this._listeners={};var arr=listeners[type];return arr||(arr=listeners[type]=[]),arr.push(listener),listener},p.removeEventListener=function(type,listener){var listeners=this._listeners;if(listeners){var arr=listeners[type];if(arr)for(var i=0,l=arr.length;l>i;i++)if(arr[i]==listener){1==l?delete listeners[type]:arr.splice(i,1);break}}},p.removeAllEventListeners=function(type){type?this._listeners&&delete this._listeners[type]:this._listeners=null},p.dispatchEvent=function(eventObj,target){var ret=!1,listeners=this._listeners;if(eventObj&&listeners){"string"==typeof eventObj&&(eventObj={type:eventObj}),eventObj.target=target||this;var arr=listeners[eventObj.type];if(!arr)return ret;arr=arr.slice();for(var i=0,l=arr.length;l>i;i++){var o=arr[i];o instanceof Function?ret=ret||o.apply(null,[eventObj]):o.handleEvent&&(ret=ret||o.handleEvent(eventObj))}}return!!ret},p.hasEventListener=function(type){var listeners=this._listeners;return!(!listeners||!listeners[type])},p.toString=function(){return"[EventDispatcher]"},createjs.EventDispatcher=EventDispatcher}();