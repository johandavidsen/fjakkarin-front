import React from 'react'
import wpcom from 'wpcom'
import Waypoint from 'react-waypoint'

import Entry from './Entry'

/**
 * @class BlogWall
 *
 * This is the blog wall class. This class is intended to be the main page of the
 * blog. From this page, the visitors can view all the posts on the page.
 *
 * @version v0.1.0
 * @since v0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class BlogWall extends React.Component {

  /**
   * @constructor
   *
   * The constructor initializes the local state and binds the local methods to
   * the class.
   *
   * @prop { object } props - These are the properties that are passed to this
   *                          class.
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      index: 5,
      current: 0,
      length: null,
      entries: [],
      loading: false
    }

    this._fetchMorePosts = this._fetchMorePosts.bind(this)
    this._enterWaypoint = this._enterWaypoint.bind(this)
  }

  /**
   * @method componentDidMount
   *
   *
   */
  componentDidMount () {
    this._fetchMorePosts(10)
  }

  /**
   * @method _fetchMorePosts
   *
   *
   *
   */
  _fetchMorePosts (number, offset) {
    var wp = wpcom()
    var blog = wp.site('www.fjakkarin.com')
    this.setState({ loading: true })
    blog.postsList( { number: number } )
      .then( (object) => {
        let { posts } = object
        posts.slice(offset).map((post, index) => {
          // Build display object
          let dPost = {
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            format: post.format,
            date: new Date(post.date),
            category: [],
            tags: []
          }
          // Get the tags
          for (let tag in post.tags) {
            if (post.tags.hasOwnProperty(tag)) {
              dPost.tags.push(tag.replace(" ", ""))
            }
          }
          // Get the category
          for (let prop in post.categories) {
            if (post.categories.hasOwnProperty(prop)) {
              dPost.category.push(prop)
            }
          }
          this.state.entries.push(dPost)
          this.setState({ length: object.found, current: number, entries: this.state.entries, loading: false })
        })
      })
      .catch( (error) => { console.log(error) } )
  }

  /**
   * @method _enterWaypoint
   *
   * This method is called, when the user scolls to the bottom of the page.
   */
  _enterWaypoint () {
    const { index, current, length } = this.state
    if (!length || current < length) {
      this._fetchMorePosts(current + index, current)
    }
  }

  /**
   * @method render
   *
   * This method returns the JSX object, which is rendered by ReactDOM.
   *
   */
  render () {
    const { loading, entries } = this.state
    return (
      <main className='fjakkarin-content-feed'>
        {entries.length !== 0 &&
          <section id='timeline' className='timeline-container'>
            {entries.map((entry, index) => {
              return (
                <Entry key={index}
                  title={entry.title}
                  category={entry.category}
                  date={entry.date}
                  tags={entry.tags}
                  shortDescription={entry.excerpt}
                  content={entry.content}
                />
              )
            })}
            {loading &&
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', height: '60px', background: 'white' }}>Bíða</div>
              </div>
            }
          </section>
        }
        {!loading &&
          <Waypoint
            onEnter={this._enterWaypoint}
            />
        }
      </main>
    )
  }
}

/**
 * @exports BlogWall
 */
export default BlogWall
