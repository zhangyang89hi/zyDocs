<template>
    <a class="zy-cell" :href="href">
        <span class="cell-mask"></span>
        <div class="cell-left">
            <slot name="left"></slot>
        </div>
        <div class="cell-wrapper">
            <div class="cell-title">
                <span class="cell-text">{{title}}</span>
                <span class="cell-label">{{label}}</span>
            </div>
            <div class="cell-value">
                <slot><span>{{value}}</span></slot>
            </div>
            <i v-if="isLink" class="cell-allow-right">></i>
        </div>
        <div class="cell-right">
            <slot name="right"></slot>
        </div>
    </a>
</template>

<script>
export default {
    name: 'zy-cell',
    props: {
        to: [String, Object],
        title: String,
        label: String,
        value: String,
        isLink: Boolean,
        icon: String
    },
    data () {
        return {
            
        }
    },
    computed: {
        href() {
            return this.to
        }
    },
    methods: {

    }

}
</script>

<style lang='scss'>
:root {
--color-blue: #26a2ff;
--color-white: #fff;
--color-grey: #d9d9d9;
--border-color: #c8c8cd;
--success-color: #4caf50;
--error-color: #f44336;
--warning-color: #ffc107;
}
/* Cell Component */
.zy-cell{
--cell-value-color: #888;
}
.zy-cell{
    background-color: var(--color-white);
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;

    &:first-child {
        .cell-wrapper {
        background-origin: border-box;
        }
    }

    &:last-child {
        background-image: linear-gradient(0deg, var(--color-grey), var(--color-grey) 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
    }
    .cell-mask {
        &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0;
        }

        &:active::after {
        opacity: .1;
        }
    }

    .cell-left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .cell-wrapper {
        background-image:linear-gradient(180deg, var(--color-grey), var(--color-grey) 50%, transparent 50%);
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 16px;
        line-height: 1;
        min-height: inherit;
        overflow: hidden;
        padding: 0 10px;
        width: 100%;
        .title {
            flex: 1;
            .text {
                vertical-align: middle;
            }

            .label {
                color: #888;
                display: block;
                font-size: 12px;
                margin-top: 6px;
            }
        }
        .value {
            color: var(--cell-value-color);
            display: flex;
            align-items: center;

            .link {
            margin-right: 24px;
            }
        }
        .cell-allow-right::after {
            border: solid 2px var(--border-color);
            border-bottom-width: 0;
            border-left-width: 0;
            content: " ";
            // position: absolute 50% 20px * *;
            size: 5px;
            transform: translateY(-50%) rotate(45deg);
        }
    }

    .cell-right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
    }
}

</style>

