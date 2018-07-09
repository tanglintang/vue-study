<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item, index) in goods" class="menu-item" :class="{'current': currentIndex===index}" @click="selectMenu(index, $event)" :key="index">
                    <span class="text border-1px">
                        <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

const response = require('../../common/data/goods.json')
export default {
    data() {
        return {
            goods: [],
            listHeight: [],
            scrollY: 0,
            selectedFood: {}
        }
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        if (response.errno === 0) {
            this.goods = response.data
            this.$nextTick(() => {
                this._initScroll()
                this._calculateHeight()
            })
        }
    },
    computed: {
        currentIndex() {
            for (let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i]                
                let height2 = this.listHeight[i + 1]
                if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i
                }
            }
            return 0
        }
    },
    methods: {
        selectMenu(index, event) {
            if (!event._constructed) {
                return
            }
            let foodList = this.$refs.foodList
            let el = foodList[index]
            // this.foodScroll
        },
        _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            })
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                click: true,
                probeType: 3
            })
            this.foodsScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        _calculateHeight() {
            let foodList = this.$refs.foodList
            let height = 0
            this.listHeight.push(height)
            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        }
    }
}
</script>

<style>

</style>
