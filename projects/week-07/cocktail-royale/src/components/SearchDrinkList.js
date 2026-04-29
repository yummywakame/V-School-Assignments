import React, { Component } from 'react'
import DrinkThumb from './DrinkThumb.js'

const PAGE_SIZE = 20
const SENTINEL_ATTACH_MAX_TRIES = 12

/**
 * Renders search-result drink cards with incremental reveal: first PAGE_SIZE,
 * then more in PAGE_SIZE chunks as the user scrolls near the bottom.
 */
class SearchDrinkList extends Component {
    constructor(props) {
        super(props)
        const len = props.items?.length ?? 0
        this.state = {
            visible: Math.min(PAGE_SIZE, len),
        }
        this.sentinelRef = React.createRef()
        this.observer = null
        this.sentinelAttachTries = 0
    }

    componentDidMount() {
        const len = this.props.items?.length ?? 0
        const next = Math.min(PAGE_SIZE, len)
        if (next !== this.state.visible) {
            this.setState({ visible: next }, () => this.setupObserver())
        } else {
            this.setupObserver()
        }
    }

    componentWillUnmount() {
        this.teardownObserver()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.items !== this.props.items) {
            this.sentinelAttachTries = 0
            const len = this.props.items?.length ?? 0
            const next = Math.min(PAGE_SIZE, len)
            this.setState({ visible: next }, () => this.setupObserver())
            return
        }
        if (prevState.visible !== this.state.visible) {
            if (this.state.visible >= (this.props.items?.length ?? 0)) {
                this.teardownObserver()
            } else {
                this.setupObserver()
            }
        }
    }

    teardownObserver() {
        if (this.observer) {
            this.observer.disconnect()
            this.observer = null
        }
    }

    setupObserver() {
        this.teardownObserver()
        const items = this.props.items
        const total = items?.length ?? 0
        if (total <= PAGE_SIZE || this.state.visible >= total) return

        const node = this.sentinelRef.current
        if (!node) {
            if (this.sentinelAttachTries < SENTINEL_ATTACH_MAX_TRIES) {
                this.sentinelAttachTries += 1
                requestAnimationFrame(() => this.setupObserver())
            }
            return
        }
        this.sentinelAttachTries = 0

        if (typeof IntersectionObserver === 'undefined') {
            this.setState({ visible: total })
            return
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                const hit = entries.some((e) => e.isIntersecting)
                if (!hit) return
                const len = this.props.items?.length ?? 0
                this.setState((prev) => {
                    if (prev.visible >= len) return null
                    return { visible: Math.min(len, prev.visible + PAGE_SIZE) }
                })
            },
            {
                root: null,
                rootMargin: '280px 0px 120px 0px',
                threshold: 0,
            }
        )
        this.observer.observe(node)
    }

    render() {
        const { items, drinkThumbProps } = this.props
        const total = items?.length ?? 0
        const visible = Math.min(this.state.visible, total)
        const slice = items.slice(0, visible)
        const showSentinel = total > PAGE_SIZE && visible < total

        return (
            <>
                {slice.map((item, index) => (
                    <DrinkThumb
                        {...item}
                        {...drinkThumbProps}
                        key={item.idDrink}
                        thumbRevealIndex={index}
                    />
                ))}
                {showSentinel && (
                    <div
                        className="col s12 search-results-scroll-sentinel"
                        ref={this.sentinelRef}
                        aria-hidden="true"
                    />
                )}
            </>
        )
    }
}

export { PAGE_SIZE }
export default SearchDrinkList
