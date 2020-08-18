







### render

```js

render: function(createElement) {
    return createElement(
        'div',
        {
            class: [
                'search-component',
                'search-component-slide',
                { 'hide-search-component': !self.isShowContent }
            ],
            domProps: {
                innerHTML: item.corpName
            },
            attrs: {
                name: 'address-chance',
                type: 'radio'
            },
            on: {
                click: function() {
                    self.searchSelect(item.corpName, item.channelCode)
                }
            }
        },
        [
            createElement(
                'div', 
                { class: 'search-content' },
                [closeSearch, searchInput, searchButton]
            ),
            createElement(
                'div', 
                { class: ['search-result-list'] }, 
                [searchNone, searchResult]
            )
        ]
    )
}

```
### Vue.extend() Vue.component()

```js

// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上
new Profile().$mount('#mount-point')
new Profile({el: '#mount-point'})

Vue.component('hello',
template: '<p>{{firstName}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
    }
  })

```