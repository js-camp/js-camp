import Vue  from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash'

Vue.use(Vuex);

export const store =new Vuex.Store({
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
            location : 'Ghana Tech Lab, Edward Kodjo Zalia Bock, Accra Digital Center',
            web      : 'js-camp.com/19',
          },
          date : '31st August',
          startTime  : '2:00pm',
          endTime : ':6:00pm',
          seats : 100,
          sponsors : [
            {name : "Mozilla", logo : ""},
            {name : "Mazzuma", logo : ""},
            {name : "Ghana Tech Lab", logo : ""},
          ],
          speakers : [
            {name : 'Kobina Koomson', picture : '', jobTitle : ''},
            {name : 'Terrence O. Koranchie', picture : '', jobTitle : ''}
          ],
          presentations : [
            {title : '', description : '', speakerName : '', startTime : '', endTime : ''}
          ],
          panelDiscussions : [
            {title : '', panelists : [], startTime : '', endTime : ''}
          ],
          lighteningTalks : [
            {title : '', description : '', speakerName : '', startTime : '', endTime : ''}
          ],
          //sessions :
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
actions : {},

});
