import { L } from '../src/leaflet'

import './switchBasemap.css'

L.Control.Layers.BasemapsSwitcher = L.Control.Layers.extend({
  options: {
    position: 'bottomright'
  },

  initialize: function (layers, options) {
    L.Util.setOptions(this, options)
    this.layers = layers
  },

  onAdd: function (map) {
    this.container = L.DomUtil.create('div', 'leaflet-control-basemapsSwitcher')

    this._createItems()
    this._collapse()

    this.container.addEventListener('mouseover', () => {
      this._expand()
    })

    this.container.addEventListener('mouseout', () => {
      this._collapse()
    })

    return this.container
  },

  _createItems () {
    this.layers.forEach((obj, index) => {
      obj.id = index

      const imgContainer = L.DomUtil.create('div', 'basemapImg')
      const img = L.DomUtil.create('div')
      const name = L.DomUtil.create('div', 'name')
      const check = L.DomUtil.create('div', 'check')
      name.innerHTML = obj.name

      if (obj.layer?._map) {
        this.activeMap = obj
        check.classList.add('activeMap')
      }

      img.style.backgroundImage = `url(${obj.icon})`
      imgContainer.append(img)
      img.append(check)
      img.append(name)

      imgContainer.addEventListener('click', () => {
        this._removeLayers(obj.layer)

        if (!obj.layer?._map) {
          obj.layer.addTo(this._map)
          this.activeMap = obj
          this._collapse()

          check.classList.add('activeMap')
        }
      })

      this.container.append(imgContainer)
    })
  },

  _removeLayers (layer) {
    this.layers.forEach((obj) => {
      if (obj.layer._leaflet_id !== layer._leaflet_id && obj.layer?._map) {
        this._map.removeLayer(obj.layer)
      }
    })
  },

  _collapse () {
    this.container.childNodes.forEach((child, index) => {
      if (index !== this.activeMap.id) {
        child.classList.add('hidden')
        const check = child.querySelector('.check')
        check.classList.remove('activeMap')
      }
    })
  },

  _expand () {
    this.container.childNodes.forEach((child) => {
      child.classList.remove('hidden')
    })
  }

})

L.control.layers.minimap = function (layers, overlays = {}, options) {
  return new L.Control.Layers.BasemapsSwitcher(layers, overlays, options)
}
