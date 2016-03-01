define(function(require){"use strict";function _setConfig(config){_configEDI=config}function _init(dica,callback,settings){edi.iniciar(_configEDI);var config={fontSize:13,lineHeight:1.3,color:"#666",tempoFinalizar:3e3};settings&&$.extend(config,settings);var $dicas=$("<section>").addClass("dicas").attr("data-edi","dicas").appendTo("#conteudo"),$balao=$("<div>").addClass("dicas-balao").appendTo($dicas);$("<img>").attr({src:"../wilib/img/svg/mascote_lendo.svg",id:"mascote"}).css({width:150,position:"absolute",left:110,top:260}).appendTo($dicas),$("<div>").addClass("balao-texto").html("<p>"+dica+"</p>").css({fontSize:config.fontSize,lineHeight:config.lineHeight,color:config.color}).appendTo($balao);require(["../../canvas/objetos/animaDicas"],function(canvas){canvas.obj.css({top:48,left:40}).appendTo($balao),canvas.play()}),setTimeout(function(){edi.finalizar(),callback&&callback()},config.tempoFinalizar),ARR_TAREFAS[tarefaRevela].resolve()}var tarefaRevela=addTarefa(),edi=require("../lib/edi"),_configEDI=null;return{objetivos:[],setConfig:_setConfig,dicas:_init}});