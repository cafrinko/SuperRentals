import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  }
    actions: {
      save3(params) {
        // Create a new rental with the information from our parameters, save it to the database, and call it "newRental".
        var newRental = this.store.createRecord('rental', params);
        // Refer to the city in those parameters as "city".
        var city = params.city;
        // Retrieve the list of rentals located in "city", and add "newRental" to that list.
        city.get('rentals').addObject(newRental);
        // Save "newRental", so it remembers what city it belongs in.
        newRental.save().then(function() {
        // Wait until "newRental" has finished saving, then save "city'" too, so it remembers it contains "newRental".
          return city.save();
        });
        // Afterwards, take us to the page displaying details for "city".
        this.transitionTo('city', params.city);
      }
    }
});