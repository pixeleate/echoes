(function(){var e=this._,t=this.Backbone;if(!e||!t||!JSON)return;var n=function(e){return function(n){var r=n.initialize||function(){};return n.initialize=function(){var e;n&&n.safe&&(e=n.safe.key?n.safe.key:n.safe,t.Safe.create(e,this,n.safe.options||{reload:!0})),r.apply(this,arguments)},e.call(this,n)}};t.Model.extend=n(t.Model.extend),t.Collection.extend=n(t.Collection.extend),t.Safe=function(t,n,r){this._reload=r&&r.reload&&r.reload===!0,this.uid=t,this.context=n,this.isCollection=!n.set&&n.models&&n.add;var i={events:"add reset",emptyValue:"[]",reload:function(){n.add(this.getData())},toJSON:function(e){return e.collection.toJSON()}},s={events:"change",emptyValue:"{}",reload:function(){n.set(this.getData())},toJSON:function(e){return e.toJSON()}};e.extend(this,this.isCollection?i:s),this.ensureUID(),this._reload&&this.reload(),n.on(this.events,this.store,this)},t.Safe.prototype={ensureUID:function(){e.isNull(this.getData())&&this.create()},create:function(){this.storage().setItem(this.uid,this.emptyValue)},store:function(e){this.storage().setItem(this.uid,JSON.stringify(this.toJSON(e)))},storage:function(){return localStorage},getData:function(){return this._current=this.storage().getItem(this.uid),this._current?JSON.parse(this._current):this._current},reset:function(){this.create()},destroy:function(){this.storage().removeItem(this.uniqueID)}},t.Safe.create=function(e,n,r){e&&n&&(n.safe=new t.Safe(e,n,r))}})();