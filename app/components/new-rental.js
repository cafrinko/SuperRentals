import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        bedrooms: this.get('bedrooms'),
        type: this.get('type'),
        image: this.get('image'),
        cost: parseInt(this.get('cost'))
      };

      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
