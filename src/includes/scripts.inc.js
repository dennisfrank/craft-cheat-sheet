
GameGenie={currentContext:'{{ sampleTag }}',newContext:null,whichFilter:'',codeBlockCount:$('.field_block').length,fieldNavCount:$('li.field').length,storagePrefix:'Cheat-Sheet.'+window.location.hostname+'.',customElements:[],pageSetup:function(){document.addEventListener('keyup',GameGenie.jumpToFilter,false);$('<input type="text" value="" id="field_filter" placeholder="Find a field...">').hide().css('opacity',0).insertBefore('#groups_list').slideDown(100,function(){$(this).animate({'opacity':1},300).focus();}).on('blur',function(){$(this).removeClass('lookAtMeInput');});var storage=localStorage.getItem(GameGenie.storagePrefix+'customElements');if(storage){GameGenie.customElements=ggCE=JSON.parse(storage);}
if(storage&&ggCE.length>0){for(var i=ggCE.length-1;i>=0;i--){GameGenie.addCustomElement(ggCE[i]);}}},jumpToFilter:function(e){if($(document.activeElement).is('input[type=text]'))return;if(!e.ctrlKey&&(e.keyCode===70||e.keyCode===83||e.keyCode===191)){$('#field_filter').focus().addClass('lookAtMeInput');}else if(!e.ctrlKey&&e.keyCode===67){$('label[for=custom]').trigger('click');$('#newCustomElement input[type=text]').focus();}},checkForNoCode:function(){if($('.field_block').filter(':visible').length===0){$('#no_results').removeClass('hidden');}else{$('#no_results').addClass('hidden');}},checkForNoNav:function(){$('.group_list').each(function(){var visibleCount=$(this).find('li').filter(':visible').length;groupInput=$(this).parents('.nav_group').find('input');if(visibleCount===0||visibleCount===undefined){groupInput.prop('checked',false);}else{groupInput.prop('checked',true);}});},addCustomElement:function(elementName){$('#custom_element_list').append('<li class="custom_element"><a href="#" class="context" data-element-name="'+elementName+'" data-tag="'+elementName+'">'+elementName+'<span class="remove_custom">&times;</span></a></li>');this.addElementToStorage(elementName);},removeCustomElement:function(obj){var parent=obj.parents('.custom_element');parent.animate({width:0},'fast',function(){$(this).remove();});this.removeElementFromStorage(parent.find('a').attr('data-element-name'));},setLocalStorage:function(key,value){key=this.storagePrefix+key;value=(typeof value==='object')?JSON.stringify(value):value;localStorage.setItem(key,value);},addElementToStorage:function(elementName){var index=GameGenie.customElements.indexOf(elementName);if(index>-1){return;}
GameGenie.customElements.push(elementName);GameGenie.setLocalStorage('customElements',GameGenie.customElements);},removeElementFromStorage:function(elementName){var index=GameGenie.customElements.indexOf(elementName);if(index>-1){GameGenie.customElements.splice(index,1);GameGenie.setLocalStorage('customElements',GameGenie.customElements);}},supaFilter:function(filterType,find){if(find!==''){$('#search_replacement').text(find);}else{$('#search_replacement').text('that');}
switch(filterType){case'field':this.whichFilter='field-handle';break;case'group':this.whichFilter='group';break;case'type':this.whichFilter='field-type';break;default:this.whichFilter='field-name';}
$('.field_block').not('#no_results').each(function(){var name=$(this).attr('data-'+GameGenie.whichFilter).toLowerCase();if(name.indexOf(find)===-1){$(this).fadeOut('fast',GameGenie.checkForNoCode);}else if($(this).is('visible')===false){$(this).fadeIn('fast',GameGenie.checkForNoCode);}});$('#groups_list li.field').each(function(){var name=$(this).attr('data-'+GameGenie.whichFilter).toLowerCase();if(name.indexOf(find)===-1){$(this).hide('fast',GameGenie.checkForNoNav);}else if($(this).is('visible')===false){$(this).show('fast',GameGenie.checkForNoNav);}});},};$(function(){var type,find,search;window.setTimeout(GameGenie.pageSetup,500);$('body').on('keyup','#field_filter',function(e){var search;if(e.keyCode===27){$('#field_filter').prop('value','');return GameGenie.supaFilter('field','');}else{search=$(this).prop('value').toLowerCase().replace(/\s/g,'').split(':');}
if(search.length===1){type='field';find=search[0];}else{type=search[0];find=search[1];}
GameGenie.supaFilter(type,find);});$('ul.types input[type=radio]').click(function(){if($(this).attr('checked')=='checked'){return;}else{$(this).parents('.types').find('input[checked="checked"]').attr('checked',null);$(this).attr('checked','checked');}});$('#newCustomElement').submit(function(e){e.preventDefault();var inputField=$(this).find('input[type=text]');var elementName=inputField.val().replace(/\s/g,'');GameGenie.addCustomElement(elementName);inputField.val('');});$('body').on('click','.remove_custom',function(e){e.preventDefault();GameGenie.removeCustomElement($(this));});$('body').on('click','a.context',function(e){e.preventDefault();var gg=GameGenie;var currentElem=$('a.activeContext');if(!$(this).attr('data-tag')){return false;}
gg.newContext=$(this).attr('data-tag');if(gg.newContext===gg.currentContext){return;}
{%verbatim-%}
$('section.main_body').html($('section.main_body').html().replace(new RegExp('([{%].*?)('+gg.currentContext+')(.*?[%}])','g'),'$1'+gg.newContext+'$3'));{%endverbatim-%}
$('a.context[data-tag="'+gg.currentContext+'"]').removeClass('activeContext');$('a.context[data-tag="'+gg.newContext+'"]').addClass('activeContext');gg.currentContext=gg.newContext;});});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-3994429-34','auto');ga('set','dimension1','{{ cs.version }}');ga('set','dimension2','{{ cs.groups|length }}');ga('set','dimension3','{{ cs.fields|length }}');ga('set','dimension4','{{ craft.app.version }}');ga('send','pageview');