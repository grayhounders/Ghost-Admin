import Ember from 'ember';
import AuthenticatedRoute from 'ghost/routes/authenticated';

const {inject} = Ember;

export default AuthenticatedRoute.extend({

    mediaQueries: inject.service(),

    beforeModel() {
        let firstTag = this.modelFor('settings.tags').get('firstObject');
        if (firstTag && !this.get('mediaQueries.maxWidth600')) {
            this.transitionTo('settings.tags.tag', firstTag);
        }
    }
});