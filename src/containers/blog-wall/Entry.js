import React from 'react'

/**
 * @class Entry
 *
 * This class is used to represent the different entires on the blog-wall. Each
 * entry is fetched from the Wordpress API.
 *
 * @version v0.1.0
 * @since v0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class Entry extends React.Component {

  /**
   * @constructor
   *
   * This constructor initializes the local state.
   *
   * @prop { object } props - These are the properties that are passed to this
   *                          class.
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  /**
   * @method render
   *
   * This method returns the JSX object, which is rendered by ReactDOM.
   *
   */
  render () {
    let { title, date, category, tags } = this.props
    return (
      <div className='timeline-block github'>
        <div className='timeline-img'>
          {/* <img src='img/cd-icon-movie.svg' alt='Movie'>  */}
        </div> {/* timeline-img */}

        <div className='timeline-content'>
          <div className='header'>
            <div className='header-top'>
              <h2>{title}</h2>
              <span>in {category.map((catgory) => { return category })}</span>
            </div>
            <div className='header-bottom'>
              <span>{date.getDay() + 1}-{date.getDate()}-{date.getFullYear()}</span>
              <span>{tags.map((tags) => { return ' #' + tags })}</span>
            </div>
          </div>
          {this.state.expanded
          ? <div className='excerpt' dangerouslySetInnerHTML={{__html: this.props.content} }/>
          : <div className='excerpt' dangerouslySetInnerHTML={{__html: this.props.shortDescription} } />
          }
          <div className='bottum'>
            <a href='#0' className='cd-read-more' onClick={() => { this.setState({expanded: !this.state.expanded })}}>Read more</a>
          </div>
        </div>{/* timeline-content */}
      </div> // timeline-block
    )
  }
}

/**
 * Define the component properties.
 *
 * @prop { string } title -
 * @prop { array } category -
 * @prop { object } date -
 * @prop { array } tags -
 * @prop { string } shortDescription -
 * @prop { string } content -
 *
 */
Entry.propTypes = {
  title: React.PropTypes.string,
  category: React.PropTypes.array,
  date: React.PropTypes.object,
  tags: React.PropTypes.array,
  shortDescription: React.PropTypes.string,
  content: React.PropTypes.string
}

/**
 * @exports Entry
 */
export default Entry
