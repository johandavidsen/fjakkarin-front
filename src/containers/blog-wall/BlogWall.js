import React from 'react'
import wpcom from 'wpcom'

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
   * The constructor initializes the local state.
   *
   * @prop { object } props - These are the properties that are passed to this
   *                          class.
   *
   */
  constructor (props) {
    super(props)
    this.state = {
      index: 5,
      length: null,
      entries: [],
      loading: false
    }
  }

  /**
   * @method componentDidMount
   *
   * When the component is mounted, this method fetches the content for this page.
   *
   */
  componentDidMount () {
    const { index } = this.state
    var wp = wpcom()
    var blog = wp.site('www.fjakkarin.com')
    this.setState({ loading: true })
    blog.postsList( { number: index } )
      .then( (object) => {
        object.posts.map((post, index) => {
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
          this.setState({ length: object.found, entries: this.state.entries, loading: false })
        })
      })
      .catch( (error) => { console.log(error) } )

  }

  /**
   * @method render
   *
   * This method returns the JSX object, which is rendered by ReactDOM.
   *
   */
  render () {
    const { loading } = this.state
    return (
      <main className='fjakkarin-content-feed'>
        {loading
        ? (<p></p>)
        : <section id='timeline' className='timeline-container'>
           {this.state.entries.length === 0
            ? (<div />)
            : this.state.entries.map((entry, index) => {
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
            })
          }
        </section>
        }
      </main>
    )
  }
}

/**
 * @exports BlogWall
 */
export default BlogWall
