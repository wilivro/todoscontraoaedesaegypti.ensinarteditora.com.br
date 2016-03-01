define(function(require){function _setConfig(config){_configEDI=config}function _init(bt_botoes,textos,callback,callbackFinal,settings){edi.iniciar(_configEDI),peca=this;var config={width:200,height:50,left:5,top:260,linhas:1,textAlign:"left",margin:"5px 5px 5px 5px",padding:"0 5px",display:"table",lineHeight:"16px",finalizar:!0,widthTexto:621,heightTexto:130,topTexto:100,leftTexto:10,numeracao:!0,ficaCertas:!0};settings&&$.extend(config,settings);var index=0,telaAtual=edi.util.getURL("quest")-1,colunas=(edi.util.getURL("quest")-1,Math.ceil(bt_botoes[telaAtual].length/config.linhas)),animacaoAsterico=function(t){var pulsar=function(){t.transition({scale:1.2},1e3,function(){t.transition({scale:1},1e3,pulsar)})};t.transition({scale:1,rotate:"0deg"},1e3,pulsar)},eventoBotao=function(){$(this).unbind("click");var _this=$(this).attr("id");peca.objetivos.length&&edi.objetivos.pop(),peca.objetivos.pop();var botaoTodo=$("#"+_this+",#"+_this),$botaoAsterisco=$(this).find("i").parent();$(this).find("i").remove();var correta=$(this).data("correta");licao.config.WIQUADRO&&Wiquadro.api.addInteration(6,$(this).attr("id"),null,correta);var cor=correta?"#0060B6":"#F00";botaoTodo.transition({color:"#FFF",backgroundColor:cor,cursor:"default"},500),$(this).find(".bold").transition({color:"#FFF",cursor:"default"},500);var img;correta?(img="../../canvas/objetos/animaCerto",edi.objetivos.unshift(1),require([img],function(canvas){var mascote=new canvas.animaCerto({cor:"#FFF"});mascote.obj.css({top:"4px",left:"17px"}).appendTo($botaoAsterisco),mascote.play()}),edi.acertos.push(_this),callback&&callback(!0)):(edi.objetivos.unshift(2),img="../../canvas/objetos/animaErrado",require([img],function(canvas){var mascote=new canvas.animaErrado({cor:"#FFF"});mascote.obj.css({top:"10px",left:"20px"}).appendTo($botaoAsterisco),mascote.play()}),callback&&callback(!1)),!peca.objetivos.length&&edi.objetivos.indexOf(2)>=0?(edi.objetivos=[2],$(".botao").unbind("click"),$(".botao").css("cursor","default")):!peca.objetivos.length&&edi.objetivos.indexOf(2)<0&&($(".botao").unbind("click"),$(".botao").css("cursor","default"),callbackFinal&&callbackFinal()),config.finalizar&&edi.finalizar()};ARR_TAREFAS[tarefaAlterBtn].resolve();var $circuloQuestao=$("<div>");config.numeracao&&$circuloQuestao.css({position:"absolute",left:"50%",top:"50%",display:"inline-block",marginTop:"-30px",marginLeft:"-30px",height:50,width:50,textAlign:"center",lineHeight:"50px",fontSize:30,fontWeight:"bold",color:"rgb(128, 126, 126)",border:"5px solid rgb(192, 207, 216)",opacity:.8,borderRadius:50}).html(edi.util.getURL("quest"));var $containerAlter=$("<section>");$containerAlter.addClass("containerAlter").attr("data-edi","alternativa_botao_asterisco").css({position:"absolute",left:config.left,top:config.top,display:config.display}).appendTo("#conteudo");var $containerTexto=$("<section>");$containerTexto.addClass("containerTexto arredondado").attr("data-edi","TextoAlternativa").css({position:"absolute",left:config.leftTexto,top:config.topTexto,height:config.heightTexto,width:config.widthTexto,border:"2px solid rgb(220, 220, 220)",backgroundColor:"#FFF"}).appendTo("#conteudo").peBalao({scaleX:2,scaleY:2,borda:"rgb(220, 220, 220)",top:-23,left:20});var $containerQuest=$("<div>");$containerQuest.css({position:"relative",width:.2*config.widthTexto-1,display:"block",textAlign:"center","float":"left",height:config.heightTexto,borderRight:"1px solid rgba(153,153,153,0.5)"}).append($circuloQuestao).appendTo($containerTexto);var $containerTopico=$("<div>");$containerTopico.css({position:"relative",width:.1*config.widthTexto,display:"block",textAlign:"center","float":"left",height:config.heightTexto}).appendTo($containerTexto);var $containerFrase=$("<div>");$containerFrase.css({position:"relative",width:.7*config.widthTexto,display:"block",textAlign:"center","float":"left",height:config.heightTexto}).appendTo($containerTexto);for(var i=0;i<textos[telaAtual].length;i++){var $lugarTopico=$("<div>");$lugarTopico.attr("id","topico"+i).css({position:"relative",display:"block",borderBottom:i!=textos[telaAtual].length-1?"1px solid rgba(153,153,153,0.5)":""}).appendTo($containerTopico);var $topico=$("<p>");$topico.css({position:"relative",width:$containerTopico.width(),display:"table-cell",verticalAlign:"middle",fontSize:24,fontWeight:"bold",color:"#AAA",height:$containerTexto.height()/textos[telaAtual].length+"px"}).html(textos[telaAtual][i].topico).appendTo($lugarTopico);var $lugarFrase=$("<div>");$lugarFrase.attr("id","frase"+i).css({position:"relative",borderBottom:i!=textos[telaAtual].length-1?"1px solid rgba(153,153,153,0.5)":""}).appendTo($containerFrase);var $frase=$("<p>");$frase.css({position:"relative",width:$containerFrase.width(),display:"table-cell",verticalAlign:"middle",height:$containerTexto.height()/textos[telaAtual].length+"px",lineHeight:config.lineHeight,textAlign:config.textAlign,padding:"0px 5px"}).html(textos[telaAtual][i].texto).appendTo($lugarFrase)}for(var x=0;x<config.linhas;x++)for(var $alterBtnCols=$("<div>").css({width:"auto",height:"auto"}).appendTo($containerAlter),j=0;colunas>j&&bt_botoes[telaAtual][index];j++){var $botoes=$("<div>");$botoes.addClass("botao boxBranco").attr("id","botao"+index).attr("data-correta",bt_botoes[telaAtual][index].dataCorreta).css({position:"relative",display:"inline-block",cursor:"pointer",margin:config.margin,height:config.height,width:config.width}).click(eventoBotao).appendTo($alterBtnCols),bt_botoes[telaAtual][index].dataCorreta&&(edi.objetivos.push(0),this.objetivos.push(0));var $bt_asterisco=$("<div>");$bt_asterisco.addClass("asterisco bt_asterisco"+index).css({position:"relative",display:"table-cell",verticalAlign:"middle",textAlign:"center",fontSize:"25px",width:"30%",height:config.height,color:"#9C0"}).appendTo($botoes);var $asteriscoAnimado=$("<i>");$asteriscoAnimado.addClass("fa fa-asterisk iconeAsterisco").attr("id","asterisco"+index).transition({scale:0,rotate:"360deg"}).appendTo($bt_asterisco);var $bt_frase=$("<p>");$bt_frase.addClass("bold").css({position:"relative",width:$botoes.width(),display:"table-cell",verticalAlign:"middle",fontSize:"80%",textAlign:"center",color:"#999",height:$botoes.height()/textos[telaAtual].length+"px"}).html(bt_botoes[telaAtual][index]?bt_botoes[telaAtual][index].texto:"null").appendTo($botoes),index++,animacaoAsterico($asteriscoAnimado)}return ARR_TAREFAS[tarefaAlterBtn].resolve(),{container:$containerAlter}}var tarefaAlterBtn=addTarefa(),edi=require("../lib/edi"),_configEDI=null;return{objetivos:[],setConfig:_setConfig,alternativa_botao_asterisco:_init}});