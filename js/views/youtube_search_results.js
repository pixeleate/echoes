define(["jquery","underscore","backbone","views/youtube_item","collections/youtube_search_results"],function(e,t,n,r,i){var s=n.View.extend({tagName:"ul",className:"clearfix unstyled ux-maker youtube-items-container",view:{type:r,collection:i},initialize:function(){this.listenTo(this.model.youtube(),"change:data",this.updateCollection),this.listenTo(this.model.youtube(),"change:query",this.reset),this.listenTo(this.collection,"change:isPlaying",this.updateState),this.listenTo(this.collection,"change:addToPlaylist",this.addToPlaylist),this.listenTo(this.collection,"change:isFavorite",this.favoriteMedia),this.$el.addClass("transition-out"),this.model.youtube().search()},updateCollection:function(e,t){t&&(this.$el.hide(),this.collection.add(t.items),this.$el.show().addClass("transition-in").removeClass("transition-out"))},reset:function(){this.collection.reset()},updateState:function(e,t){t&&this.collection.savePlayed(e)},addToPlaylist:function(e,t){this.model.set("playlist-add",e.toJSON())},favoriteMedia:function(e,t){var n=this.model.youtube().profile.getFavoritesId();this.model.youtube().playlists.insert(n,e.id)}});return s});