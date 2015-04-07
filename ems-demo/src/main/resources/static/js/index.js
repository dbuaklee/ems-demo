var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};
 
var states = ['ปวดท้อง/หลัง/เชิงกรานและขาหนีบ', 'แอนาฟิแล็กซิส/ปฏิกิริยาภูมิแพ้', 'สัตว์กัด', 'เลือดออก(ไร้เหตุบาดเจ็บ)', 'หายใจยากลำบาก',
  'หัวใจหยุดเต้น', 'เจ็บแน่นหน้าอก/หัวใจ', 'สำลักอุดทางหายใจ', 'เบาหวาน', 'ปวดศรีษระ/ลำคอ', 'คลุ้มคลั่ง/จิตประสาท/อารมณ์',
  'ยาเกินขนาด/ได้รับพิษ', 'มีครรภ์/คลอด/นรีเวช', 'ชัก', 'ป่วย/อ่อนเพลีย (ไม่จำเพาะ)/อื่นๆ', 'แขนขาอ่อนแรง/พูดลำบาก/ปากเบี้ยว', 'หมดสติ/ไม่ตอบสนอง/หมดสติชั่ววูบ', 'เด็ก/ทารก'
];
 



var FormView = Backbone.View.extend({
	 initialize: function(options){
		 this.resultTemplate = Handlebars.compile($("#resultTemplate").html());
		 this.basicSymtopTemplate = Handlebars.compile($("#basicSymtopTemplate").html());
		 this.step1Template = Handlebars.compile($("#step1Template").html());
		 this.step2Template = Handlebars.compile($("#step2Template").html());
		 this.step3Template = Handlebars.compile($("#step3Template").html());
		 this.step4Template = Handlebars.compile($("#step4Template").html());
		 this.step5Template = Handlebars.compile($("#step5Template").html());
	 },
	 events: {
		 "typeahead:selected #basicSymTxt" : "basicSymSelected",
		 "change input:radio[name='optionsRadiosStep1']" : "step1Selected",
		 "change input:radio[name='optionsRadiosStep2']" : "step2Selected",
		 "change input:radio[name='optionsRadiosStep3']" : "step3Selected",
		 "change input:radio[name='optionsRadiosStep4']" : "step4Selected",
		 "change input:radio[name='optionsRadiosStep5']" : "step5Selected"
	 },
	 basicSymSelected: function(e) {
		 this.$el.find('#step1').html(this.step1Template());
		 this.$el.find('#step2').empty();
		 this.$el.find('#step3').empty();
		 this.$el.find('#step4').empty();
		 this.$el.find('#step5').empty();
		 this.$el.find('#step6').empty();
		 this.$el.find('#step7').empty();
		 this.$el.find('#step8').empty();
		 this.$el.find('#step9').empty();
		 this.$el.find('#step10').empty();
	 },
	 
	 step1Selected: function(e) {
		 if($(e.currentTarget).val() == 'option1') {
			 this.$el.find('#step2').html(this.step2Template());
			 this.$el.find('#step3').empty();
			 this.$el.find('#step4').empty();
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();

		 } else {
			 this.$el.find('#step3').html(this.step3Template());
			 this.$el.find('#step2').empty();
			 this.$el.find('#step4').empty();
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 }
	 },
	 step2Selected: function(e) {
		 if($(e.currentTarget).val() == 'option1') {
			 this.$el.find('#step3').html(this.resultTemplate({color:'red', code: '5แดง1'}));
			 this.$el.find('#step4').empty();
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 } else {
			 this.$el.find('#step3').html(this.step3Template());
			 this.$el.find('#step4').empty();
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 }
	 },
	 
	 step3Selected: function(e) {
		 if($(e.currentTarget).val() == 'option1') {
			 this.$el.find('#step4').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		} else if($(e.currentTarget).val() == 'option2'){
			 this.$el.find('#step4').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();		
		} else if($(e.currentTarget).val() == 'option3'){
			 this.$el.find('#step4').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		} else if($(e.currentTarget).val() == 'option4'){
			 this.$el.find('#step4').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		} else if($(e.currentTarget).val() == 'option5'){
			 this.$el.find('#step4').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		} else if($(e.currentTarget).val() == 'option6'){
			 this.$el.find('#step4').html(this.step4Template());
			 this.$el.find('#step5').empty();
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		} else if($(e.currentTarget).val() == 'option7'){
			 this.$el.find('#step4').html(this.resultTemplate({color:'green', code: '5เขียว7'}));
		 }
 
	 },
	 step4Selected: function(e) {
		 if($(e.currentTarget).val() == 'option1') {
			 this.$el.find('#step5').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 } else {
			 this.$el.find('#step5').html(this.step5Template());
			 this.$el.find('#step6').empty();
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 }
	 },
	 step5Selected: function(e) {
		 if($(e.currentTarget).val() == 'option1') {
			 this.$el.find('#step6').html(this.resultTemplate({color:'red', code: '5แดง2'}));
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 } else {
			 this.$el.find('#step6').html(this.resultTemplate({color:'GoldenRod', code: '5เหลือง8'}));
			 this.$el.find('#step7').empty();
			 this.$el.find('#step8').empty();
			 this.$el.find('#step9').empty();
			 this.$el.find('#step10').empty();
		 }
	 },
	 render: function() {
		 var json={};
		 json.model={};
		 
		 this.$el.find("#basicSymtomp").html(this.basicSymtopTemplate(json));
		 
		 $('#basicSymTxt').typeahead({
			  hint: true,
			  highlight: true,
			  minLength: 1
			},
			{
			  name: 'states',
			  displayKey: 'value',
			  source: substringMatcher(states)
			});
		 
		 return this;
	 }
});