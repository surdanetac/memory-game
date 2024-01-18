import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  getters: {
    fetchDataCards: state => state.cards
  },
  mutations: {
    setCards (state, val) {
      state.cards = val.entries.map(card => {
        return {
          url: card.fields.image.url,
          title: card.fields.image.title,
          uuid: card.fields.image.uuid,
          isFlipped: false,
          isMatched: false
        }
      })
    }
  },
  actions: {
    fetchDataCards({commit}) {
      const url = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=5'
      axios.get(url)
      .then(res => {
        if (res.status === 200) {
          commit('setCards', res.data)
        } else {
          console.error('Error al cargar las cards')
        }
      })
      .catch(err => console.error('Error al cargar las cards', err))
    }
  }
})
