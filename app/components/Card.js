import React, {Component} from 'react'
import CardAccordeon from './CardAccordeon'
import app from '../core/app'

class Card extends Component {
  constructor(props) {
    super(props)
    this.handleOrder = this.handleOrder.bind(this)
  }

  handleOrder(event) {
    app.dispatch({
      type: 'EVENT_OPEN_PARTNER',
      payload: {
        name: this.props.item.title
      }
    })
  }

  render() {
    const {item, linkParams} = this.props
    return (
      <div className="result-item">
        <section>
          <figure>
            <img src={item.logo} />
          </figure>
          <div className="info">
            <h3>{item.title}</h3>
            {/*
            <div className="rating">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p><a href="#">22 отзыва</a> (4.1 из 5)</p>
            </div>
            */}
            {item.pros &&
              <ul className="pros">
                {/* For MFO */}
                {item.pros.money && <li><strong>{item.pros.money}</strong> руб.<em>сумма займа</em></li>}
                {item.pros.term && <li><strong>{item.pros.term}</strong><em>срок займа</em></li>}
                {item.pros.minRate && <li><strong>{item.pros.minRate}</strong><em>ставка</em></li>}

                {/* For credit cards */}
                {item.pros.limit && <li><strong>{item.pros.limit}</strong> руб.<em>кредитный лимит</em></li>}
                {item.pros.percent && <li>от <strong>{item.pros.percent}</strong><em>процентная ставка</em></li>}
                {item.pros.cashback && <li><strong>{item.pros.cashback}</strong><em>cashback</em></li>}

                {/* For credits */}
                {item.pros.maxSumm && <li><strong>{item.pros.maxSumm}</strong> руб.<em>максимальная сумма</em></li>}
                {item.pros.rate && <li>от <strong>{item.pros.rate}</strong><em>процентная ставка</em></li>}
                {item.pros.timing && <li><strong>{item.pros.timing}</strong><em>время рассмотрения</em></li>}
              </ul>
            }
          </div>
          <div className="process">
            <a target="_blank" href={item.link + linkParams} rel="nofollow noopener" onClick={this.handleOrder}>Оформить</a>
            {/* item.overpayment && <p>переплата {item.overpayment}</p> */}
          </div>
        </section>
        <CardAccordeon data={item} />
      </div>
    )
  }
}

export default Card
