/*!
 * 
 * availity-uikit v2.0.0-beta.7 (07/19/2016)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("availity-uikit", [], factory);
	else if(typeof exports === 'object')
		exports["availity-uikit"] = factory();
	else
		root["availity-uikit"] = factory();
})(this, function() {
return webpackJsonpavaility_uikit([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';var _jquery=__webpack_require__(2);var _jquery2=_interopRequireDefault(_jquery);var _chart=__webpack_require__(4);var _chart2=_interopRequireDefault(_chart);__webpack_require__(48);__webpack_require__(49);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_jquery2.default)('[data-toggle=\"popover\"]').popover({html:true});(0,_jquery2.default)('[data-toggle=\"tooltip\"]').tooltip();(0,_jquery2.default)('.docs-example').each(function(){var btn='\\n    <hr class=\"divider-lg\"/>\\n    <div class=\"btn-toolbar\">\\n      <button class=\"btn btn-ghost btn-sm\" data-toggle=\"code\">\\n        View Code <i class=\"icon icon-code\"></i>\\n      </button>\\n    </div>';(0,_jquery2.default)(this).append((0,_jquery2.default)(btn));});(0,_jquery2.default)('[data-toggle=\"code\"]').click(function(e){e.preventDefault();var target=(0,_jquery2.default)(this).parents('.docs-example').next('.language-markup');if(target.is(':visible')){target.velocity('slideUp',{duration:200});}else{target.velocity('fadeIn',{duration:300,display:'block'});}});// filter popover\n(0,_jquery2.default)('[data-toggle=\"filter\"]').popover({html:true,placement:(0,_jquery2.default)(undefined).attr('data-placement'),trigger:'click',content:function content(){var target=(0,_jquery2.default)(this).attr('data-target');var $target=(0,_jquery2.default)(target);return $target.html();}});(0,_jquery2.default)('.dropdown-menu a[data-toggle=\"tab\"]').click(function(e){e.stopPropagation();(0,_jquery2.default)(this).tab('show');});(0,_jquery2.default)('#datetimepicker6').datepicker({autoclose:true,clearBtn:true,todayBtn:true,todayHighlight:true,format:'mm/dd/yyyy'});// Select2\n(0,_jquery2.default)('#single-select, #multiple-select').select2({placeholder:'Select a State',allowClear:true}).on('select2-open',function(){var $this=(0,_jquery2.default)(this);if($this.parents('[class*=\"has-\"]').length){// get all CSS-classes from the element where we found \"has-*\" and collect them in an array\nvar classNames=$this.parents('[class*=\"has-\"]')[0].className.split(/\\s+/);// go through the class names, find \"has-\"\nfor(var i=0;i<classNames.length;++i){if(classNames[i].match('has-')){(0,_jquery2.default)('#select2-drop').addClass(classNames[i]);}}}});(0,_jquery2.default)('.select2, .select2-multiple').select2({allowClear:true});// DO NOT USE THIS IN PRODUCTION. DEMO PURPOSES ONLY.\nsetInterval(function(){var indicators=(0,_jquery2.default)('.loading-indicator');for(var i=0;i<indicators.length;i++){(0,_jquery2.default)(indicators[i]).find('.loading-bullet').velocity('transition.slideRightIn',{stagger:250}).delay(750).velocity({opacity:0},500);}},2000);var data={labels:['January','February','March','April','May','June','July'],datasets:[{label:'My First dataset',fillColor:'rgba(0,154,87,0.5)',strokeColor:'rgba(0,154,87,0.8)',highlightFill:'rgba(0,154,87,0.75)',highlightStroke:'rgba(0,154,87,1)',data:[65,59,80,81,56,55,40]},{label:'My Second dataset',fillColor:'rgba(0,147,232,0.5)',strokeColor:'rgba(0,147,232,0.8)',highlightFill:'rgba(0,147,232,0.75)',highlightStroke:'rgba(0,147,232,1)',data:[28,48,40,19,86,27,90]},{label:'My Third dataset',fillColor:'rgba(212,208,8,0.5)',strokeColor:'rgba(212,208,8,0.8)',highlightFill:'rgba(212,208,8,0.75)',highlightStroke:'rgba(212,208,8,1)',data:[18,98,19,55,20,34,70]}]};var $chart1=(0,_jquery2.default)('#guideChart1');if($chart1[0]){var ctx=$chart1[0].getContext('2d');/* eslint new-cap: 0 */new _chart2.default(ctx).Bar(data,{responsive:true,maintainAspectRatio:false});}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kb2NzL2pzL2luZGV4LmpzPzllMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcyc7XG5cbmltcG9ydCAnLi4vbGVzcy9kb2NzLmxlc3MnO1xuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLmNzcyc7XG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKHtcbiAgaHRtbDogdHJ1ZVxufSk7XG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbiQoJy5kb2NzLWV4YW1wbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGJ0biA9IGBcbiAgICA8aHIgY2xhc3M9XCJkaXZpZGVyLWxnXCIvPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZ2hvc3QgYnRuLXNtXCIgZGF0YS10b2dnbGU9XCJjb2RlXCI+XG4gICAgICAgIFZpZXcgQ29kZSA8aSBjbGFzcz1cImljb24gaWNvbi1jb2RlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+YDtcblxuICAkKHRoaXMpLmFwcGVuZCgkKGJ0bikpO1xuXG59KTtcblxuJCgnW2RhdGEtdG9nZ2xlPVwiY29kZVwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnRzKCcuZG9jcy1leGFtcGxlJykubmV4dCgnLmxhbmd1YWdlLW1hcmt1cCcpO1xuXG4gIGlmICh0YXJnZXQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICB0YXJnZXQudmVsb2NpdHkoJ3NsaWRlVXAnLCB7IGR1cmF0aW9uOiAyMDAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnZlbG9jaXR5KCdmYWRlSW4nLCB7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICB9XG5cbn0pO1xuXG4vLyBmaWx0ZXIgcG9wb3ZlclxuJCgnW2RhdGEtdG9nZ2xlPVwiZmlsdGVyXCJdJykucG9wb3Zlcih7XG4gIGh0bWw6IHRydWUsXG4gIHBsYWNlbWVudDogJCh0aGlzKS5hdHRyKCdkYXRhLXBsYWNlbWVudCcpLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50KCkge1xuICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgIHJldHVybiAkdGFyZ2V0Lmh0bWwoKTtcbiAgfVxufSk7XG5cbiQoJy5kcm9wZG93bi1tZW51IGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICQodGhpcykudGFiKCdzaG93Jyk7XG59KTtcblxuJCgnI2RhdGV0aW1lcGlja2VyNicpLmRhdGVwaWNrZXIoe1xuICBhdXRvY2xvc2U6IHRydWUsXG4gIGNsZWFyQnRuOiB0cnVlLFxuICB0b2RheUJ0bjogdHJ1ZSxcbiAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXG4gIGZvcm1hdDogJ21tL2RkL3l5eXknXG59KTtcblxuLy8gU2VsZWN0MlxuXG4kKCcjc2luZ2xlLXNlbGVjdCwgI211bHRpcGxlLXNlbGVjdCcpLnNlbGVjdDIoe1xuICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhIFN0YXRlJyxcbiAgYWxsb3dDbGVhcjogdHJ1ZVxufSkub24oJ3NlbGVjdDItb3BlbicsIGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgaWYgKCR0aGlzLnBhcmVudHMoJ1tjbGFzcyo9XCJoYXMtXCJdJykubGVuZ3RoKSB7XG5cbiAgICAvLyBnZXQgYWxsIENTUy1jbGFzc2VzIGZyb20gdGhlIGVsZW1lbnQgd2hlcmUgd2UgZm91bmQgXCJoYXMtKlwiIGFuZCBjb2xsZWN0IHRoZW0gaW4gYW4gYXJyYXlcbiAgICBjb25zdCBjbGFzc05hbWVzID0gJHRoaXMucGFyZW50cygnW2NsYXNzKj1cImhhcy1cIl0nKVswXS5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcblxuICAgIC8vIGdvIHRocm91Z2ggdGhlIGNsYXNzIG5hbWVzLCBmaW5kIFwiaGFzLVwiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoY2xhc3NOYW1lc1tpXS5tYXRjaCgnaGFzLScpKSB7XG4gICAgICAgICQoJyNzZWxlY3QyLWRyb3AnKS5hZGRDbGFzcyhjbGFzc05hbWVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4kKCcuc2VsZWN0MiwgLnNlbGVjdDItbXVsdGlwbGUnKS5zZWxlY3QyKHtcbiAgYWxsb3dDbGVhcjogdHJ1ZVxufSk7XG5cbi8vIERPIE5PVCBVU0UgVEhJUyBJTiBQUk9EVUNUSU9OLiBERU1PIFBVUlBPU0VTIE9OTFkuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvbnN0IGluZGljYXRvcnMgPSAkKCcubG9hZGluZy1pbmRpY2F0b3InKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgJChpbmRpY2F0b3JzW2ldKS5maW5kKCcubG9hZGluZy1idWxsZXQnKVxuICAgICAgLnZlbG9jaXR5KCd0cmFuc2l0aW9uLnNsaWRlUmlnaHRJbicsIHsgc3RhZ2dlcjogMjUwIH0pXG4gICAgICAuZGVsYXkoNzUwKVxuICAgICAgLnZlbG9jaXR5KHsgb3BhY2l0eTogMCB9LCA1MDApO1xuICB9XG59LCAyMDAwKTtcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXG4gICAgICBmaWxsQ29sb3I6ICdyZ2JhKDAsMTU0LDg3LDAuNSknLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMTU0LDg3LDAuOCknLFxuICAgICAgaGlnaGxpZ2h0RmlsbDogJ3JnYmEoMCwxNTQsODcsMC43NSknLFxuICAgICAgaGlnaGxpZ2h0U3Ryb2tlOiAncmdiYSgwLDE1NCw4NywxKScsXG4gICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ015IFNlY29uZCBkYXRhc2V0JyxcbiAgICAgIGZpbGxDb2xvcjogJ3JnYmEoMCwxNDcsMjMyLDAuNSknLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMTQ3LDIzMiwwLjgpJyxcbiAgICAgIGhpZ2hsaWdodEZpbGw6ICdyZ2JhKDAsMTQ3LDIzMiwwLjc1KScsXG4gICAgICBoaWdobGlnaHRTdHJva2U6ICdyZ2JhKDAsMTQ3LDIzMiwxKScsXG4gICAgICBkYXRhOiBbMjgsIDQ4LCA0MCwgMTksIDg2LCAyNywgOTBdXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ015IFRoaXJkIGRhdGFzZXQnLFxuICAgICAgZmlsbENvbG9yOiAncmdiYSgyMTIsMjA4LDgsMC41KScsXG4gICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMjEyLDIwOCw4LDAuOCknLFxuICAgICAgaGlnaGxpZ2h0RmlsbDogJ3JnYmEoMjEyLDIwOCw4LDAuNzUpJyxcbiAgICAgIGhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoMjEyLDIwOCw4LDEpJyxcbiAgICAgIGRhdGE6IFsxOCwgOTgsIDE5LCA1NSwgMjAsIDM0LCA3MF1cbiAgICB9XG4gIF1cbn07XG5cbmNvbnN0ICRjaGFydDEgPSAkKCcjZ3VpZGVDaGFydDEnKTtcbmlmICgkY2hhcnQxWzBdKSB7XG4gIGNvbnN0IGN0eCA9ICRjaGFydDFbMF0uZ2V0Q29udGV4dCgnMmQnKTtcbiAgLyogZXNsaW50IG5ldy1jYXA6IDAgKi9cbiAgbmV3IENoYXJ0KGN0eCkuQmFyKGRhdGEsIHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlXG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZG9jcy9qcy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUE0Q0E7QUEwQkE7QUFTQTtBQUdBO0FBYUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 48:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2xlc3MvZG9jcy5sZXNzPzYxMWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZG9jcy9sZXNzL2RvY3MubGVzc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 49:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzPzdmZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmltYXRlLmNzcy9hbmltYXRlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})
});
;