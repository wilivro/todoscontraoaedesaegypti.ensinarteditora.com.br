define(function(require){function _setConfig(config){_configEDI=config}function _init(alternativas,callBack,callBackFinal,settings){edi.iniciar(_configEDI);var peca=this,condicao=!0,config={posx:150,posy:80,altura:300,largura:670,aleatorio:!1,tamanhoBoxTexto:250,tamanhoBox:30,tamanhoFonteTexto:14,marginBtns:10,tamanhoFonteLetra:20};settings&&$.extend(config,settings),config.aleatorio&&alternativas.sort(function(){return.5-Math.random()});var finalizar=function(){0===peca.objetivos.length&&(condicao&&edi.finalizar(_configEDI),condicao=!1)},addCliqueCerto=function(_this,divAppend){_this.click(function(){var boxResultado=$(this).parent().find(".vf-resultado"),icone=$("<div>").css({position:"relative",left:"-320px",top:"-60px",zIndex:"1",width:554,height:149,background:'url("../wilib/img/svg/txt_certo.svg") 0 0 no-repeat',backgroundSize:"100% 100%"}).appendTo(boxResultado).animate({width:110,height:30,top:6,left:-30},500,function(){icone.css("z-index","0"),finalizar()});edi.objetivos.pop(),peca.objetivos.pop(),edi.objetivos.unshift(1),callBack&&callBack(!0),licao.config.WIQUADRO&&Wiquadro.api.addInteration(6,$(this).attr("id"),null,"T")})},addCliqueErrado=function(_this,divAppend){_this.click(function(){var boxResultado=$(this).parent().find(".vf-resultado"),icone=$("<div>").css({position:"relative",left:"-320px",top:"-60px",zIndex:"1",width:554,height:277,background:'transparent url("../wilib/img/svg/txt_errado.svg") 0 0 no-repeat',backgroundSize:"100% 100%"}).appendTo(boxResultado).animate({width:110,height:40,top:2,left:-30},500,function(){icone.css("z-index","0"),finalizar()});edi.objetivos.pop(),peca.objetivos.pop(),edi.objetivos.unshift(2),callBack&&callBack(!1),licao.config.WIQUADRO&&Wiquadro.api.addInteration(6,$(this).attr("id"),null,"F")})},alternativa_div=$("<div>").attr("data-edi","alternativa").css("position","absolute").css("top",config.posy).css("left",config.posx).css("height",config.altura).css("width",config.largura).appendTo($("#conteudo"));for(var i in alternativas){var alternativa_section=$("<section>").addClass("vf-section").css({display:"flex",marginBottom:config.marginBtns+"px"}).appendTo(alternativa_div),textoBox=$("<div>").css({display:"inline-block",marginRight:"10px",padding:"10px",width:config.tamanhoBoxTexto+"pt",height:config.tamanhoBox+"pt",position:"relative",fontSize:config.tamanhoFonteTexto+"px",border:"1px solid rgb(220,220,220)",borderRadius:"10px"}).appendTo(alternativa_section),alternativa_box=$("<div>").css({borderColor:"rgb(199, 214, 223)",borderWidth:"3px",borderStyle:"dashed",color:"#999","float":"left",display:"inline-block",height:"40pt",width:"90pt",borderRadius:"10px",margin:"0 1px 2px 0",backgroundColor:"#FFF"}).attr("id","alternativa_"+i).addClass("vf-resposta").css("position","relative").appendTo(alternativa_section),textoP=($("<div>").addClass("vf-resultado").css({color:"#999","float":"left",margin:"5px 0 0 35px"}).appendTo(alternativa_box),$("<div>").css({position:"absolute",top:"50%",display:"table-cell",verticalAlign:"middle"}).appendTo(textoBox)),textoSpan=$("<div>").css({position:"relative"}).html(alternativas[i].alternativa).appendTo(textoP);textoSpan.css({width:"auto",top:"-"+textoSpan.height()/2+"px"}),alternativas[i].correta?(edi.objetivos.push(0),peca.objetivos.push(0),addCliqueCerto(alternativa_box)):addCliqueErrado(alternativa_box)}$(".vf-section .vf-resposta").css("cursor","pointer").click(function(){$(this).parent().find(".vf-resposta").unbind("mouseenter").unbind("mouseleave").unbind("click").css({backgroundColor:"#FFF",cursor:"default"}),edi.objetivos.indexOf(0)<0&&$(".vf-resposta").unbind("mouseenter").unbind("mouseleave").unbind("click").css({cursor:"default"}),!peca.objetivos.length&&edi.objetivos.indexOf(2)>=0?(edi.objetivos=[2],callBackFinal&&callBackFinal(!1)):!peca.objetivos.length&&edi.objetivos.indexOf(2)<0&&callBackFinal&&callBackFinal(!0)}).mouseleave(function(){$(this).css({backgroundColor:"#FFF",fontSize:config.tamanhoFonte+"pt",color:"#999"})}),ARR_TAREFAS[tarefaCarimbo].resolve()}var tarefaCarimbo=addTarefa(),edi=require("../lib/edi"),_configEDI=null;return{objetivos:[],setConfig:_setConfig,alternativa_carimbo:_init}});