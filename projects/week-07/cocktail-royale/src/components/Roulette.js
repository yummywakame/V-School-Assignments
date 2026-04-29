import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

const MIN_VISIBLE_MS = 1500
const FADE_MS = 450

class Roulette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fading: false,
        }
        this.spinBeganAt = Date.now()
        this.navigateScheduled = false
        this.pendingHoldTimer = null
        this.pendingFadeFallbackTimer = null
        this._isMounted = false
        this.navigated = false
    }

    componentDidMount() {
        this._isMounted = true
        window.scrollTo(0, 0)
        this.spinBeganAt = Date.now()
    }

    componentWillUnmount() {
        this._isMounted = false
        if (this.pendingHoldTimer) clearTimeout(this.pendingHoldTimer)
        if (this.pendingFadeFallbackTimer) clearTimeout(this.pendingFadeFallbackTimer)
    }

    clearHoldTimer = () => {
        if (this.pendingHoldTimer) {
            clearTimeout(this.pendingHoldTimer)
            this.pendingHoldTimer = null
        }
    }

    navigateToDrink = () => {
        if (!this._isMounted || this.navigated) return
        const id = this.props.cocktailDetail?.[0]?.idDrink
        if (!id) return
        this.navigated = true
        this.props.history.push(`/cocktail/${id}`)
    }

    beginFade = () => {
        if (!this._isMounted) return
        this.setState({ fading: true })
        if (this.pendingFadeFallbackTimer) clearTimeout(this.pendingFadeFallbackTimer)
        this.pendingFadeFallbackTimer = setTimeout(() => {
            this.navigateToDrink()
        }, FADE_MS + 80)
    }

    handleFadeEnd = (e) => {
        if (e.propertyName !== 'opacity' || !this.state.fading) return
        if (this.pendingFadeFallbackTimer) {
            clearTimeout(this.pendingFadeFallbackTimer)
            this.pendingFadeFallbackTimer = null
        }
        this.navigateToDrink()
    }

    componentDidUpdate(prevProps) {
        const prevDetail = prevProps.cocktailDetail
        const detail = this.props.cocktailDetail
        const prevLen = prevDetail?.length ?? 0
        const len = detail?.length ?? 0

        if (prevLen > 0 && len === 0) {
            this.clearHoldTimer()
            if (this.pendingFadeFallbackTimer) {
                clearTimeout(this.pendingFadeFallbackTimer)
                this.pendingFadeFallbackTimer = null
            }
            this.navigateScheduled = false
            this.navigated = false
            this.spinBeganAt = Date.now()
            if (this.state.fading && this._isMounted) {
                this.setState({ fading: false })
            }
            return
        }

        const id = detail?.[0]?.idDrink
        const prevId = prevDetail?.[0]?.idDrink
        if (!id || id === prevId || this.navigateScheduled) return

        this.navigateScheduled = true
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion) {
            this.navigateToDrink()
            return
        }

        const elapsed = Date.now() - this.spinBeganAt
        const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)
        this.clearHoldTimer()
        this.pendingHoldTimer = setTimeout(() => {
            this.pendingHoldTimer = null
            this.beginFade()
        }, wait)
    }

    render() {
        const hasDrink = this.props.cocktailDetail?.length > 0
        const { fading } = this.state
        const showTagline = !fading

        return (
            <main className="container roulette-page">
                <div
                    className={`roulette-page__inner${fading ? ' roulette-page__inner--fading' : ''}`}
                    onTransitionEnd={this.handleFadeEnd}
                >
                    <h1 className="glow">Roulette</h1>
                    {showTagline && (
                        <p className="roulette-loading" role="status" aria-live="polite">
                            {hasDrink
                                ? 'Mixing your drink…'
                                : 'Spinning up your next cocktail…'}
                        </p>
                    )}
                </div>
            </main>
        )
    }
}

export default withListData(Roulette)
