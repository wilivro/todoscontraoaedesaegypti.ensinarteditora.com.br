!function($){for(var supportedCSS,styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "),a=0;a<toCheck.length;a++)void 0!==styles[toCheck[a]]&&(supportedCSS=toCheck[a]);var IE=eval('"v"=="\x0B"');jQuery.fn.extend({rotate:function(parameters){if(0!==this.length&&"undefined"!=typeof parameters){"number"==typeof parameters&&(parameters={angle:parameters});for(var returned=[],i=0,i0=this.length;i0>i;i++){var element=this.get(i);if(element.Wilq32&&element.Wilq32.PhotoEffect)element.Wilq32.PhotoEffect._handleRotation(parameters);else{var paramClone=$.extend(!0,{},parameters),newRotObject=new Wilq32.PhotoEffect(element,paramClone)._rootObj;returned.push($(newRotObject))}}return returned}},getRotateAngle:function(){for(var ret=[],i=0,i0=this.length;i0>i;i++){var element=this.get(i);element.Wilq32&&element.Wilq32.PhotoEffect&&(ret[i]=element.Wilq32.PhotoEffect._angle)}return ret},stopRotate:function(){for(var i=0,i0=this.length;i0>i;i++){var element=this.get(i);element.Wilq32&&element.Wilq32.PhotoEffect&&clearTimeout(element.Wilq32.PhotoEffect._timer)}}}),Wilq32=window.Wilq32||{},Wilq32.PhotoEffect=function(){return supportedCSS?function(img,parameters){img.Wilq32={PhotoEffect:this},this._img=this._rootObj=this._eventObj=img,this._handleRotation(parameters)}:function(img,parameters){if(this._img=img,this._rootObj=document.createElement("span"),this._rootObj.style.display="inline-block",this._rootObj.Wilq32={PhotoEffect:this},img.parentNode.insertBefore(this._rootObj,img),img.complete)this._Loader(parameters);else{var self=this;jQuery(this._img).bind("load",function(){self._Loader(parameters)})}}}(),Wilq32.PhotoEffect.prototype={_setupParameters:function(parameters){this._parameters=this._parameters||{},"number"!=typeof this._angle&&(this._angle=0),"number"==typeof parameters.angle&&(this._angle=parameters.angle),this._parameters.animateTo="number"==typeof parameters.animateTo?parameters.animateTo:this._angle,this._parameters.step=parameters.step||this._parameters.step||null,this._parameters.easing=parameters.easing||this._parameters.easing||function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},this._parameters.duration=parameters.duration||this._parameters.duration||1e3,this._parameters.callback=parameters.callback||this._parameters.callback||function(){},parameters.bind&&parameters.bind!=this._parameters.bind&&this._BindEvents(parameters.bind)},_handleRotation:function(parameters){this._setupParameters(parameters),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()},_BindEvents:function(events){if(events&&this._eventObj){if(this._parameters.bind){var oldEvents=this._parameters.bind;for(var a in oldEvents)oldEvents.hasOwnProperty(a)&&jQuery(this._eventObj).unbind(a,oldEvents[a])}this._parameters.bind=events;for(var a in events)events.hasOwnProperty(a)&&jQuery(this._eventObj).bind(a,events[a])}},_Loader:function(){return IE?function(parameters){var width=this._img.width,height=this._img.height;this._img.parentNode.removeChild(this._img),this._vimage=this.createVMLNode("image"),this._vimage.src=this._img.src,this._vimage.style.height=height+"px",this._vimage.style.width=width+"px",this._vimage.style.position="absolute",this._vimage.style.top="0px",this._vimage.style.left="0px",this._container=this.createVMLNode("group"),this._container.style.width=width,this._container.style.height=height,this._container.style.position="absolute",this._container.setAttribute("coordsize",width-1+","+(height-1)),this._container.appendChild(this._vimage),this._rootObj.appendChild(this._container),this._rootObj.style.position="relative",this._rootObj.style.width=width+"px",this._rootObj.style.height=height+"px",this._rootObj.setAttribute("id",this._img.getAttribute("id")),this._rootObj.className=this._img.className,this._eventObj=this._rootObj,this._handleRotation(parameters)}:function(parameters){this._rootObj.setAttribute("id",this._img.getAttribute("id")),this._rootObj.className=this._img.className,this._width=this._img.width,this._height=this._img.height,this._widthHalf=this._width/2,this._heightHalf=this._height/2;var _widthMax=Math.sqrt(this._height*this._height+this._width*this._width);this._widthAdd=_widthMax-this._width,this._heightAdd=_widthMax-this._height,this._widthAddHalf=this._widthAdd/2,this._heightAddHalf=this._heightAdd/2,this._img.parentNode.removeChild(this._img),this._aspectW=(parseInt(this._img.style.width,10)||this._width)/this._img.width,this._aspectH=(parseInt(this._img.style.height,10)||this._height)/this._img.height,this._canvas=document.createElement("canvas"),this._canvas.setAttribute("width",this._width),this._canvas.style.position="relative",this._canvas.style.left=-this._widthAddHalf+"px",this._canvas.style.top=-this._heightAddHalf+"px",this._canvas.Wilq32=this._rootObj.Wilq32,this._rootObj.appendChild(this._canvas),this._rootObj.style.width=this._width+"px",this._rootObj.style.height=this._height+"px",this._eventObj=this._canvas,this._cnv=this._canvas.getContext("2d"),this._handleRotation(parameters)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer),this._animateStartTime=+new Date,this._animateStartAngle=this._angle,this._animate()},_animate:function(){var actualTime=+new Date,checkEnd=actualTime-this._animateStartTime>this._parameters.duration;if(checkEnd&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img){var angle=this._parameters.easing(0,actualTime-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration);this._rotate(~~(10*angle)/10)}this._parameters.step&&this._parameters.step(this._angle);var self=this;this._timer=setTimeout(function(){self._animate.call(self)},10)}this._parameters.callback&&checkEnd&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var rad=Math.PI/180;return IE?function(angle){this._angle=angle,this._container.style.rotation=angle%360+"deg"}:supportedCSS?function(angle){this._angle=angle,this._img.style[supportedCSS]="rotate("+angle%360+"deg)"}:function(angle){this._angle=angle,angle=angle%360*rad,this._canvas.width=this._width+this._widthAdd,this._canvas.height=this._height+this._heightAdd,this._cnv.translate(this._widthAddHalf,this._heightAddHalf),this._cnv.translate(this._widthHalf,this._heightHalf),this._cnv.rotate(angle),this._cnv.translate(-this._widthHalf,-this._heightHalf),this._cnv.scale(this._aspectW,this._aspectH),this._cnv.drawImage(this._img,0,0)}}()},IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(tagName){return document.createElement("<rvml:"+tagName+' class="rvml">')}}catch(e){return function(tagName){return document.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())}(jQuery);