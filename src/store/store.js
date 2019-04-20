import Vue  from 'vue';
import Vuex from 'vuex';
// import lodash from 'lodash'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state   : {
    address :  {},
    community : {}
  },
  getters : {
    events : (state) =>
    {
      return {
        years : {
          "2019" : {
            address : {
              venue : 'Ghana Tech Lab',
              location : ' Accra Digital Center',
              web      : 'js-camp.com/19',
            },
            date : '31st August, 2019',
            startTime  : '2:00pm',
            endTime : ':6:00pm',
            seats : 100,
            sponsors : [
              { name : "Mozilla", logo : "gh-tech-lab.png" },
              { name : "Mazzuma", logo : "mazzuma.png" },
              { name : "Ghana Tech Lab", logo : "mozilla.png" },
            ],
            speakers : [
              { name : 'Yannick Aka Brou Noel', picture : 'yann.png', jobTitle : '' },
              { name : 'Terrence O. Koranchie', picture : 'terr.png', jobTitle : '' }
            ],
            presentations : [
              { title : '', description : '', speakerName : '', startTime : '', endTime : '' }
            ],
            panelDiscussions : [
              { title : '', panelists : [], startTime : '', endTime : '' }
            ],
            lighteningTalks : [
              { title : '', description : '', speakerName : '', startTime : '', endTime : '' }
            ],
            // sessions :
          }
        }
      }
    },
    community : (state) => {
      return {
        name : 'JS Camp',
        address : {
          location : 'Accra, Gh',
          phone    : '+233 (0) 26 072 1202',
          email    : 'jshackaccra@gmail.com',
          web     : 'js-camp.com'
        }
      }
    }
  },
  mutations : {},
  actions : {},

});
