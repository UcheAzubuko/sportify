import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '@/firebase/FirebaseInit';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    interests: [
      'Football',
      'Basketball',
      'Tennis',
      'Golf',
      'Rugby',
      'Swimming',
      'Hockey',
      'F1',
      'Skiing',
      'Shooting',
      'Table tennis',
      'Boxing',
    ],
    user: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileEmail: null,
    profileInterest: null,
    profilePhone: null,
    profileId: null,
    profileInitials: null,
  },

  mutations: {
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstname;
      state.profileLastName = doc.data().lastname;
      state.profilePhone = doc.data().phone;
      state.profileUsername = doc.data().username;
      state.profileInterest = doc.data().interest;
    },

    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join('') +
        state.profileLastName.match(/(\b\S)?/g).join('');
    },

    updateUser(state, payload) {
      state.user = payload;
    },

    changeUsername(state, payload) {
      state.profileFirstName = payload;
    },
  },

  actions: {
    async getCurrentUser({ commit }) {
      const database = await db
        .collection('users')
        .doc(firebase.auth().currentUser.uid);
      const dbResult = await database.get();

      commit('setProfileInfo', dbResult);
      commit('setProfileInitials');
    },

    async updateUserSettings({ state }) {
      const database = await db.collection('users').doc(state.profileId);
      await database.update({
        username: state.profileUsername,
      });
    },
  },

  modules: {},

  getters: {},
});
