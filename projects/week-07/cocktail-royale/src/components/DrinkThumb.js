import React, { Component } from 'react'
import { withListData } from '../context/BigDataProvider.js'

function thumbRevealSkipImageWait(props) {
    if (typeof props.thumbRevealIndex !== 'number') return true
    if (!props.strDrinkThumb) return true
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

class DrinkThumb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thumbImageReady: thumbRevealSkipImageWait(props),
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.strDrinkThumb !== this.props.strDrinkThumb ||
            prevProps.thumbRevealIndex !== this.props.thumbRevealIndex
        ) {
            this.setState({
                thumbImageReady: thumbRevealSkipImageWait(this.props),
            })
        }
    }

    handleThumbImageDone = () => {
        if (typeof this.props.thumbRevealIndex !== 'number') return
        if (this.state.thumbImageReady) return
        this.setState({ thumbImageReady: true })
    }

    render() {
        const {
            idDrink,
            strDrinkThumb,
            strDrink,
            getCocktailDetails,
            fadeStaggerIndex,
            fadeLazyBatchIndex,
            thumbRevealIndex,
        } = this.props

        const useThumbReveal = typeof thumbRevealIndex === 'number'
        const showThumbReveal = !useThumbReveal || this.state.thumbImageReady

        let enterClass = ''
        let staggerStyle
        if (!useThumbReveal) {
            if (typeof fadeStaggerIndex === 'number') {
                enterClass = 'search-results-card-enter'
                staggerStyle = {
                    animationDelay: `${0.14 + Math.min(fadeStaggerIndex, 20) * 0.042}s`,
                }
            } else if (typeof fadeLazyBatchIndex === 'number') {
                enterClass = 'search-results-card-enter-lazy'
                staggerStyle = {
                    animationDelay: `${0.06 + Math.min(fadeLazyBatchIndex, 16) * 0.038}s`,
                }
            }
        }

        const thumbRevealClass = useThumbReveal
            ? `drink-thumb-reveal${showThumbReveal ? ' drink-thumb-reveal--show' : ''}`.trim()
            : ''

        const thumbRevealStyle = useThumbReveal
            ? { ...staggerStyle, '--thumb-reveal-i': String(thumbRevealIndex) }
            : staggerStyle

        return (
            <div
                className={`col drink-card-col ${enterClass} ${thumbRevealClass}`.trim()}
                style={thumbRevealStyle}
                onClick={() => {
                    getCocktailDetails(idDrink)
                }}
            >
                <div className="card waves-effect black">
                    <div className="card-image drink-thumb-image-wrap">
                        <img
                            className="drink-thumb-sharp"
                            src={strDrinkThumb}
                            alt={strDrink || 'Cocktail'}
                            decoding="async"
                            onLoad={this.handleThumbImageDone}
                            onError={this.handleThumbImageDone}
                        />
                    </div>
                    <div className="card-content">
                        <h2>{strDrink}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default withListData(DrinkThumb)
