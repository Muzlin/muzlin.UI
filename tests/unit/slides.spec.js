import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Slides from '@/slides.vue'
import SlidesItem from '@/slides-item.vue'
import Vue from 'vue'

chai.use(sinonChai)

describe('Slides 组件单元测试', () => {
  it('存在.', () => {
    expect(Slides).to.exist
  })

  it('接受 MzSlidesItem，默认展示第一个', (done) => {
    Vue.component('mz-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
          <mz-slides-item name="1">
            <div class="box1">1</div>
          </mz-slides-item>
          <mz-slides-item name="2">
            <div class="box2">2</div>
          </mz-slides-item>
          <mz-slides-item name="3">
            <div class="box3">3</div>
          </mz-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    })
  })
  it('selected 是几，选中的就是几', (done) => {
    Vue.component('mz-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <mz-slides-item name="1">
            <div class="box1">1</div>
          </mz-slides-item>
          <mz-slides-item name="2">
            <div class="box2">2</div>
          </mz-slides-item>
          <mz-slides-item name="3">
            <div class="box3">3</div>
          </mz-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    })
  })

  it('点击第二个就展示第二个', (done) => {
    Vue.component('mz-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      slots: {
        default: `
          <mz-slides-item name="1">
            <div class="box1">1</div>
          </mz-slides-item>
          <mz-slides-item name="2">
            <div class="box2">2</div>
          </mz-slides-item>
          <mz-slides-item name="3">
            <div class="box3">3</div>
          </mz-slides-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.eq('2')
          done()
        }
      }
    })
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })

  it('会自动播放', (done) => {
    Vue.component('mz-slides-item', SlidesItem)
    const callback = sinon.fake();
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 20,
        selected: '1'
      },
      slots: {
        default: `
          <mz-slides-item name="1">
            <div class="box1">1</div>
          </mz-slides-item>
          <mz-slides-item name="2">
            <div class="box2">2</div>
          </mz-slides-item>
          <mz-slides-item name="3">
            <div class="box3">3</div>
          </mz-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
  })
  it('可以点击上一张', (done) => {
    Vue.component('mz-slides-item', SlidesItem)
    const callback = sinon.fake();
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 20,
        selected: '1'
      },
      slots: {
        default: `
          <mz-slides-item name="1">
            <div class="box1">1</div>
          </mz-slides-item>
          <mz-slides-item name="2">
            <div class="box2">2</div>
          </mz-slides-item>
          <mz-slides-item name="3">
            <div class="box3">3</div>
          </mz-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('[data-action="prev"]').trigger('click')
      expect(callback).to.have.been.calledWith('3')
      done()
    }, 21)
  })
  it('可以点击下一张', (done) => {
    Vue.component('mz-slides-item', SlidesItem)
    const callback = sinon.fake();
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 20,
        selected: '1'
      },
      slots: {
        default: `
          <mz-slides-item name="1">
            <div class="box1">1</div>
          </mz-slides-item>
          <mz-slides-item name="2">
            <div class="box2">2</div>
          </mz-slides-item>
          <mz-slides-item name="3">
            <div class="box3">3</div>
          </mz-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('[data-action="next"]').trigger('click')
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
  })
})
