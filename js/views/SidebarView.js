define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({el:"#sidebar-menu-toggler",events:{"click a":"onSidebarToggle"},initialize:function(){},onSidebarToggle:function(t){t.preventDefault(),this.$el.toggleClass("opened"),e("#sidebar").toggleClass("closed")}});return r});