define(function(require){function _setConfig(config){_configEDI=config}function _init(cb){edi.iniciar(_configEDI),ARR_TAREFAS[salve_a_floresta].resolve(cb)}var salve_a_floresta=addTarefa(),edi=require("../lib/edi"),_configEDI=null;return{objetivos:[],setConfig:_setConfig,start:_init}});