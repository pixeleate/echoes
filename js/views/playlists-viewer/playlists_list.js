define(["jquery","underscore","backbone","text!templates/youtube_playlist_list_item.html"],function(e,t,n,r){var i=n.View.extend({tagName:"li",template:t.template(r),render:function(){return this.$el.html(this.template(this.model.toJSON())),this}}),s=n.View.extend({events:{"click .modal-body a":function(e){e.preventDefault()}},view:{type:i},initialize:function(){}});return s});